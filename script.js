<script>
  function typeText(element, text, speed = 20) {
    let i = 0;
    element.innerHTML = '';
    const typing = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, speed);
  }

  // Apply typing animation on hover for long sections
  const sections = [
    { id: "about", maxChars: 300 },
    { id: "projects", maxChars: 0 },
    { id: "achievements", maxChars: 250 },
    { id: "academics", maxChars: 250 }
  ];

  sections.forEach(({ id, maxChars }) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.addEventListener('mouseenter', () => {
      const p = section.querySelector('p, ul');
      if (!p) return;

      const originalText = p.textContent || p.innerText;
      if (originalText.length > maxChars && !p.classList.contains('animated')) {
        p.classList.add('animated');
        typeText(p, originalText);
      }
    });
  });
</script>
