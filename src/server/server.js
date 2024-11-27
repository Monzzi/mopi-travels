// Librerias requeridas
const https = require('https'); // network
const fs = require('fs'); // filesystem
const path = require('path'); // path
const { parse } = require('url'); // url utils

// Opciones para el servidor HTTPS
const options = {
  key: fs.readFileSync(path.join(__dirname, '/assets/ssl', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '/assets/ssl', 'cert.pem')),
};

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
    'GET, POST, PUT, DELETE, OPTIONS',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

// Router para manejar las rutas
const router = {
  GET: {},
  POST: {},
  PUT: {},
  DELETE: {},
  OPTIONS: {},
};

// Middleware para servir archivos estáticos
const serveStaticFile = async (req, res, filepath) => {
  try {
    const fileStream = fs.createReadStream(filepath);
    const stat = await fs.promises.stat(filepath);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', getContentType(filepath));
    fileStream.pipe(res);
  } catch (error) {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'File not found' }));
  }
};

// Función para obtener el tipo de contenido basado en la extensión del archivo
const getContentType = (filepath) => {
  const ext = path.extname(filepath).toLowerCase();
  const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
  };
  return types[ext] || 'text/plain';
};

const renderHome = (res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const data = 
    res.write(data)
}

// Definición de rutas
router.GET['/'] = (req, res) => {
  renderHome(res);
  res.end();
};

router.GET['/api/users'] = (req, res) => {
  res.end(JSON.stringify(users));
};

router.POST['/api/users'] = async (req, res) => {
  const user = await parseBody(req);
  user.id = Date.now();
  users.push(user);
  res.end(JSON.stringify(user));
};

router.PUT['/api/users/:id'] = async (req, res) => {
  const id = parseInt(req.params.id);
  const userData = await parseBody(req);
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    users[index] = { ...users[index], ...userData };
    res.end(JSON.stringify(users[index]));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'User not found' }));
  }
};

router.DELETE['/api/users/:id'] = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    res.end(JSON.stringify(deletedUser));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'User not found' }));
  }
};

router.OPTIONS['*'] = (req, res) => {
  setCORSHeaders(res);
  res.end();
};

// Función para extraer parámetros de la URL
const extractURLParams = (path, pattern) => {
  const params = {};
  const pathParts = path.split('/');
  const patternParts = pattern.split('/');

  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
      const paramName = patternParts[i].slice(1);
      params[paramName] = pathParts[i];
    }
  }

  return params;
};

// Función para encontrar la ruta coincidente
const findMatchingRoute = (method, path) => {
  const routes = router[method];

  for (const pattern in routes) {
    if (pattern === path) {
      return { handler: routes[pattern], params: {} };
    }

    const patternParts = pattern.split('/');
    const pathParts = path.split('/');

    if (patternParts.length === pathParts.length) {
      let match = true;
      for (let i = 0; i < patternParts.length; i++) {
        if (
          !patternParts[i].startsWith(':') &&
          patternParts[i] !== pathParts[i]
        ) {
          match = false;
          break;
        }
      }
      if (match) {
        return {
          handler: routes[pattern],
          params: extractURLParams(path, pattern),
        };
      }
    }
  }

  return null;
};

// Creación del servidor
const server = https.createServer(options, async (req, res) => {
  const { pathname } = parse(req.url);
  const method = req.method;

  // Configurar headers por defecto
  res.setHeader('Content-Type', 'application/json');
  setCORSHeaders(res);

  // Buscar ruta coincidente
  const route = findMatchingRoute(method, pathname);

  if (route) {
    req.params = route.params;
    try {
      await route.handler(req, res);
    } catch (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  } else if (pathname.startsWith('/public/')) {
    // Servir archivos estáticos
    const filepath = path.join(__dirname, pathname);
    await serveStaticFile(req, res, filepath);
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
