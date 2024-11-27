const loadUnsplashImages = async () => {
    try {
        // Obtener imágenes de Unsplash
        const response = await fetch('https://localhost:3000/api/images?query=nature&count=10', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Error al obtener imágenes de Unsplash');
        }

        const images = await response.json();

        // **1. Galería**
        const galleryGrid = document.querySelector('.gallery-grid');
        galleryGrid.innerHTML = ''; // Limpia contenido previo

        images.slice(0, 6).forEach((image) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <a href="${image.link}" target="_blank" rel="noopener noreferrer">
                    <img src="${image.url}" alt="Imagen de Unsplash">
                </a>
            `;
            galleryGrid.appendChild(galleryItem);
        });

        // **2. Eventos Destacados**
        const eventCards = document.querySelectorAll('.event-card img');
        eventCards.forEach((img, index) => {
            if (images[index]) {
                img.src = images[index].url;
                img.alt = `Evento ${index + 1}`;
            }
        });

        // **3. Banner Inicial**
        const heroSection = document.querySelector('#hero');
        if (images[0]) {
            heroSection.style.backgroundImage = `url(${images[0].url})`;
            heroSection.style.backgroundSize = 'cover';
            heroSection.style.backgroundPosition = 'center';
        }
    } catch (error) {
        console.error('Error cargando imágenes de Unsplash:', error);
        alert('No se pudieron cargar las imágenes de Unsplash.');
    }
};

// Llama a la función para cargar las imágenes al iniciar
loadUnsplashImages();


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
                <img src="https://via.placeholder.com/300x200" alt="Imagen de prueba">

                <div class="content">
                    <h3>Senderismo en los Andes</h3>
                    <p>15 de Julio, 2024</p>
                    <a href="#" class="btn">Más Información</a>
                </div>
            </div>
            <div class="event-card">
<img src="https://via.placeholder.com/300x200" alt="Imagen de prueba">
                <div class="content">
                    <h3>Observación de Aves en la Amazonía</h3>
                    <p>22 de Agosto, 2024</p>
                    <a href="#" class="btn">Más Información</a>
                </div>
            </div>
            <div class="event-card">
<img src="https://via.placeholder.com/300x200" alt="Imagen de prueba">
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
<img src="https://via.placeholder.com/300x200" alt="Imagen de prueba">
            </div>
            <div class="gallery-item">
<img src="https://via.placeholder.com/300x200" alt="Imagen de prueba">
            </div>
            <div class="gallery-item">
<img src="https://via.placeholder.com/300x200" alt="Imagen de prueba">
            </div>
            <div class="gallery-item">
<img src="https://via.placeholder.com/300x200" alt="Imagen de prueba">            </div>
            <div class="gallery-item">
<img src="https://via.placeholder.com/300x200" alt="Imagen de prueba">
            </div>
            <div class="gallery-item">
<img src="https://via.placeholder.com/300x200" alt="Imagen de prueba">
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
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const galleryItems = document.querySelectorAll('.gallery-item img');
const closeBtn = document.getElementsByClassName("close")[0];

galleryItems.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Funcionalidad del formulario de suscripción
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    console.log('Email submitted:', email);
    alert('¡Gracias por suscribirte!');
    newsletterForm.reset();
});

