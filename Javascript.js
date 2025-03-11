/***************************************************************
 * Animación de Secciones con Intersection Observer
 ***************************************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los elementos con alguna clase de animación personalizada.
  const animatedElements = document.querySelectorAll(
    '.animate-fade, .animate-slide-left, .animate-slide-right, .animate-zoom, .animate-slide-down'
  );

  const observerOptions = {
    threshold: 0.2 // Se activa cuando el 20% es visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animación una sola vez
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});

/***************************************************************
 * Carrusel de Testimonios (opcional)
 ***************************************************************/
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalSlides = Math.ceil(testimonialCards.length / 3);
let currentSlide = 0;

function showSlide(slideIndex) {
  testimonialCards.forEach(card => {
    card.style.display = 'none';
  });
  const startIndex = slideIndex * 3;
  for (let i = startIndex; i < startIndex + 3; i++) {
    if (testimonialCards[i]) {
      testimonialCards[i].style.display = 'block';
    }
  }
  updateButtons();
}

function updateButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  prevBtn.classList.remove('btn-active', 'btn-inactive');
  nextBtn.classList.remove('btn-active', 'btn-inactive');

  if (currentSlide === 0) {
    prevBtn.classList.add('btn-inactive');
    nextBtn.classList.add('btn-active');
  } else if (currentSlide === totalSlides - 1) {
    prevBtn.classList.add('btn-active');
    nextBtn.classList.add('btn-inactive');
  } else {
    prevBtn.classList.add('btn-active');
    nextBtn.classList.add('btn-active');
  }
}

document.getElementById('prevBtn')?.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});
document.getElementById('nextBtn')?.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});
showSlide(currentSlide);



/***************************************************************
 * Lógica para destacar la tarjeta de Pricing
 ***************************************************************/
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.pricing-cards .card');
  let selectedLanguage = "es"; // Idioma por defecto

  const translations = {
    es: "MAS POPULAR",
    en: "MOST POPULAR"
  };

  function updatePopularLabel(card) {
    let label = card.querySelector('.most-popular');
    if (!label) {
      label = document.createElement('div');
      label.classList.add('most-popular');
      card.appendChild(label);
    }
    label.innerText = translations[selectedLanguage];
  }

  // Destaca la tarjeta central (Gold) por defecto (segunda tarjeta)
  const defaultCard = cards[1];
  defaultCard.classList.add('featured');
  const defaultButton = defaultCard.querySelector('.choose-plan');
  defaultButton.classList.add('featured-btn');
  updatePopularLabel(defaultCard);

  // Agregar evento click a cada tarjeta para destacar la seleccionada
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => {
        c.classList.remove('featured');
        c.querySelector('.choose-plan').classList.remove('featured-btn');
        const mp = c.querySelector('.most-popular');
        if (mp) mp.remove();
      });
      card.classList.add('featured');
      const button = card.querySelector('.choose-plan');
      button.classList.add('featured-btn');

      updatePopularLabel(card);
    });
  });

  // Detectar cambio de idioma y actualizar "MAS POPULAR"
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedLanguage = btn.getAttribute("data-lang");
      document.querySelectorAll(".most-popular").forEach(label => {
        label.innerText = translations[selectedLanguage];
      });
    });
  });
});






// Objeto con las traducciones de cada clave a ES e EN
const translations = {
  es: {
    navInicio: "Inicio",
    navAcerca: "Acerca de Nosotros",
    navEquipo: "Nuestro Equipo",
    navPrecios: "Precios",
    navLogin: "Iniciar Sesión",
    navSignup: "Registrarse",
    heroTag: "Software de Chat",
    heroTitle: "Brinda soporte en tiempo real a través de chat para tus clientes",
    heroDescription: "Excelente software que te permite rastrear, gestionar y resolver solicitudes de soporte.",
    heroArrow: "Toda la investigación comienza aquí",
    heroBtnChat: "Chatea Ahora",
    heroBtnInfo: "Más Información",
    heroPhone: "+182 (283) 343-23-10",
    heroScroll: "DESPLAZAR ABAJO",
    integrationsTitle: "Integración sin esfuerzo con tus herramientas preferidas",
    messagingTitle: "Accede a una solución unificada de mensajería multicanal en un solo lugar",
    messagingDescription: "Permite que tus clientes se comuniquen sin esfuerzo a través de Chat en Vivo, Facebook, Telegram y muchas otras herramientas, con respuestas rápidas de Coca.",
    messagingItem1: "Participa en chats en tiempo real con visitantes, prospectos y clientes.",
    messagingItem2: "Escala fácilmente conversaciones personalizadas sin limitaciones.",
    messagingItem3: "Participa en conversaciones de chat contextuales mientras te desplazas.",
    commTitle: "Crea una estrategia de comunicación utilizando chat de video en vivo",
    commSubtitle: "La videoconferencia mejora la productividad y fomenta la colaboración, convirtiéndola en una herramienta versátil para lograr estos objetivos.",
    ordersTitle: "Recibe pedidos directos de tus clientes",
    ordersDescription: "Crea páginas de destino personalizadas con bloques únicos que convierten más visitantes que cualquier sitio web. Con numerosos bloques únicos, construye fácilmente una página. Existen muchas variaciones de textos disponibles.",
    stats1Value: "9.3K+",
    stats1Desc: "Potenciando sitios web",
    stats2Value: "8M+",
    stats2Desc: "Chats en 2022",
    chatsTitle: "Una interfaz ideal para un soporte ágil sin necesidad de código",
    chatsDesc1: "El Constructor Visual te permite crear sin esfuerzo un chatbot de IA de primera calidad sin necesidad de programar. Arrastra y suelta elementos conversacionales, y pruébalos al instante para crear interacciones atractivas con los clientes.",
    chatsDesc2: "Experimenta una plataforma de mensajería moderna que integra sin problemas todo lo esencial para un soporte, ventas y compromiso efectivos, todo dentro de una interfaz fácil de usar.",
    chatsBtn: "Más Información",
    testimonialsTitle: "Brinda a nuestros usuarios una gran experiencia",
    testimonialsSubtitle: "La creación de comunidades es un campo de prácticas dirigido a la formación o mejora de la comunidad entre individuos.",
    testi1Quote: "“Ellos pueden ayudar a una startup como la mía a crecer y son muy receptivos a todas nuestras necesidades.”",
    testi2Quote: "“Las ideas creativas de Division of Labor fueron geniales y trabajar con su equipo fue realmente fácil; fueron muy receptivos.”",
    testi3Quote: "“Quedamos atónitos cuando vimos Mixland. La combinación de redes sociales, correo electrónico, base de conocimiento, dispositivos móviles, etc.”",
    testi4Quote: "“Su equipo brindó un soporte excelente y nos ayudó a optimizar nuestro flujo de trabajo de manera eficiente.”",
    testi5Quote: "“¡Servicio increíble! Entendieron nuestras necesidades y entregaron resultados sobresalientes.”",
    testi6Quote: "“¡Un cambio radical para nuestra empresa! Las herramientas y el soporte que recibimos fueron de primera.”",
    pricingTitle: "Planes de Precios",
    pricingSubtitle: "Software de Chat Coca. Todos los planes incluyen una prueba gratuita de 14 días de nuestras funciones Premium.",
    monthly: "Mensual",
    annual: "Anual",
    silver: "PLATA",
    gold: "ORO",
    premium: "PREMIUM",
    premiumPrice: "/mes",
    noDiscount: "Sin Descuento",
    basicSupport: "Soporte Básico",
    noAds: "Sin Anuncios",
    designStyle: "Estilo de Diseño",
    componentLibrary: "Librería de Componentes",
    limitedLinks: "Todos los enlaces limitados",
    analyticsPlatform: "Plataforma de analíticas propia",
    chatSupport: "Soporte por chat",
    hashtagOptimization: "Optimización de hashtags",
    unlimitedUsers: "Usuarios Ilimitados",
    choosePlan: "Elegir Plan",
    mostPopular: "MÁS POPULAR",
    title: "Regístrese hoy para su prueba gratuita e incorpore el chat en vivo en su sitio web.",
    subtitle: "Descubra el poder de la interacción con el cliente en tiempo real: ¡comience su prueba gratuita e integre el chat en vivo en su sitio web hoy mismo!",
    storeGoogle: `<span class="partuno">CONSIGUELO</span><span class="partdos">Google Play</span>`,
    storeApp: `<span class="partuno">Descargar en el</span><span class="partdos">Tienda de aplicaciones</span>`
  },

  en: {
    navInicio: "Home",
    navAcerca: "About Us",
    navEquipo: "Our Team",
    navPrecios: "Pricing",
    navLogin: "Login",
    navSignup: "Register",
    heroTag: "Chat software",
    heroTitle: "Provide real-time support through chat for your customers",
    heroDescription: "Great software that allows you to chat from any place at any time without any interruption",
    heroArrow: "All research start from here",
    heroBtnChat: "Chatting Now",
    heroBtnInfo: "Learn More",
    heroPhone: "+182 (283) 343-23-10", // Puedes dejarlo igual si no deseas traducirlo
    heroScroll: "SCROLL DOWN",
    integrationsTitle: "Effortless integration with your preferred tools",
    messagingTitle: "Access a unified multi-channel messaging solution in one place",
    messagingDescription: "Enable your customers to communicate effortlessly through Live Chat, Facebook, Telegram, and numerous other tools, with prompt responses from Coca.",
    messagingItem1: "Engage in real-time chats with visitors, prospects, and customers.",
    messagingItem2: "Easily scale personalized conversations without limitations.",
    messagingItem3: "Participate in contextual chat conversations on the go.",
    commTitle: "Craft a communication strategy using live video chat",
    commSubtitle: "Video conferencing enhances productivity and fosters collaboration, making it a versatile tool for achieving these goals.",
    ordersTitle: "Get direct orders from your customers",
    ordersDescription: "Create custom landing pages with Rare blocks that convert more visitors than any website. With lots of unique blocks, you can easily build a page. There are many variations of passages available.",
    stats1Value: "9.3K+",
    stats1Desc: "Website’s Powering",
    stats2Value: "8M+",
    stats2Desc: "Chats in Last 2022",
    chatsTitle: "An ideal interface for swift, code-free support",
    chatsDesc1: "The Visual Builder enables you to effortlessly create a top-notch AI chatbot with no coding required. Drag and drop conversational elements, and instantly test them to craft engaging client interactions.",
    chatsDesc2: "Experience a modern messaging platform that seamlessly integrates everything essential for effective support, sales, and engagement, all within a user-friendly interface.",
    chatsBtn: "Learn More",
    testimonialsTitle: "Give our users a great experience",
    testimonialsSubtitle: "Community building is a practice aimed at forming or enhancing community among individuals.",
    testi1Quote: "“They are able to help a startup like mine scale and are very responsive to all our unique needs.”",
    testi2Quote: "Division of Labor’s creative ideas were great, and working with their team was truly easy they were very responsive.”",
    testi3Quote: "“We were blown away when we saw Mixland. The combination of social, email, knowledge base, mobile, ets”",
    testi4Quote: "“Their team provided excellent support and helped us optimize our workflow efficiently.”",
    testi5Quote: "“Incredible service! They understood our needs and delivered outstanding results.”",
    testi6Quote: "“A game changer for our company! The tools and support we received were top-notch.”",
    pricingTitle: "Pricing Plans",
    pricingSubtitle: "Coca landing page UI Kit no credit card required. All plans come with a free, 14 day trial of our Premium features.",
    monthly: "Monthly",
    annual: "Annual",
    silver: "SILVER",
    gold: "GOLD",
    premium: "PREMIUM",
    premiumPrice: "/moth",
    noDiscount: "No Discount",
    basicSupport: "Basic Support",
    noAds: "No Ads",
    designStyle: "Design Style",
    componentLibrary: "Component Library",
    limitedLinks: "All Links Limited",
    analyticsPlatform: "Own Analytics Platform",
    chatSupport: "Chat Support",
    hashtagOptimization: "Hashtag Optimization",
    unlimitedUsers: "Unlimited Users",
    choosePlan: "Choose Plan",
    mostPopular: "MOST POPULAR",
    title: "Sign up for your free trial today and incorporate live chat on your website.",
    subtitle: "Unlock the power of real-time customer engagement: Start your free trial and integrate live chat on your website today!",
    storeGoogle: `<span class="partuno">GET IT ON</span><span class="partdos">Google Play</span>`,
    storeApp: `<span class="partuno">Download on the</span><span class="partdos">App Store</span>`
  }
};


function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    // Para algunos elementos que contienen HTML, usamos innerHTML
    if (key === "storeGoogle" || key === "storeApp") {
      el.innerHTML = translations[lang][key];
    } else {
      el.textContent = translations[lang][key];
    }
  });
}

// Configuración del selector de idioma
const langButtons = document.querySelectorAll(".lang-btn");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Quita la clase activa de todos y la agrega al botón seleccionado (opcional)
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    // Obtiene el idioma a cambiar
    const selectedLang = btn.getAttribute("data-lang");
    setLanguage(selectedLang);
  });
});

// Opcional: establecer un idioma por defecto al cargar la página
setLanguage("es");



