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

  // Destaca la tarjeta central (Gold) por defecto (segunda tarjeta)
  const defaultCard = cards[1];
  defaultCard.classList.add('featured');
  const defaultButton = defaultCard.querySelector('.choose-plan');
  defaultButton.classList.add('featured-btn');

  // Crear y añadir el sello "MOST POPULAR"
  let defaultLabel = document.createElement('div');
  defaultLabel.classList.add('most-popular');
  defaultLabel.innerText = 'MOST POPULAR';
  defaultCard.appendChild(defaultLabel);

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

      const newLabel = document.createElement('div');
      newLabel.classList.add('most-popular');
      newLabel.innerText = 'MOST POPULAR';
      card.appendChild(newLabel);
    });
  });
});



