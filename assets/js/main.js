

// Portfolio Data – organizado por ambiente e materiais do catálogo Albory
// Cada material tem foto em assets/images/materials/[slug].png
// Cada projeto tem foto em assets/images/portfolio/

const portfolioProjects = [
  // Cozinha / Área Gourmet – Bancadas (Corpo Completo, Corpo Branco, Corpo Bege)
    { title: 'Bancada Cozinha',
      category: 'Bancadas', 
      area: ['kitchen', 'gourmet'],
      material: 'white-pearl',
      image: 'assets/images/portfolio/bancada01.jpeg' },

  { title: 'Bancada Cozinha', category: 'Bancadas', area: ['kitchen', 'gourmet'], material: 'white-pearl', image: 'assets/images/portfolio/bancada02.jpeg' },
  { title: 'Bancada Cozinha', category: 'Bancadas', area: ['kitchen', 'gourmet'], material: 'galaxy-beige', image: 'assets/images/portfolio/bancada03.jpeg' },
  { title: 'Bancada Cozinha', category: 'Bancadas', area: ['kitchen', 'gourmet'], material: 'galaxy-beige', image: 'assets/images/portfolio/bancada04.jpeg' },
  { title: 'Bancada Cozinha', category: 'Bancadas', area: ['kitchen', 'gourmet'], material: 'crystal-white', image: 'assets/images/portfolio/bancada05.jpeg' },
  { title: 'Bancada Cozinha', category: 'Bancadas', area: ['kitchen', 'gourmet'], material: 'crystal-white', image: 'assets/images/portfolio/bancada06.jpeg' },
  // Banheiro – Lavatórios (Corpo Branco)
  { title: 'Lavatórios', category: 'Lavatorios', area: ['bathroom'], material: 'atlantic-white', image: 'assets/images/portfolio/lavatorio01.jpeg' },
  { title: 'Lavatórios', category: 'Lavatorios', area: ['bathroom'], material: 'atlantic-white', image: 'assets/images/portfolio/lavatorio02.jpeg' },
  { title: 'Lavatórios', category: 'Lavatorios', area: ['bathroom'], material: 'spider-statuario', image: 'assets/images/portfolio/lavatorio03.jpeg' },
  { title: 'Lavatórios', category: 'Lavatorios', area: ['bathroom'], material: 'spider-statuario', image: 'assets/images/portfolio/lavatorio04.jpeg' },
  { title: 'Lavatórios', category: 'Lavatorios', area: ['bathroom'], material: 'nexa-white', image: 'assets/images/portfolio/lavatorio05.jpeg' },
  { title: 'Lavatórios', category: 'Lavatorios', area: ['bathroom'], material: 'nexa-white', image: 'assets/images/portfolio/lavatorio06.jpeg' },
  // Banheiro / Área Externa – Gabinetes (Cores Sólidas, Corpo Branco)
  { title: 'Gabinetes em porcelanato', category: 'Gabinetes', area: ['bathroom', 'external'], material: 'tinta-unita-bianco-natural', image: 'assets/images/portfolio/gabinete01.jpeg' },
  { title: 'Gabinetes em porcelanato', category: 'Gabinetes', area: ['bathroom', 'external'], material: 'tinta-unita-bianco-natural', image: 'assets/images/portfolio/gabinete02.jpeg' },
  { title: 'Gabinetes em porcelanato', category: 'Gabinetes', area: ['bathroom', 'external'], material: 'nano-white', image: 'assets/images/portfolio/gabinete03.jpeg' },
  { title: 'Gabinetes em porcelanato', category: 'Gabinetes', area: ['bathroom', 'external'], material: 'nano-white', image: 'assets/images/portfolio/gabinete04.jpeg' },
  { title: 'Gabinetes em porcelanato', category: 'Gabinetes', area: ['bathroom', 'external'], material: 'dark-grey', image: 'assets/images/portfolio/gabinete05.jpeg' },
  { title: 'Gabinetes em porcelanato', category: 'Gabinetes', area: ['bathroom', 'external'], material: 'dark-grey', image: 'assets/images/portfolio/gabinete06.jpeg' },
  // Banheiro – Bancada para cuba (Corpo Preto)
  { title: 'Bancada para cuba de sobrepor', category: 'Bancadas-para-cuba', area: ['bathroom'], material: 'nero-marquina', image: 'assets/images/portfolio/bancada-cuba-sobrepor01.jpeg' },
  { title: 'Bancada para cuba de sobrepor', category: 'Bancadas-para-cuba', area: ['bathroom'], material: 'nero-marquina', image: 'assets/images/portfolio/bancada-cuba-sobrepor02.jpeg' },
  { title: 'Bancada para cuba de sobrepor', category: 'Bancadas-para-cuba', area: ['bathroom'], material: 'tinta-unita-nero-fosco', image: 'assets/images/portfolio/bancada-cuba-sobrepor03.jpeg' },
  { title: 'Bancada para cuba de sobrepor', category: 'Bancadas-para-cuba', area: ['bathroom'], material: 'tinta-unita-nero-fosco', image: 'assets/images/portfolio/bancada-cuba-sobrepor04.jpeg' },
  { title: 'Bancada para cuba de sobrepor', category: 'Bancadas-para-cuba', area: ['bathroom'], material: 'sahara-black', image: 'assets/images/portfolio/bancada-cuba-sobrepor05.jpeg' },
  { title: 'Bancada para cuba de sobrepor', category: 'Bancadas-para-cuba', area: ['bathroom'], material: 'sahara-black', image: 'assets/images/portfolio/bancada-cuba-sobrepor06.jpeg' },
  // Sala / Escada – Revestimentos e degraus (Corpo Bege, Cores Sólidas)
  { title: 'Revestimento e porcelanato', category: 'Revestimentos', area: ['stair', 'living-room'], material: 'taj-mahal-polido', image: 'assets/images/portfolio/revestimento01.jpeg' },
  { title: 'Revestimento e porcelanato', category: 'Revestimentos', area: ['stair', 'living-room'], material: 'taj-mahal-polido', image: 'assets/images/portfolio/revestimento02.jpeg' },
  { title: 'Revestimento e porcelanato', category: 'Revestimentos', area: ['stair', 'living-room'], material: 'travertino', image: 'assets/images/portfolio/revestimento03.jpeg' },
  { title: 'Revestimento e porcelanato', category: 'Revestimentos', area: ['stair', 'living-room'], material: 'travertino', image: 'assets/images/portfolio/revestimento04.jpeg' },
  { title: 'Revestimento e porcelanato', category: 'Revestimentos', area: ['stair', 'living-room'], material: 'dark-grey', image: 'assets/images/portfolio/revestimento05.jpeg' },
  { title: 'Revestimento e porcelanato', category: 'Revestimentos', area: ['stair', 'living-room'], material: 'dark-grey', image: 'assets/images/portfolio/revestimento06.jpeg' },
];

// Tipos de pedra do catálogo Albory – cada um com foto em assets/images/materials/[slug].png
const materialsData = {
 // --- CORPO COMPLETO ---
  'white-pearl': {
    name: 'White Pearl',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/white-pearl.png'
  },
  'galaxy-beige': {
    name: 'Galaxy Beige',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/galaxy-beige.png'
  },
  'galaxy-light-grey': {
    name: 'Galaxy Light Grey',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/galaxy-light-grey.png'
  },
  'barry-grey': {
    name: 'Barry Grey',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/barry-grey.png'
  },
  'lakha-red': {
    name: 'Lakha Red',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/lakha-red.png'
  },
  'nero-chips': {
    name: 'Nero Chips',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/nero-chips.png'
  },
  'terrazo-grey': {
    name: 'Terrazo Grey',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/terrazo-grey.png'
  },
  'crystal-white': {
    name: 'Crystal White',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/crystal-white.png'
  },
  'ferro-chips': {
    name: 'Ferro Chips',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/ferro-chips.png'
  },
  'marrom-brown': {
    name: 'Marrom Brown',
    description: 'Corpo completo fosco. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Fosco',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/marrom-brown.png'
  },
  'dark-grey': {
    name: 'Dark Grey',
    description: 'Corpo completo fosco. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Fosco',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/dark-grey.png'
  },
  'larix-black': {
    name: 'Larix Black',
    description: 'Corpo completo fosco. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Fosco',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/larix-black.png'
  },
  'jaisalmer': {
    name: 'Jaisalmer',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/jaisalmer.png'
  },
  'nano-white': {
    name: 'Nano White',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/nano-white.png'
  },
  'crema-ivory': {
    name: 'Crema Ivory',
    description: 'Corpo completo brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Completo',
    image: 'assets/images/materials/crema-ivory.png'
  },

  // --- CORPO COLORIDO ---
  'zed-black': {
    name: 'Zed Black',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/zed-black.png'
  },
  'atlantic-white': {
    name: 'Atlantic White',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/atlantic-white.png'
  },
  'bianco-lasa': {
    name: 'Bianco Lasa',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/bianco-lasa.png'
  },
  'golden-othello': {
    name: 'Golden Othello',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/golden-othello.png'
  },
  'nexa-white': {
    name: 'Nexa White',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/nexa-white.png'
  },
  'imperial-white': {
    name: 'Imperial White',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/imperial-white.png'
  },
  'white-topaz': {
    name: 'White Topaz',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/white-topaz.png'
  },
  'breccia-max': {
    name: 'Breccia Max',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/breccia-max.png'
  },
  'dyna-turkish': {
    name: 'Dyna Turkish',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/dyna-turkish.png'
  },
  'aspen-brown': {
    name: 'Aspen Brown',
    description: 'Corpo colorido fosco. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Fosco',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/aspen-brown.png'
  },
  'aspen-walnut': {
    name: 'Aspen Walnut',
    description: 'Corpo colorido fosco. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Fosco',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/aspen-walnut.png'
  },
  'lumuria-negro': {
    name: 'Lumuria Negro',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/lumuria-negro.png'
  },
  'monet-black': {
    name: 'Monet Black',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/monet-black.png'
  },
  'nero-marquina': {
    name: 'Nero Marquina',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/nero-marquina.png'
  },
  'ocean-blue': {
    name: 'Ocean Blue',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/ocean-blue.png'
  },
  'sahara-black': {
    name: 'Sahara Black',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/sahara-black.png'
  },
  'black-river': {
    name: 'Black River',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/black-river.png'
  },
  'tauras-black': {
    name: 'Tauras Black',
    description: 'Corpo colorido brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/tauras-black.png'
  },

  // --- OUTRAS TIPOLOGIAS (BRANCO, BEGE, CARVING) ---
  'vintage-white': {
    name: 'Vintage White',
    description: 'Corpo branco fosco. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Fosco',
    typology: 'Corpo Branco',
    image: 'assets/images/materials/vintage-white.png'
  },
  'spider-statuario': {
    name: 'Spider Statuario',
    description: 'Corpo branco brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Branco',
    image: 'assets/images/materials/spider-statuario.png'
  },
  'helix-white': {
    name: 'Helix White',
    description: 'Corpo bege brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Bege',
    image: 'assets/images/materials/helix-white.png'
  },
  'travertino': {
    name: 'Travertino',
    description: 'Corpo bege brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Bege',
    image: 'assets/images/materials/travertino.png'
  },
  'aspen-pine': {
    name: 'Aspen Pine',
    description: 'Corpo bege brilhante. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Brilhante',
    typology: 'Corpo Bege',
    image: 'assets/images/materials/aspen-pine.png'
  },
  'm-white-topaz': {
    name: 'M White Topaz',
    description: 'Corpo colorido carving. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Carving',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/m-white-topaz.png'
  },
  'pacific-white': {
    name: 'Pacific White',
    description: 'Corpo colorido carving. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Carving',
    typology: 'Corpo Colorido',
    image: 'assets/images/materials/pacific-white.png'
  },
  'sparkle-dark-grey': {
    name: 'Sparkle Dark Grey',
    description: 'Tipologia carving com acabamento carving. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Carving',
    typology: 'Carving',
    image: 'assets/images/materials/sparkle-dark-grey.png'
  },
  'acero-white': {
    name: 'Acero White',
    description: 'Tipologia carving com acabamento carving. Ideal para tampos de móveis de cozinha, cuba, moldura de porta/janela, degrau e piso de alto tráfego.',
    size: '800x2400mm',
    thickness: '15mm',
    finish: 'Carving',
    typology: 'Carving',
    image: 'assets/images/materials/acero-white.png'
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

  // Initialize showroom
  initShowroom();
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
  if (form) {
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
      
      console.log('Dados do formulário:', data);
      alert(`Obrigado, ${data.name}! Seu orçamento foi enviado com sucesso. Entraremos em contato em breve!`);
      
      form.reset();
    });
  }
  
  // Recreate icons after form elements are ready
  if (window.lucide) {
    lucide.createIcons();
  }
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

/* ===============================
   3.5️⃣ WIZARD: MOSTRAR ÁREAS
================================= */
const wizardAreas = [
  { id: 'kitchen', name: 'Cozinha', icon: 'cooking-pot', img: 'assets/images/kitchen.jpg' },
  { id: 'bathroom', name: 'Banheiro', icon: 'bath', img: 'assets/images/bathroom.jpg' },
  { id: 'gourmet', name: 'Área Gourmet', icon: 'flame', img: 'assets/images/gourmet.jpg' },
  { id: 'living-room', name: 'Sala', icon: 'armchair', img: 'assets/images/room.jpg' },
  { id: 'stair', name: 'Escada', icon: 'trending-up', img: 'assets/images/stair.jpeg' },
  { id: 'external', name: 'Área Externa', icon: 'sun', img: 'assets/images/outside.jpg' }
];

function openWizardAreas(modal, modalContent) {
  modalContent.innerHTML = `
    <h2>Passo 1: Selecione o Ambiente</h2>
    <p style="text-align: center; color: rgba(255,255,255,0.7); margin-bottom: 2rem;">Para qual ambiente você deseja o orçamento?</p>
    <div class="showroom">
      ${wizardAreas.map(area => `
        <div class="showroom-card" data-area="${area.id}">
          <i data-lucide="${area.icon}" class="showroom-icon"></i>
          <div class="showroom-name">${area.name}</div>
          <img class="image-bg" src="${area.img}" alt="${area.name}">
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.add('active');
  
  // Recreate icons for the dynamically injected Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  const areaCards = modalContent.querySelectorAll('.showroom-card');
  areaCards.forEach(card => {
    card.addEventListener('click', () => {
      const selectedArea = card.dataset.area;
      openMaterialsModal(selectedArea, modal, modalContent);
    });
  });
}

// Showroom - Initialize
function initShowroom() {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');

  const startBtn = document.getElementById('btn-start-wizard');
  const contactStartBtn = document.getElementById('btn-contact-wizard');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      openWizardAreas(modal, modalContent);
    });
  }

  if (contactStartBtn) {
    contactStartBtn.addEventListener('click', () => {
      openWizardAreas(modal, modalContent);
    });
  }

  // Fechar modal ao clicar no X
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-close')) {
      e.stopPropagation();
      modal.classList.remove('active');
      return;
    }
    
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

/* ===============================
   4️⃣  MOSTRAR MATERIAIS DA ÁREA
================================= */

function openMaterialsModal(area, modal, modalContent) {
  const materialsEntries = getAllMaterialsEntries()
    .filter(({ info }) => isMaterialAvailable(info))
    .sort((a, b) => {
      const aName = (a.info?.name || a.info?.nome || a.id || '').toString();
      const bName = (b.info?.name || b.info?.nome || b.id || '').toString();
      return aName.localeCompare(bName, 'pt-BR', { sensitivity: 'base' });
    });

  modalContent.innerHTML = `
    <button class="back-btn" id="back-to-areas">← Voltar</button>
    <h2>Passo 2: Selecione a Pedra</h2>
    <p style="text-align: center; color: rgba(255,255,255,0.7); margin-bottom: 2rem;">As opções abaixo estão disponíveis para o seu ambiente.</p>
    <div class="materials-grid">
      ${materialsEntries.map(({ id, info }) => {
        const displayName = (info?.name || info?.nome || formatMaterialName(id));
        const bgImage = getMaterialImageUrl(id, info);
        return `
        <button 
          class="material-btn" 
          data-area="${area}" 
          data-material="${id}"
          style="background-image: url('${bgImage}')"
        >
        <span>${displayName}</span>
        </button>
      `}).join('')}
    </div>
  `;

  modal.classList.add('active');

  const backBtn = document.getElementById('back-to-areas');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      openWizardAreas(modal, modalContent);
    });
  }

  const materialButtons = document.querySelectorAll('.material-btn');

  materialButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedMaterial = button.dataset.material;
      openProjectsByMaterial(area, selectedMaterial, modal, modalContent);
    });
  });
}


/* ===============================
   5️⃣  MOSTRAR PROJETOS DO MATERIAL
================================= */

function openProjectsByMaterial(area, material, modal, modalContent) {

  const materialInfo = materialsData[material];
  if (!materialInfo) {
    openMaterialsModal(area, modal, modalContent);
    return;
  }
  if (!isMaterialAvailable(materialInfo)) {
    openMaterialsModal(area, modal, modalContent);
    return;
  }

  const filteredProjects = portfolioProjects.filter(
    project =>
      project.area.includes(area) &&
      project.material === material
  );

  const specs = normalizeMaterialSpecs(materialInfo);

  modalContent.innerHTML = `
    <button class="back-btn">← Voltar</button>

    <div class="material-header">
      <h2>${specs.nome}</h2>
      ${specs.descricao ? `<p>${specs.descricao}</p>` : ''}

      <div class="material-specs">
        ${specs.acabamento ? `<span><strong>Acabamento:</strong> ${specs.acabamento}</span>` : ''}
        ${specs.tamanho ? `<span><strong>Tamanho:</strong> ${specs.tamanho}</span>` : ''}
        ${specs.espessura ? `<span><strong>Espessura:</strong> ${specs.espessura}</span>` : ''}
        ${specs.tipologia ? `<span><strong>Tipologia:</strong> ${specs.tipologia}</span>` : ''}
      </div>
      ${specs.nome ? `<img class="image-showroom-model" src="assets/images/materials/models/${specs.nome.toLowerCase().trim().replace(/\s+/g, '-')}-model.png">` : ''}
    </div>

    <h3 class="projects-title">Projetos realizados com esta pedra</h3>

    <div class="projects-grid">
      ${filteredProjects.length ? filteredProjects.map(project => `
        <div class="project-card">
          <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null;this.src='assets/images/cta.jpg';">
          <h4>${project.title}</h4>
        </div>
      `).join('') : `<p style="grid-column: 1 / -1; color: rgba(255,255,255,0.55); margin: 0.5rem 0 0;">Ainda não temos serviços cadastrados para esta pedra neste ambiente.</p>`}
    </div>
    
    <div style="text-align: center; margin-top: 3rem;">
      <button class="btn-gradient" id="btn-proceed-wizard" style="padding: 1.2rem 3rem; font-size: 1.1rem; border-radius: 8px;">
        Prosseguir para o próximo passo →
      </button>
    </div>
  `;

  document.querySelector('.back-btn')
    .addEventListener('click', () => {
      openMaterialsModal(area, modal, modalContent);
    });

  const proceedBtn = document.getElementById('btn-proceed-wizard');
  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      openWizardSinks(area, material, modal, modalContent);
    });
  }
}


function getAllMaterialsEntries() {
  // Suporta materialsData como objeto (slug -> info) ou array de objetos
  if (Array.isArray(materialsData)) {
    return materialsData
      .map((info) => {
        const id = info?.id || info?.slug || info?.key || (info?.name ? slugifyMaterialName(info.name) : null);
        return id ? { id, info } : null;
      })
      .filter(Boolean);
  }

  return Object.keys(materialsData || {}).map((id) => ({ id, info: materialsData[id] }));
}

function getMaterialImageUrl(id, info) {
  const raw = info?.image || info?.imagem;
  if (typeof raw === 'string' && raw.trim()) return raw.replace('./', '');
  return `assets/images/materials/${id}.png`;
}

function normalizeMaterialSpecs(info) {
  // Compatível com seu formato novo (PT) e o antigo (EN)
  const nome = info?.nome || info?.name || '';
  const descricao = info?.descricao || info?.description || '';
  const acabamento = info?.acabamento || info?.finish || '';
  const tamanho = info?.size || '';
  const espessura = info?.thickness || '';
  const tipologia = info?.typology || '';
  const indicacao = info?.indicacao || info?.indicação || info?.usage || '';
  const disponivel = info?.disponivel ?? info?.disponível ?? info?.available ?? true;

  return { nome, descricao, acabamento, tamanho, espessura, tipologia, indicacao, disponivel };
}

function slugifyMaterialName(name) {
  return String(name)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function isMaterialAvailable(info) {
  const specs = normalizeMaterialSpecs(info || {});
  return specs.disponivel !== false;
}




/* ===============================
   6️⃣  WIZARD: ESCOLHER CUBAS E FORM FINAL
================================= */

const sinksOptions = {
  kitchen_gourmet: [
    { id: 'inox-tradicional', name: 'Cuba Inox Tradicional', img: 'assets/images/cta.jpg' },
    { id: 'inox-dupla', name: 'Cuba Inox Dupla', img: 'assets/images/cta.jpg' },
    { id: 'esculpida-pedra', name: 'Cuba Esculpida na Própria Pedra', img: 'assets/images/cta.jpg' },
    { id: 'nenhuma', name: 'Não quero adicionar cuba', img: '' }
  ],
  bathroom: [
    { id: 'esculpida-rampa', name: 'Cuba Esculpida de Rampa', img: 'assets/images/cta.jpg' },
    { id: 'esculpida-fundo-reto', name: 'Cuba Esculpida Fundo Reto', img: 'assets/images/cta.jpg' },
    { id: 'louca-apoio', name: 'Cuba Louça de Apoio', img: 'assets/images/cta.jpg' },
    { id: 'nenhuma', name: 'Não quero adicionar cuba', img: '' }
  ]
};

function openWizardSinks(area, material, modal, modalContent) {
  // Somente Cozinha, Gourmet e Banheiro tem seleção de cuba
  if (!['kitchen', 'gourmet', 'bathroom'].includes(area)) {
    openWizardFinalForm(area, material, 'Não se aplica', modal, modalContent);
    return;
  }

  const options = area === 'bathroom' ? sinksOptions.bathroom : sinksOptions.kitchen_gourmet;

  modalContent.innerHTML = `
    <button class="back-btn" id="back-to-material">← Voltar</button>
    <h2>Passo 3: Adicionar uma Cuba?</h2>
    <p style="text-align: center; color: rgba(255,255,255,0.7); margin-bottom: 2rem;">Deseja adicionar uma cuba para o seu projeto? Selecione uma opção abaixo:</p>
    
    <div class="materials-grid">
      ${options.map(opt => `
        <button 
          class="material-btn sink-btn" 
          data-sink="${opt.name}"
          style="${opt.img ? `background-image: url('${opt.img}')` : `background: #111; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px dashed rgba(255,255,255,0.2);`}"
        >
        ${opt.id === 'nenhuma' ? `<i data-lucide="x" style="color:#ff4d4d; width: 3rem; height: 3rem; margin-bottom: 1.5rem;"></i>` : ''}
        <span style="${opt.id === 'nenhuma' ? 'background: transparent; position: relative; bottom: auto; text-align: center;' : ''}">${opt.name}</span>
        </button>
      `).join('')}
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }

  document.getElementById('back-to-material').addEventListener('click', () => {
    openProjectsByMaterial(area, material, modal, modalContent);
  });

  const sinkButtons = modalContent.querySelectorAll('.sink-btn');
  sinkButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedSink = btn.dataset.sink;
      openWizardFinalForm(area, material, selectedSink, modal, modalContent);
    });
  });
}

function openWizardFinalForm(area, material, sink, modal, modalContent) {
  const areaName = wizardAreas.find(a => a.id === area)?.name || area;
  const materialInfo = materialsData[material] || {};
  const materialName = materialInfo.name || materialInfo.nome || material;
  const materialImgUrl = getMaterialImageUrl(material, materialInfo);

  let sinkImgUrl = null;
  if (['kitchen', 'gourmet', 'bathroom'].includes(area)) {
    const sinkOptionsList = area === 'bathroom' ? sinksOptions.bathroom : sinksOptions.kitchen_gourmet;
    const sinkData = sinkOptionsList.find(s => s.name === sink);
    if (sinkData && sinkData.img) {
      sinkImgUrl = sinkData.img;
    }
  }

  modalContent.innerHTML = `
    <button class="back-btn" id="back-to-sinks">← Voltar</button>
    <h2>Último Passo: Informações de Contato</h2>
    
    <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; border-left: 4px solid var(--color-primary); display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1rem; align-items: center;">
      <div>
        <h4 style="margin-bottom: 0.8rem; color: var(--color-primary); font-size: 1.1rem;">Resumo do seu projeto:</h4>
        <p style="margin-bottom: 0.4rem;"><strong>Ambiente:</strong> ${areaName}</p>
        <p style="margin-bottom: 0.4rem;"><strong>Pedra:</strong> ${materialName}</p>
        ${sink !== 'Não se aplica' ? `<p style="margin-bottom: 0;"><strong>Cuba:</strong> ${sink}</p>` : ''}
      </div>

      <div style="display: flex; gap: 1rem;">
        <div style="text-align: center;">
          <a href="${materialImgUrl}" target="_blank" style="display: block; border-radius: 8px; overflow: hidden; border: 2px solid rgba(255,255,255,0.1); transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="${materialImgUrl}" alt="${materialName}" style="width: 80px; height: 80px; object-fit: cover; display: block;">
          </a>
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6); margin-top: 0.4rem; display: block;">Pedra</span>
        </div>
        ${sinkImgUrl && sink !== 'Não quero adicionar cuba' ? `
        <div style="text-align: center;">
          <a href="${sinkImgUrl}" target="_blank" style="display: block; border-radius: 8px; overflow: hidden; border: 2px solid rgba(255,255,255,0.1); transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <img src="${sinkImgUrl}" alt="${sink}" style="width: 80px; height: 80px; object-fit: cover; display: block;">
          </a>
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6); margin-top: 0.4rem; display: block;">Cuba</span>
        </div>
        ` : ''}
      </div>
    </div>

    <form id="wizard-form" class="contact-form" style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.2rem; width: 100%;">
      <div class="form-group" style="margin-bottom:0">
        <label class="form-label" style="font-size: 0.95rem;">Nome Completo *</label>
        <input type="text" id="wiz-name" required class="form-input" placeholder="Seu nome">
      </div>
      <div class="form-row" style="margin-bottom:0">
        <div class="form-group" style="margin-bottom:0">
          <label class="form-label" style="font-size: 0.95rem;">Telefone/WhatsApp *</label>
          <input type="tel" id="wiz-phone" required class="form-input" placeholder="(00) 00000-0000">
        </div>
        <div class="form-group" style="margin-bottom:0">
          <label class="form-label" style="font-size: 0.95rem;">Cidade *</label>
          <input type="text" id="wiz-city" required class="form-input" placeholder="Sua cidade">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" style="font-size: 0.95rem;">Observações sobre as medidas (Opcional)</label>
        <textarea id="wiz-obs" rows="3" class="form-textarea" placeholder="Tem alguma medida aproximada ou detalhe do projeto?"></textarea>
      </div>

      <button type="submit" class="btn-gradient" style="padding: 1.2rem; font-size: 1.1rem; border-radius: 8px; margin-top: 1rem; border: none; cursor: pointer; display: flex; justify-content: center; align-items: center;">
        <i data-lucide="send" style="margin-right:10px;"></i> Encaminhar Orçamento pelo WhatsApp
      </button>
    </form>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }

  document.getElementById('back-to-sinks').addEventListener('click', () => {
    if (!['kitchen', 'gourmet', 'bathroom'].includes(area)) {
      openProjectsByMaterial(area, material, modal, modalContent);
    } else {
      openWizardSinks(area, material, modal, modalContent);
    }
  });

  const form = document.getElementById('wizard-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('wiz-name').value;
    const cidade = document.getElementById('wiz-city').value;
    const obs = document.getElementById('wiz-obs').value;
    
    let text = `Olá! Vim pelo site e gostaria de solicitar um orçamento:\n\n`;
    text += `*🙎‍♂️ Nome:* ${nome}\n`;
    text += `*📍 Cidade:* ${cidade}\n`;
    text += `*🏠 Ambiente:* ${areaName}\n`;
    text += `*💎 Pedra Escolhida:* ${materialName}\n`;
    if(sink !== 'Não se aplica' && sink !== 'Não quero adicionar cuba') {
      text += `*🚰 Tipo de Cuba:* ${sink}\n`;
    }
    if (obs) {
      text += `*📝 Observações:* ${obs}\n`;
    }

    const phoneNumber = '11972883448';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
    
    modal.classList.remove('active');
  });
}
