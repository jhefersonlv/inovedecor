// Portfolio Data


const portfolioProjects = [];

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Bancada de Cozinha Gourmet',
    category: 'Bancadas',
    image: `./assets/bancada0${i}.jpeg`

  })
}

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Lavatórios',
    category: 'Lavatorios',
    image: `./assets/lavatorio0${i}.jpeg`

  })
}

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Gabinetes de banheiro em porcelanato',
    category: 'Gabinetes',
    image: `./assets/gabinete0${i}.jpeg`

  })
}

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Bancada para cuba de sobrepor',
    category: 'Bancadas-para-cuba',
    image: `./assets/bancada-cuba-sobrepor0${i}.jpeg`

  })
}


for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Instalação de porcelanato e revestimentos',
    category: 'Revestimentos',
    image: `./assets/revestimento0${i}.jpeg`

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
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
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
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
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

  categories.forEach( category => {
    const button = document.createElement("button");

    button.textContent = category
    button.className = baseClasses;

    button.addEventListener("click", () => {
      setActiveButton(button);
      filterPhotos(category);
    });
    
    filterContainer.appendChild(button);
    

  });

}

const baseClasses = `
  bg-gradient-to-br from-gray-900 to-gray-800
  px-6 py-3
  text-white
  rounded-2xl
  border-2 border-white/20
  transition-all duration-300 ease-out
  hover:shadow-2xl
  hover:border-[#d7c87c]
  hover:-translate-y-1
`;

const activeClasses = `
  bg-gradient-to-br from-[#d7c87c] to-[#b6a85f]
  text-black
  shadow-2xl
  scale-105
  border-[#d7c87c]
`;



function setActiveButton(activeBtn) {
  const buttons = document.querySelectorAll("#filters button");

  buttons.forEach(btn => {
    btn.className = baseClasses;
  });

  activeBtn.className = `${baseClasses} ${activeClasses}`;
}



function filterPhotos(category) {

  if (category === "Todos") {
    renderPhotos(portfolioProjects);
    return;
  }

  const filtered = portfolioProjects.filter(project => project.category === category);
  renderPhotos(filtered);
}

function renderPhotos(array) {
  const portfolioGrid = document.getElementById('portfolio-grid');

  // 🔥 LIMPA antes de renderizar
  portfolioGrid.innerHTML = "";

  array.forEach((project, index) => {
    portfolioGrid.innerHTML += `
      <div 
        class="group relative overflow-hidden rounded-2xl cursor-pointer animate-on-scroll"
        onclick="openPortfolioModalById('${project.image}')"
      >
        <!-- Imagem -->
        <div class="aspect-square overflow-hidden bg-gray-800">
          <img
            src="${project.image}"
            alt="${project.title}"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <div class="flex items-start justify-between">
              <div>
                <p class="text-amber-400 text-sm font-semibold mb-1">
                  ${project.category}
                </p>
                <h3 class="text-white text-xl font-bold">
                  ${project.title}
                </h3>
              </div>
              <i data-lucide="zoom-in" class="text-white flex-shrink-0 w-6 h-6"></i>
            </div>
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

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// Close portfolio modal
function closePortfolioModal() {
  const modal = document.getElementById('portfolio-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
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
    tooltip.classList.remove('hidden');
  });
  
  whatsappBtn.addEventListener('mouseleave', () => {
    tooltip.classList.add('hidden');
  });
}
