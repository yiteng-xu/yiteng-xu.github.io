(function () {
  if (!document.body.classList.contains('home-fiddle')) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const progress = document.createElement('div');
  progress.className = 'fh-scroll-progress';
  const progressInner = document.createElement('span');
  progress.appendChild(progressInner);
  document.body.appendChild(progress);

  const updateProgress = () => {
    const doc = document.documentElement;
    const range = doc.scrollHeight - doc.clientHeight;
    const ratio = range > 0 ? window.scrollY / range : 0;
    progressInner.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  const targets = document.querySelectorAll(
    '.fh-shell, .milestones-section, .news-section, .travel-guide, .paper-box, .patent-box, .skills-section, .awards-section, #educations + ul, .skill-points'
  );

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((item) => io.observe(item));
  } else {
    targets.forEach((item) => item.classList.add('is-inview'));
  }

  const heroMedia = document.querySelector('.fh-media');
  if (heroMedia && !reduced) {
    const cards = heroMedia.querySelectorAll('figure');
    heroMedia.addEventListener('mousemove', (event) => {
      const rect = heroMedia.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      cards.forEach((card, index) => {
        const depth = (index + 1) * 4;
        const tx = px * depth * 1.8;
        const ty = py * depth * 1.2;
        card.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
      });
    });
    heroMedia.addEventListener('mouseleave', () => {
      cards.forEach((card) => {
        card.style.transform = '';
      });
    });
  }

  const finePointer = window.matchMedia('(pointer:fine)').matches;
  if (!finePointer || reduced) return;

  const cursor = document.createElement('div');
  cursor.className = 'fh-cursor';
  const cursorDot = document.createElement('span');
  cursor.appendChild(cursorDot);
  document.body.appendChild(cursor);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let renderX = mouseX;
  let renderY = mouseY;

  const attractors = document.querySelectorAll('a, button, .paper-box, .news-card, .milestone-card, .skill-card');
  attractors.forEach((item) => {
    item.addEventListener('mouseenter', () => cursor.classList.add('is-active'));
    item.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
  });

  window.addEventListener(
    'mousemove',
    (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    },
    { passive: true }
  );

  const render = () => {
    renderX += (mouseX - renderX) * 0.18;
    renderY += (mouseY - renderY) * 0.18;
    cursor.style.transform = `translate3d(${renderX}px, ${renderY}px, 0)`;
    requestAnimationFrame(render);
  };
  render();
})();
