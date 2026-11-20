// PulseFlow Landing Page Interactions
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Log landing page readiness
  console.log('⚡ PulseFlow Landing Page loaded successfully.');
});

