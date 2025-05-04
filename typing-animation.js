document.querySelectorAll('[data-type="type"]').forEach(section => {
  const text = section.querySelector('.typing-text');
  let animated = false;

  section.addEventListener('mouseenter', () => {
    if (text && !animated) {
      text.classList.remove('typing-text');
      void text.offsetWidth; // Restart animation
      text.classList.add('typing-text');
      animated = true;
    }
  });
});
