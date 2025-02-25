
// Obtenemos todas las tarjetas de testimonio
const testimonialCards = document.querySelectorAll('.testimonial-card');
// Calculamos cuántos grupos de 3 hay
const totalSlides = Math.ceil(testimonialCards.length / 3);

let currentSlide = 0; // Empezamos en el grupo 0 (primer grupo de 3)

// Función para mostrar un grupo de 3 testimonios según el índice de slide
function showSlide(slideIndex) {
  // Ocultamos todas las tarjetas
  testimonialCards.forEach(card => {
    card.style.display = 'none';
  });
  
  // Mostramos solo las 3 tarjetas correspondientes a ese slide
  const startIndex = slideIndex * 3;
  for (let i = startIndex; i < startIndex + 3; i++) {
    if (testimonialCards[i]) {
      testimonialCards[i].style.display = 'block';
    }
  }
  // Actualizamos el estilo de los botones
  updateButtons();
}

// Función para cambiar el color de los botones según el slide actual
function updateButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Removemos clases previas
  prevBtn.classList.remove('btn-active', 'btn-inactive');
  nextBtn.classList.remove('btn-active', 'btn-inactive');

  // Si estamos en el primer slide
  if (currentSlide === 0) {
    prevBtn.classList.add('btn-inactive');
    nextBtn.classList.add('btn-active');
  }
  // Si estamos en el último slide
  else if (currentSlide === totalSlides - 1) {
    prevBtn.classList.add('btn-active');
    nextBtn.classList.add('btn-inactive');
  }
  // Si hay slides intermedios
  else {
    prevBtn.classList.add('btn-active');
    nextBtn.classList.add('btn-active');
  }
}


// Botón "Prev"
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

// Botón "Next"
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

// Mostramos inicialmente el primer grupo (slide 0)
showSlide(currentSlide);

