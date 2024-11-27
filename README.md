# Course Template Repository

Welcome to the course template repository.
This repository serves as a starting point for all assignments and projects in the course.
Each subject has its own directory, and we will be using JavaScript as our main programming language.

# Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Tools](#development-tools)
- [Scripts](#scripts)
- [Coding Conventions](#coding-conventions)
- [Custom MR](#custom-mr)

# Prerequisites

You need to have `Node.js` and `npm` installed on your machine.
If you don't have them installed, you can download and install them from the official `Node.js` website:
[Download `Node.js`](https://nodejs.org/en).

`npm` is included with `Node.js`, so installing `Node.js` will also install `npm`.

# Getting Started

To get started with this repository, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/albaniles-digitales/workspace.git
   ```

This template repository may be updated throughout the course.
Make sure to pull the latest changes from the main branch to keep your repository up to date.

2. Install dependencies:

   Navigate to the repository directory and run:

   ```bash
   npm install
   ```

# Project Structure

The repository is organized as follows:

```
root
│   .eslintrc.js
│   .gitignore
│   jest.config.js
│   LICENSE
│   package.json
│   package-lock.json
│   README.md
│
└───subject1
│   │   README.md
│   │   index.js
│   │   ...
│
└───subject2
    │   README.md
    │   index.js
    │   ...
```

- Each subject has its own folder where you can find related assignments and projects.
- Common configurations for linting and testing are located at the root level.
- Each subject's folder contains a `README.md` file with specific information about that subject.

# Development Tools

We use the following tools to maintain code quality and consistency:

- [ESLint](https://eslint.org/): For linting JavaScript code. The configuration follows the Airbnb style guide.
- [Jest](https://jestjs.io/es-ES/): For running tests.

# Scripts

Here are the npm scripts you can use:

- Linting: To run ESLint and check for code quality issues:

  ```bash
  npm run lint
  ```

- Testing: To run the test suite using Jest:

  ```bash
  npm run test
  ```

# Coding conventions

Please adhere to the following coding conventions:

- We follow the Airbnb JavaScript style guide. You can find the full guide [here](https://github.com/airbnb/javascript).
- Ensure your code passes the ESLint checks defined in .eslintrc.js.
- Write meaningful commit messages.
- Use descriptive variable and function names.

# Continuous Integration with GitHub Actions

This repository is configured to use GitHub Actions for continuous integration. The workflow is defined in the `.github/workflows/ci.yml` file.

## Workflow Steps

1. **Install dependencies:** Installs the project dependencies using `npm install`, caching them based on `package-lock.json`.
2. **Run ESLint:** Lints the code to ensure it adheres to the Airbnb style guide.
3. **Run tests:** Runs the test suite using Jest.

## Triggering the Workflow

The workflow is triggered on any push to the repository.

You can view the status of the workflow in the "Actions" tab of your repository on GitHub.

## Custom MR

# MOPI Travel - The Ecologic Travel App

- Todo: fix api with / and web html index.html
  use the basic core-node-web-api code

## Description

MOPI Travel is a mobile application that allows users to plan their trips in a more sustainable way.

The app provides information about the carbon footprint of different means of transportation and suggests the most sustainable options for the user's trip. The app also allows users to track their carbon footprint and set goals to reduce it.

## Features

- Calculate the carbon footprint of different means of transportation
- Suggest the most sustainable options for the user's trip
- Track the user's carbon footprint
- Set goals to reduce the user's carbon footprint

## Technologies

- HTML
- CSS
- JavaScript
- Node.js
- JSON

## Installation

1. Clone the repository
2. Install the dependencies
3. Run the app

## Structure

- `index.html`: Main page of the app

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MOPI Travels - Turismo Ecológico</title>
    <link rel="stylesheet" href="styles.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header id="header"></header>

    <main>
      <section id="hero"></section>
      <section id="featured-events"></section>
      <section id="eco-tourism"></section>
      <section id="gallery"></section>
      <section id="newsletter"></section>
    </main>

    <footer id="footer"></footer>

    <script src="index.js"></script>
  </body>
</html>
```

- `style.css`: Stylesheet of the app

```css
/* Estilos generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  color: #333;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
header {
  background-color: #1b5e20;
  color: white;
  padding: 20px 0;
}

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #81c784;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

/* Hero Section */
#hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-image: url('/placeholder.svg?height=1080&width=1920');
  background-size: cover;
  background-position: center;
  position: relative;
}

#hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

#hero .content {
  position: relative;
  z-index: 1;
}

#hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

#hero p {
  font-size: 24px;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #45a049;
}

/* Featured Events */
#featured-events {
  background-color: #f1f8e9;
  padding: 80px 0;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.event-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.event-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.event-card .content {
  padding: 20px;
}

.event-card h3 {
  margin-bottom: 10px;
}

/* Eco-Tourism */
#eco-tourism {
  padding: 80px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  text-align: center;
}

.feature-icon {
  font-size: 48px;
  color: #4caf50;
  margin-bottom: 20px;
}

/* Gallery */
#gallery {
  background-color: #f1f8e9;
  padding: 80px 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  max-height: 80%;
  object-fit: contain;
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* Newsletter */
#newsletter {
  background-color: #1b5e20;
  color: white;
  padding: 80px 0;
  text-align: center;
}

#newsletter form {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

#newsletter input[type='email'] {
  padding: 12px;
  width: 300px;
  border: none;
  border-radius: 4px 0 0 4px;
}

#newsletter button {
  padding: 12px 24px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#newsletter button:hover {
  background-color: #45a049;
}

/* Footer */
footer {
  background-color: #1b5e20;
  color: white;
  padding: 40px 0;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-section {
  flex: 1;
  margin-bottom: 20px;
  min-width: 200px;
}

.footer-section h3 {
  margin-bottom: 20px;
}

.footer-section ul {
  list-style-type: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #81c784;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  color: white;
  font-size: 24px;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #81c784;
}

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #2e7d32;
}

/* Responsive Design */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #1b5e20;
  }

  nav ul.show {
    display: flex;
  }

  nav ul li {
    margin: 10px 0;
  }

  #hero h1 {
    font-size: 36px;
  }

  #hero p {
    font-size: 18px;
  }

  .footer-content {
    flex-direction: column;
  }
}
```

- `index.js`: JavaScript file of the app

```javascript
// Componentes
const header = `
    <div class="container">
        <nav>
            <a href="/" class="logo">MOPI Travels</a>
            <button class="menu-toggle">☰</button>
            <ul>
                <li><a href="#featured-events">Eventos</a></li>
                <li><a href="#eco-tourism">Eco-Turismo</a></li>
                <li><a href="#gallery">Galería</a></li>
                <li><a href="#newsletter">Contacto</a></li>
            </ul>
        </nav>
    </div>
`;

const hero = `
    <div class="content">
        <h1>Descubre la Naturaleza</h1>
        <p>Viajes ecológicos y sostenibles para el viajero consciente</p>
        <a href="#featured-events" class="btn">Explorar Eventos</a>
    </div>
`;

const featuredEvents = `
    <div class="container">
        <h2>Eventos Destacados</h2>
        <div class="events-grid">
            <div class="event-card">
                <img src="/placeholder.svg?height=300&width=400" alt="Senderismo en los Andes">
                <div class="content">
                    <h3>Senderismo en los Andes</h3>
                    <p>15 de Julio, 2024</p>
                    <a href="#" class="btn">Más Información</a>
                </div>
            </div>
            <div class="event-card">
                <img src="/placeholder.svg?height=300&width=400" alt="Observación de Aves en la Amazonía">
                <div class="content">
                    <h3>Observación de Aves en la Amazonía</h3>
                    <p>22 de Agosto, 2024</p>
                    <a href="#" class="btn">Más Información</a>
                </div>
            </div>
            <div class="event-card">
                <img src="/placeholder.svg?height=300&width=400" alt="Retiro de Yoga en la Playa">
                <div class="content">
                    <h3>Retiro de Yoga en la Playa</h3>
                    <p>5 de Septiembre, 2024</p>
                    <a href="#" class="btn">Más Información</a>
                </div>
            </div>
        </div>
    </div>
`;

const ecoTourism = `
    <div class="container">
        <h2>Nuestro Enfoque en Eco-Turismo</h2>
        <div class="features-grid">
            <div class="feature">
                <div class="feature-icon">🍃</div>
                <h3>Turismo Sostenible</h3>
                <p>Nuestros viajes están diseñados para minimizar el impacto ambiental y apoyar a las comunidades locales.</p>
            </div>
            <div class="feature">
                <div class="feature-icon">♻️</div>
                <h3>Prácticas Eco-amigables</h3>
                <p>Promovemos el uso de energías renovables y la reducción de residuos en todos nuestros tours.</p>
            </div>
            <div class="feature">
                <div class="feature-icon">❤️</div>
                <h3>Experiencias Auténticas</h3>
                <p>Conecta con la naturaleza y las culturas locales a través de experiencias inmersivas y respetuosas.</p>
            </div>
        </div>
    </div>
`;

const gallery = `
    <div class="container">
        <h2>Galería de Experiencias</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="/placeholder.svg?height=400&width=600" alt="Galería 1">
            </div>
            <div class="gallery-item">
                <img src="/placeholder.svg?height=400&width=600" alt="Galería 2">
            </div>
            <div class="gallery-item">
                <img src="/placeholder.svg?height=400&width=600" alt="Galería 3">
            </div>
            <div class="gallery-item">
                <img src="/placeholder.svg?height=400&width=600" alt="Galería 4">
            </div>
            <div class="gallery-item">
                <img src="/placeholder.svg?height=400&width=600" alt="Galería 5">
            </div>
            <div class="gallery-item">
                <img src="/placeholder.svg?height=400&width=600" alt="Galería 6">
            </div>
        </div>
    </div>
    <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01">
    </div>
`;

const newsletter = `
    <div class="container">
        <h2>Mantente Informado</h2>
        <p>Suscríbete a nuestro boletín para recibir las últimas noticias y ofertas de viajes ecológicos.</p>
        <form id="newsletter-form">
            <input type="email" placeholder="Tu correo electrónico" required>
            <button type="submit">Suscribirse</button>
        </form>
    </div>
`;

const footer = `
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>MOPI Travels</h3>
                <p>Descubre el mundo de manera sostenible y responsable con nosotros.</p>
            </div>
            <div class="footer-section">
                <h3>Enlaces Rápidos</h3>
                <ul>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Destinos</a></li>
                    <li><a href="#">Reservas</a></li>
                    <li><a href="#">Política de Privacidad</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Síguenos</h3>
                <div class="social-icons">
                    <a href="#" aria-label="Facebook">📘</a>
                    <a href="#" aria-label="Twitter">🐦</a>
                    <a href="#" aria-label="Instagram">📷</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 MOPI Travels. Todos los derechos reservados.</p>
        </div>
    </div>
`;

// Renderizar componentes
document.getElementById('header').innerHTML = header;
document.getElementById('hero').innerHTML = hero;
document.getElementById('featured-events').innerHTML = featuredEvents;
document.getElementById('eco-tourism').innerHTML = ecoTourism;
document.getElementById('gallery').innerHTML = gallery;
document.getElementById('newsletter').innerHTML = newsletter;
document.getElementById('footer').innerHTML = footer;

// Funcionalidad del menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// Funcionalidad de la galería
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const galleryItems = document.querySelectorAll('.gallery-item img');
const closeBtn = document.getElementsByClassName('close')[0];

galleryItems.forEach((img) => {
  img.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
  };
});

closeBtn.onclick = function () {
  modal.style.display = 'none';
};

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Funcionalidad del formulario de suscripción
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  console.log('Email submitted:', email);
  alert('¡Gracias por suscribirte!');
  newsletterForm.reset();
});
```

- `data.json`: Data file with the carbon footprint of different means of transportation:

  ```json

  ```

- README.md: Description of the project

## Plan of Work

- Week 1: Set up the project NPM with Node.js
  - [ ] Initialize the project as an NPM project with Node.js:
    - [ ] Create a package.json file
    - [ ] Install the dependencies
    - [ ] Create the basic structure of the app

### Checkpoint

Creamos una base con varias opciones usando todo lo generado en el repositorio workspace, la idea final es seguir el siguiente tutorial:

<section><details> Click para ver el tutorial de la APP</details>

# Tutorial: Creando una API REST con Node.js nativo

Este tutorial explica cómo crear una API REST completa usando Node.js nativo sin depender de frameworks externos como Express. Cubriremos la implementación de un servidor HTTPS, manejo de rutas, métodos HTTP, archivos estáticos y más.

## Índice

1. [Configuración inicial](#configuración-inicial)
2. [Estructura del servidor HTTPS](#estructura-del-servidor-https)
3. [Sistema de enrutamiento](#sistema-de-enrutamiento)
4. [Manejo de peticiones](#manejo-de-peticiones)
5. [Servicio de archivos estáticos](#servicio-de-archivos-estáticos)
6. [Gestión de CORS](#gestión-de-cors)
7. [Implementación de endpoints](#implementación-de-endpoints)
8. [Seguridad y certificados SSL](#seguridad-y-certificados-ssl)

## Configuración inicial

### Requisitos previos

- Node.js instalado (versión 12 o superior)
- Certificados SSL para HTTPS
- Conocimientos básicos de JavaScript y Node.js

### Estructura del proyecto

```
proyecto/
├── server.js
├── ssl/
│   ├── key.pem
│   └── cert.pem
└── public/
    └── index.html
```

## Estructura del servidor HTTPS

### Configuración básica

El servidor HTTPS requiere certificados SSL. Primero, importamos los módulos necesarios:

```javascript
const https = require('https');
const fs = require('fs');
const path = require('path');
```

### Certificados SSL

Los certificados se cargan al iniciar el servidor:

```javascript
const options = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),
};
```

Para desarrollo local, puedes generar certificados autofirmados usando OpenSSL:

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
```

## Sistema de enrutamiento

### Router objeto

El router utiliza un objeto para almacenar las rutas por método HTTP:

```javascript
const router = {
  GET: {},
  POST: {},
  PUT: {},
  DELETE: {},
  OPTIONS: {},
};
```

### Manejo de parámetros URL

La función `extractURLParams` extrae parámetros dinámicos de las URLs:

```javascript
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
```

## Manejo de peticiones

### Parsing del body

Para peticiones POST y PUT, necesitamos parsear el body:

```javascript
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
  });
};
```

### Manejo de respuestas

Configuramos headers comunes y formato JSON:

```javascript
res.setHeader('Content-Type', 'application/json');
```

## Servicio de archivos estáticos

### Implementación - Revisar con Monste

La función `serveStaticFile` maneja la entrega de archivos estáticos:

```javascript
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
```

### Tipos MIME

Determinamos el tipo de contenido basado en la extensión del archivo:

```javascript
const getContentType = (filepath) => {
  const ext = path.extname(filepath).toLowerCase();
  const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
  };
  return types[ext] || 'text/plain';
};
```

## Gestión de CORS

Implementamos headers CORS para permitir peticiones cross-origin:

```javascript
const setCORSHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};
```

## Implementación de endpoints

### Definición de rutas

Ejemplo de implementación de CRUD para usuarios:

```javascript
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
```

## Seguridad y certificados SSL

### Mejores prácticas

1. Usar HTTPS siempre
2. Implementar rate limiting
3. Validar entrada de usuarios
4. Usar headers de seguridad

### Headers de seguridad recomendados

```javascript
res.setHeader('X-Content-Type-Options', 'nosniff');
res.setHeader('X-Frame-Options', 'DENY');
res.setHeader('X-XSS-Protection', '1; mode=block');
```

## Pruebas

### Ejemplos de peticiones

Puedes probar la API usando curl:

```bash
# GET todos los usuarios
curl https://localhost:3000/api/users

# POST nuevo usuario
curl -X POST https://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'

# PUT actualizar usuario
curl -X PUT https://localhost:3000/api/users/1234 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe"}'

# DELETE usuario
curl -X DELETE https://localhost:3000/api/users/1234
```

## Conclusión

Esta implementación proporciona una base sólida para una API REST usando Node.js nativo. Algunas ventajas de este enfoque incluyen:

- Control total sobre el código
- Sin dependencias externas
- Mejor comprensión de cómo funciona Node.js
- Mayor flexibilidad para personalizaciones

Para mejorar esta implementación, considera agregar:

1. Sistema de autenticación
2. Rate limiting
3. Validación de datos
4. Logging
5. Manejo de errores más robusto
6. Tests unitarios e integración
7. Documentación API (Swagger/OpenAPI)

<section><details>Click para visualizar el coódigo completo de server.js</details>

```javascript
// server.js
const https = require('https');
const fs = require('fs');
const path = require('path');
const { parse } = require('url');

// Opciones para el servidor HTTPS
const options = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),
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

// Definición de rutas
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
```

</section>

</section>

---

- Week 2: Create the basic structure of the app
- Week 3: Implement the calculation of functionalities, such a basic API to communicate the frontend with the backend.
- Week 4: Implement a docker container to deploy the app in github pages or heroku or any other platform.
