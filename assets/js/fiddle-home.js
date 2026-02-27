(function () {
  if (!document.body.classList.contains('home-fiddle')) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const content = document.querySelector('.page__content');

  const stripDecorations = (value) =>
    String(value || '')
      .replace(/[\u{1F300}-\u{1FAFF}\u2600-\u27BF]/gu, '')
      .replace(/\s+/g, ' ')
      .trim();

  const slugify = (value) =>
    stripDecorations(value)
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

  const ensureId = (el, fallback) => {
    if (!el) return '';
    if (el.id) return el.id;
    el.id = fallback;
    return el.id;
  };

  const buildLeftToc = () => {
    if (!content) return;
    const headings = Array.from(content.querySelectorAll(':scope > h1'));
    if (!headings.length) return;

    const items = [];
    const aboutAnchor = document.getElementById('about-me');
    const aboutTarget = content.querySelector('.fh-about') || content.querySelector('.fh-shell') || aboutAnchor;
    if (aboutAnchor && aboutTarget) {
      ensureId(aboutAnchor, 'about-me');
      items.push({ id: 'about-me', label: 'About', target: aboutTarget });
    }

    headings.forEach((heading, index) => {
      const label = stripDecorations(heading.textContent) || `Section ${index + 1}`;
      const fallbackId = `section-${String(index + 1).padStart(2, '0')}-${slugify(label) || 'part'}`;
      const id = ensureId(heading, fallbackId);
      items.push({ id, label, target: heading });
    });

    if (!items.length) return;

    const toc = document.createElement('nav');
    toc.className = 'fh-toc';
    toc.setAttribute('aria-label', 'On-page sections');
    toc.innerHTML = [
      '<div class="fh-toc__title">Contents</div>',
      '<ul class="fh-toc__list">',
      items
        .map(
          (item) =>
            `<li><a href="#${item.id}" data-toc-id="${item.id}" target="_self"><span class="dot" aria-hidden="true"></span><span class="txt">${item.label}</span></a></li>`
        )
        .join(''),
      '</ul>',
    ].join('');
    document.body.appendChild(toc);

    const links = Array.from(toc.querySelectorAll('a[data-toc-id]'));
    if (!links.length) return;

    const setActive = (id) => {
      links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('data-toc-id') === id));
    };

    links.forEach((link) => {
      link.addEventListener('click', () => setActive(link.getAttribute('data-toc-id') || ''));
    });

    setActive(items[0].id);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => (a.boundingClientRect.top || 0) - (b.boundingClientRect.top || 0));
          if (!visible.length) return;
          const activeId = visible[0].target.getAttribute('data-fh-toc-id');
          if (activeId) setActive(activeId);
        },
        { threshold: [0.08, 0.2, 0.45], rootMargin: '-20% 0px -62% 0px' }
      );

      items.forEach((item) => {
        if (!item.target) return;
        item.target.setAttribute('data-fh-toc-id', item.id);
        observer.observe(item.target);
      });
    }
  };

  buildLeftToc();

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

  const mediaTargets = Array.from(document.querySelectorAll('.page__content img')).filter(
    (img) => img && !img.closest('.fh-toc')
  );

  const markMediaLoaded = (img) => {
    if (!img) return;
    img.classList.add('is-loaded');
  };

  mediaTargets.forEach((img) => {
    img.classList.add('fh-media-fade');
    if (img.complete) {
      markMediaLoaded(img);
    } else {
      img.addEventListener('load', () => markMediaLoaded(img), { once: true });
      img.addEventListener('error', () => markMediaLoaded(img), { once: true });
    }
  });

  const revealAllMedia = () => {
    mediaTargets.forEach((img) => img.classList.add('is-inview'));
  };

  if (reduced || !('IntersectionObserver' in window)) {
    revealAllMedia();
  } else {
    const mediaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.classList.toggle('is-inview', entry.isIntersecting));
      },
      { threshold: 0.15, rootMargin: '10% 0px -10% 0px' }
    );
    mediaTargets.forEach((img) => mediaObserver.observe(img));
  }

  window.addEventListener('beforeprint', () => {
    targets.forEach((item) => item.classList.add('is-inview'));
    revealAllMedia();
  });

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
