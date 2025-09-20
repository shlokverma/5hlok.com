// ========== TYPED.JS ANIMATION ==========
new Typed('#typed', {
  strings: ["Hi, I'm Shlok"],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  loop: true,
  showCursor: true,
  cursorChar: '_'
});

// ========== COLLAPSIBLE SECTIONS ==========
document.querySelectorAll('.collapsible-section').forEach(section => {
  const header = section.querySelector('.section-header');
  const content = section.querySelector('.section-content');
  const arrow = section.querySelector('.arrow');

  header.addEventListener('click', () => {
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

    if (isOpen) {
      // Collapse
      content.style.maxHeight = null;
      arrow.style.transform = 'rotate(0deg)';
    } else {
      // Expand
      content.style.maxHeight = content.scrollHeight + 'px';
      arrow.style.transform = 'rotate(90deg)';
    }
  });
});
