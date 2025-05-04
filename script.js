document.querySelectorAll('[data-type="type"]').forEach(section => {
  section.addEventListener('mouseenter', () => {
    const text = section.querySelector('.typing-text');
    if (text && !text.classList.contains('done')) {
      text.style.width = '0';
      text.classList.remove('done');
      void text.offsetWidth;
      text.classList.add('typing-text');
      text.classList.add('done');
    }
  });
});
