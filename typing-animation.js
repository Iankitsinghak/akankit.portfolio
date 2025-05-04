const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const text = entry.target.querySelector('.typing-text');
      if (text) {
        text.classList.remove('typing-text');
        void text.offsetWidth;
        text.classList.add('typing-text');
      }
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('[data-type="type"]').forEach(section => {
  observer.observe(section);
});
