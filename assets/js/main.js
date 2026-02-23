

// Portfolio Data

const portfolioProjects = [];

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Bancada de Cozinha Gourmet',
    category: 'Bancadas',
    area: ['kitchen', 'gourmet'],
    material: 'macchia-oro',
    image: `./assets/images/portfolio/bancada0${i}.jpeg`

  })
}

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Lavatórios',
    category: 'Lavatorios',
    area: ['bathroom'],
    material: 'calacatta',
    image: `./assets/images/portfolio/lavatorio0${i}.jpeg`

  })
}

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Gabinetes de banheiro em porcelanato',
    category: 'Gabinetes',
    area: ['bathroom', 'external'],
    material: 'tinta-unita-bianco-natural',
    image: `./assets/images/portfolio/gabinete0${i}.jpeg`

  })
}

for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Bancada para cuba de sobrepor',
    category: 'Bancadas-para-cuba',
    area: ['bathroom'],
    material: 'tinta-unita-nero-fosco',
    image: `./assets/images/portfolio/bancada-cuba-sobrepor0${i}.jpeg`

  })
}


for (let i = 1; i <= 6; i++){
  portfolioProjects.push({
    title: 'Instalação de porcelanato e revestimentos',
    category: 'Revestimentos',
    area: ['stair', 'living-room'],
    material: 'taj-mahal-polido',
    image: `./assets/images/portfolio/revestimento0${i}.jpeg`

  })
}

const materialsData = {

  'macchia-oro': {
    name: 'Macchia Oro',
    description: 'Pedra sofisticada com fundo claro e veios dourados marcantes, trazendo elegância e requinte ao ambiente.',
    finish: 'Polido',
    resistance: 'Alta resistência a riscos e calor',
    usage: 'Cozinhas, áreas gourmet e bancadas premium',
    image: './assets/images/materials/macchia-oro.jpg'
  },

  'calacatta': {
    name: 'Calacatta',
    description: 'Material de fundo branco com veios intensos e elegantes, ideal para ambientes luxuosos e modernos.',
    finish: 'Polido',
    resistance: 'Boa resistência térmica e estrutural',
    usage: 'Banheiros, lavabos e painéis decorativos',
    image: './assets/images/materials/calacatta.jpg'
  },

  'tinta-unita-bianco-natural': {
    name: 'Tinta Unita Bianco Natural',
    description: 'Superfície uniforme em tom branco natural, perfeita para projetos minimalistas e contemporâneos.',
    finish: 'Natural',
    resistance: 'Alta resistência a manchas e desgaste',
    usage: 'Cozinhas, mobiliário planejado e painéis',
    image: './assets/images/materials/tinta-unita-bianco-natural.jpg'
  },

  'tinta-unita-nero-fosco': {
    name: 'Tinta Unita Nero Fosco',
    description: 'Superfície preta fosca de acabamento sofisticado, ideal para projetos modernos e industriais.',
    finish: 'Fosco',
    resistance: 'Alta resistência a riscos e abrasão',
    usage: 'Escadas, bancadas, áreas gourmet e mobiliário',
    image: './assets/images/materials/tinta-unita-nero-fosco.jpg'
  },

  'taj-mahal-polido': {
    name: 'Taj Mahal Polido',
    description: 'Quartzito nobre de tonalidade bege suave com veios delicados, trazendo sofisticação e leveza ao ambiente.',
    finish: 'Polido',
    resistance: 'Altíssima resistência térmica e estrutural',
    usage: 'Cozinhas, ilhas centrais e áreas internas sofisticadas',
    image: './assets/images/materials/taj-mahal-polido.jpg'
  }

};

const categories = ["Todos", ...new Set(portfolioProjects.map(p => p.category))];

// Formata o nome dos materiais
function formatMaterialName(material) {
  return material
    .split('-') // separa onde tem "-"
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' '); // junta com espaço
}

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

const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
  const offset = window.scrollY;
  heroBg.style.transform = `scale(${1 + offset / 4000})`;
});

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 15;
  const y = (e.clientY / window.innerHeight - 0.5) * 15;

  heroBg.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
});

// Showroom

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

//Rastreia qual div foi clicada

const areaContainer = document.querySelector('.showroom');

areaContainer.addEventListener('click', (event) => {
  
  // Procura o elemento mais próximo com a classe area-card
  const clickedCard = event.target.closest('.showroom-card');

  // Se não clicou em um card, sai da função
  if (!clickedCard) return;

  // Aqui você sabe exatamente qual foi clicado
  const selectedArea = clickedCard.dataset.area;

  // Abre o modal
  openMaterialsModal(selectedArea);

})



/* ===============================
   4️⃣  MOSTRAR MATERIAIS DA ÁREA
================================= */

function openMaterialsModal(area) {

  console.log(area)
  // Filtra projetos pela área
  const projectsByArea = portfolioProjects.filter(
    project => project.area.includes(area)
  );

  // Pega materiais únicos
  const uniqueMaterials = [...new Set(
    projectsByArea.map(project => project.material)
  )];

  // Monta HTML
  modalContent.innerHTML = `
    <h2>Materiais disponíveis</h2>
    <div class="materials-grid">
      ${uniqueMaterials.map(material => `
        <button 
          class="material-btn" 
          data-area="${area}" 
          data-material="${material}"
          style="background-image: url('assets/images/materials/${material}.jpg')"
        >
        <span>${formatMaterialName(material)}</span>
        </button>
      `).join('')}
    </div>
  `;

  modal.classList.add('active');

  // Adiciona evento aos botões
  const materialButtons = document.querySelectorAll('.material-btn');

  materialButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedMaterial = button.dataset.material;
      openProjectsByMaterial(area, selectedMaterial);
    });
  });
}


/* ===============================
   5️⃣  MOSTRAR PROJETOS DO MATERIAL
================================= */

function openProjectsByMaterial(area, material) {

  const materialInfo = materialsData[material];

  const filteredProjects = portfolioProjects.filter(
    project =>
      project.area.includes(area) &&
      project.material === material
  );

  modalContent.innerHTML = `
    <button class="back-btn">← Voltar</button>

    <div class="material-header">
      <h2>${materialInfo.name}</h2>
      <p>${materialInfo.description}</p>

      <div class="material-specs">
        <span><strong>Acabamento:</strong> ${materialInfo.finish}</span>
        <span><strong>Resistência:</strong> ${materialInfo.resistance}</span>
        <span><strong>Indicação:</strong> ${materialInfo.usage}</span>
      </div>
    </div>

    <h3 class="projects-title">Projetos realizados com esta pedra</h3>

    <div class="projects-grid">
      ${filteredProjects.map(project => `
        <div class="project-card">
          <img src="${project.image}" alt="${project.title}">
          <h4>${project.title}</h4>
        </div>
      `).join('')}
    </div>
  `;

  document.querySelector('.back-btn')
    .addEventListener('click', () => {
      openMaterialsModal(area);
    });
}


/* ===============================
   6️⃣  FECHAR MODAL
================================= */



// Método 2: Delegação de eventos no modal
modal.addEventListener('click', (e) => {
  // Se clicou no X
  if (e.target.classList.contains('modal-close')) {
    e.stopPropagation();
    modal.classList.remove('active');
    return;
  }
  
  // Se clicou fora do modal-box (na área escura)
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});




