import './styles/main.css'
import { renderHome } from './pages/home.js'
import { renderPortfolio } from './pages/portfolio.js'
import { renderArt } from './pages/art.js'
import { renderCuration } from './pages/curation.js'
import { renderWriting } from './pages/writing.js'
import { renderCV } from './pages/cv.js'
import { renderBio } from './pages/bio.js'
import { renderContact } from './pages/contact.js'

// Simple router
const routes = {
  '/': renderHome,
  '/portfolio': renderPortfolio,
  '/art': renderArt,
  '/curation': renderCuration,
  '/writing': renderWriting,
  '/cv': renderCV,
  '/bio': renderBio,
  '/contact': renderContact
}

// Modal functions - make them global so they work from inline onclick handlers
window.openModal = function(imageSrc, caption) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  
  if (modal && modalImg && modalCaption) {
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
    modalCaption.textContent = caption;
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }
}

window.closeModal = function() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Render persistent header
function renderHeader() {
  const currentPath = window.location.hash.slice(1) || '/'
  
  return `
    <header class="site-header">
      <h1 class="name"><a href="#/" onclick="window.location.hash='#/'; return false;">Virginia Cannella</a></h1>
      
      <nav class="navigation">
        <ul class="nav-links">
          <li class="nav-link">
            <a href="#/portfolio" class="${currentPath === '/portfolio' ? 'active' : ''}">portfolio</a>
          </li>
          
          <li class="nav-link">
            <a href="#/cv" class="${currentPath === '/cv' ? 'active' : ''}">cv</a>
          </li>
          
          <li class="nav-link">
            <a href="#/bio" class="${currentPath === '/bio' ? 'active' : ''}">bio</a>
          </li>
          
          <li class="nav-link">
            <a href="#/contact" class="${currentPath === '/contact' ? 'active' : ''}">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  `
}

function router() {
  const path = window.location.hash.slice(1) || '/'
  const render = routes[path] || renderHome
  
  const app = document.getElementById('app')
  
  // Render header + page content
  app.innerHTML = `
    ${renderHeader()}
    <div class="page-content-wrapper">
      ${render()}
    </div>
  `
  
  // Setup event listeners after page renders
  setupEventListeners()
}

function setupEventListeners() {
  // Close modal on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      window.closeModal();
    }
  });
}

// Initialize router
window.addEventListener('hashchange', router)
window.addEventListener('load', router)

// Handle navigation
window.navigate = (path) => {
  window.location.hash = path
}