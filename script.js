document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.carousel-slide');
  const items = document.querySelectorAll('.carousel-item');
  const dotsContainer = document.querySelector('.carousel-dots');
  let currentIndex = 0;
  const slideCount = items.length;
  const intervalTime = 3000; // 3 seconds

  function createDots() {
      for (let i = 0; i < slideCount; i++) {
          const dot = document.createElement('span');
          dot.classList.add('dot');
          if (i === 0) dot.classList.add('active');
          dot.addEventListener('click', () => goToSlide(i));
          dotsContainer.appendChild(dot);
      }
  }

  function updateDots() {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
      });
  }

  function goToSlide(index) {
      currentIndex = index;
      slides.style.transform = `translateX(-${index * 100}%)`;
      updateDots();
  }

  function moveNext() {
      currentIndex = (currentIndex + 1) % slideCount;
      goToSlide(currentIndex);
  }

  // Create dots and initialize carousel
  createDots();
  goToSlide(currentIndex);

  // Set interval for automatic sliding
  let interval = setInterval(moveNext, intervalTime);

  // Optional: Clear the interval when the user interacts with the carousel
  slides.addEventListener('mouseover', () => clearInterval(interval));
  slides.addEventListener('mouseout', () => interval = setInterval(moveNext, intervalTime));
});










// Handle scroll event to change navigation and logo
function handleScroll() {
  const nav = document.querySelector('nav');
  const logo = document.querySelector('.logo');
  const logoScrolled = document.querySelector('.logo-scrolled');
  
  if (nav && logo && logoScrolled) { // Check if elements exist
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
      logo.style.display = 'none';
      logoScrolled.style.display = 'block';
    } else {
      nav.classList.remove('scrolled');
      logo.style.display = 'block';
      logoScrolled.style.display = 'none';
    }
  }
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check to set the state correctly on page load
handleScroll();









document.addEventListener('DOMContentLoaded', function() {
  // Select all elements that should be observed
  const contactItems = document.querySelectorAll('.contact-item');

  // Options for the observer (threshold and margins)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  // Callback function for when intersection changes
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each contact item
  contactItems.forEach(item => {
    observer.observe(item);
  });
});




