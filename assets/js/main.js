// Portfolio Data


const portfolioProjects = [];

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Bancada de Cozinha Gourmet',
    category: 'Bancadas',
    image: `./assets/images/portfolio/bancada0${i}.jpeg`

  })
}

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Lavatórios',
    category: 'Lavatorios',
    image: `./assets/images/portfolio/lavatorio0${i}.jpeg`

  })
}

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Gabinetes de banheiro em porcelanato',
    category: 'Gabinetes',
    image: `./assets/images/portfolio/gabinete0${i}.jpeg`

  })
}

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Bancada para cuba de sobrepor',
    category: 'Bancadas-para-cuba',
    image: `./assets/images/portfolio/bancada-cuba-sobrepor0${i}.jpeg`

  })
}


for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Instalação de porcelanato e revestimentos',
    category: 'Revestimentos',
    image: `./assets/images/portfolio/revestimento0${i}.jpeg`

  })
}

const categories = ["Todos", ...new Set(portfolioProjects.map(p => p.category))];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize navbar scroll effect
  initNavbarScroll();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize portfolio
  initPortfolio();

  //Initialize o filtro
  renderPhotos(portfolioProjects)
  
  // Initialize contact form
  initContactForm();
  
  // Initialize WhatsApp tooltip
  initWhatsAppTooltip();
});

// Scroll to section function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      updateMobileMenuIcon(false);
    }
  }
}

// Open WhatsApp
function openWhatsApp() {
  const phoneNumber = '11972883448';
  const message = 'Olá! vim através do site e Gostaria de solicitar um orçamento.';
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Initialize scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Initialize navbar scroll effect
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Initialize mobile menu
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  let isOpen = false;

  mobileMenuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      mobileMenu.classList.add('is-open');
    } else {
      mobileMenu.classList.remove('is-open');
    }
    updateMobileMenuIcon(isOpen);
  });
}

// Update mobile menu icon
function updateMobileMenuIcon(isOpen) {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const icon = mobileMenuBtn.querySelector('i');
  
  if (isOpen) {
    icon.setAttribute('data-lucide', 'x');
  } else {
    icon.setAttribute('data-lucide', 'menu');
  }
  
  // Recreate icons to update the display
  lucide.createIcons();
}

// Initialize portfolio
function initPortfolio() {

  const filterContainer = document.getElementById('filters');
  
  filterContainer.innerHTML = "";

  categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.className = "filter-btn" + (index === 0 ? " active" : "");

    button.addEventListener("click", () => {
      setActiveButton(button);
      filterPhotos(category);
    });

    filterContainer.appendChild(button);
  });

}

function setActiveButton(activeBtn) {
  const buttons = document.querySelectorAll("#filters button");
  buttons.forEach(btn => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}



function filterPhotos(category) {

  if (category === "Todos") {
    renderPhotos(portfolioProjects);
    return;
  }

  const filtered = portfolioProjects.filter(project => project.category === category);
  renderPhotos(filtered);
}

// Quantidade de Fotos que aparece no portfolio

let imagesVisible = 3;

const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  imagesVisible = 6;
}

// Botão de Ver mais

let expanded = false;

function extendImages() {
  const portfolioSection = document.getElementById("portfolio");
  const items = document.querySelectorAll('.portfolio-item');

  const sectionTop = portfolioSection.offsetTop;

  items.forEach((item, index) => {
    if (index >= 4) {
      if (expanded) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
    }
  });

  expanded = !expanded;

  if (!expanded) {
    window.scrollTo({
      top: sectionTop - 50, // ajuste header fixo
      behavior: "smooth"
    });
  }

  //  muda texto do botão
  const btn = document.getElementById("btn-ver-mais");
  btn.textContent = expanded ? "Ver menos" : "Ver mais";
}



function renderPhotos(array) {
  const portfolioGrid = document.getElementById('portfolio-grid');


  // 🔥 LIMPA antes de renderizar
  portfolioGrid.innerHTML = "";

  array.forEach((project, index) => {

    

    const hiddenClass = index >= imagesVisible ? "hidden" : "";

    portfolioGrid.innerHTML += `
      <div class="portfolio-item ${hiddenClass} animate-fade-in" onclick="openPortfolioModalById('${project.image}')">
        <div class="portfolio-item-inner">
          <img src="${project.image}" alt="${project.title}" />
        </div>
        <div class="portfolio-item-overlay">
          <div class="portfolio-item-caption">
            <div>
              <p>${project.category}</p>
              <h3>${project.title}</h3>
            </div>
            <i data-lucide="zoom-in"></i>
          </div>
        </div>
      </div>
    `;
  });

  // 🔥 Atualiza ícones depois de renderizar
  lucide.createIcons();
}

// Open portfolio modal
function openPortfolioModalById(image) {
  const project = portfolioProjects.find(p => p.image === image);

  const modal = document.getElementById('portfolio-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');

  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;

  modal.classList.add('is-open');
}

// Close portfolio modal
function closePortfolioModal() {
  const modal = document.getElementById('portfolio-modal');
  modal.classList.remove('is-open');
}

// Initialize contact form
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      city: formData.get('city'),
      projectType: formData.get('projectType'),
      description: formData.get('description'),
    };
    
    // Simulate form submission
    console.log('Dados do formulário:', data);
    alert(`Obrigado, ${data.name}! Seu orçamento foi enviado com sucesso. Entraremos em contato em breve!`);
    
    // Reset form
    form.reset();
  });
  
  // Recreate icons after form elements are ready
  lucide.createIcons();
}

// Initialize WhatsApp tooltip
function initWhatsAppTooltip() {
  const whatsappBtn = document.getElementById('whatsapp-btn');
  const tooltip = document.getElementById('whatsapp-tooltip');
  
  whatsappBtn.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
  });

  whatsappBtn.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
}
