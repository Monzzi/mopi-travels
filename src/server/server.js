// Librerias requeridas
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Convierte URL en rutas de archivo
import { parse } from 'url';
import fetch from 'node-fetch';
import 'dotenv/config';

// Obtén la ruta absoluta del archivo actual
const __filename = fileURLToPath(import.meta.url);

// Obtén el directorio del archivo actual
const __dirname = path.dirname(__filename);

// Opciones para el servidor HTTPS
const options = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
};

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

// Almacenamiento en memoria para los datos
let users = [];

// Función para parsear el body de las peticiones
const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        resolve({});
      }
    });
    req.on('error', (err) => {
      reject(err);
    });
  });
};

// Función para manejar los headers CORS
const setCORSHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

// Función para obtener el tipo de contenido basado en la extensión del archivo
const getContentType = (filepath) => {
  const ext = path.extname(filepath).toLowerCase();
  const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  };
  return types[ext] || 'application/octet-stream';
};

// Función para servir archivos estáticos
const serveStaticFile = (req, res) => {
  const baseDir = req.url.startsWith('/assets')
    ? path.join(__dirname, '../assets')
    : path.join(__dirname, '../client');

  const filePath = path.join(baseDir, req.url.replace(/^\/(assets|client)/, ''));


  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error al leer archivo estático:', err);
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Archivo no encontrado' }));
    } else {
      res.writeHead(200, { 'Content-Type': getContentType(filePath) });
      res.end(data);
    }
  });
};

// Función para renderizar la página principal
const renderHome = (res) => {
  const filePath = path.join(__dirname, '../client', 'index.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer index.html:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Error interno del servidor' }));
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};

// Creación del servidor
const PORT = process.env.PORT || 3000;

const server = https.createServer(options, async (req, res) => {
  const { pathname } = parse(req.url);
  const method = req.method;

  // Configurar headers por defecto
  res.setHeader('Content-Type', 'application/json');
  setCORSHeaders(res);

  if (pathname === '/') {
    renderHome(res);
  } else if (pathname.startsWith('/assets') || pathname.startsWith('/client')) {
    serveStaticFile(req, res);
  } else if (pathname.startsWith('/api')) {
    // Buscar ruta coincidente
    const route = findMatchingRoute(method, pathname);
    if (route) {
      req.params = route.params;
      try {
        await route.handler(req, res);
      } catch (error) {
        console.error('Error interno en el servidor:', error);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en https://localhost:${PORT}`);
});

// Definición de rutas dinámicas
const router = {
  GET: {
    '/api/users': (req, res) => {
      res.end(JSON.stringify(users));
    },
    '/api/images': async (req, res) => {
      const { query = 'ecotourism', count = 6 } = parse(req.url, true).query;
      const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&per_page=${count}&client_id=${UNSPLASH_ACCESS_KEY}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Error al consultar Unsplash');
        const data = await response.json();
        const images = data.results.map((img) => ({
          url: img.urls.regular,
          author: img.user.name,
          link: img.links.html,
        }));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(images));
      } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Error al obtener imágenes' }));
      }
    },
  },
  POST: {
    '/api/users': async (req, res) => {
      const user = await parseBody(req);
      user.id = Date.now();
      users.push(user);
      res.end(JSON.stringify(user));
    },
  },
};

const findMatchingRoute = (method, path) => router[method]?.[path];
