const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const text = entry.target.querySelector('.typing-text');
      if (text && !text.classList.contains('animated')) {
        text.classList.remove('typing-text'); // Reset animation
        void text.offsetWidth; // Force reflow
        text.classList.add('typing-text');
        text.classList.add('animated'); // Prevent retriggering too soon

        // Optional: Remove 'animated' after animation ends to allow retrigger later
        setTimeout(() => {
          text.classList.remove('animated');
        }, 3000); // Duration must match animation
      }
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('[data-type="type"]').forEach(section => {
  observer.observe(section);
});
