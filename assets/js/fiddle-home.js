(function () {
  if (!document.body.classList.contains('home-fiddle')) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer:fine)').matches;

  try {
    document.documentElement.style.scrollBehavior = reduced ? 'auto' : 'smooth';
  } catch (_) {}

  const content = document.querySelector('.page__content');
  const hero = content ? content.querySelector('.fh-shell') : null;

  const slugify = (value) => {
    const cleaned = String(value || '')
      .replace(/[\u{1F300}-\u{1FAFF}]/gu, '')
      .replace(/[^\w\s-]/g, ' ')
      .trim()
      .toLowerCase();
    const slug = cleaned.replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    return slug || 'section';
  };

  const ensureId = (el, fallback) => {
    if (!el) return '';
    if (el.id) return el.id;
    el.id = fallback;
    return el.id;
  };

  const wrapIntro = () => {
    if (!content || !hero) return null;
    const firstHeading = content.querySelector(':scope > h1');
    if (!firstHeading) return null;

    const intro = document.createElement('section');
    intro.className = 'fh-intro';
    intro.innerHTML = [
      '<div class="fh-intro__head">',
      '<div class="fh-intro__meta"><span class="k">Index</span><span class="v">00</span></div>',
      '<div class="fh-intro__title">About</div>',
      '</div>',
      '<div class="fh-intro__body"></div>',
      '<aside class="fh-intro__aside" aria-label="Profile"></aside>',
    ].join('');
    content.insertBefore(intro, firstHeading);

    const body = intro.querySelector('.fh-intro__body');
    if (!body) return null;

    let node = hero.nextSibling;
    while (node && node !== firstHeading) {
      const next = node.nextSibling;
      if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) {
        node = next;
        continue;
      }
      body.appendChild(node);
      node = next;
    }

    const profile = document.querySelector('.profile_box');
    const aside = intro.querySelector('.fh-intro__aside');
    if (profile && aside) {
      const clone = profile.cloneNode(true);
      clone.classList.add('fh-profile-card');
      aside.appendChild(clone);
    }

    ensureId(intro, 'fh-about');
    return intro;
  };

  const wrapChapters = () => {
    if (!content) return [];
    const headings = Array.from(content.querySelectorAll(':scope > h1'));
    if (!headings.length) return [];

    const chapters = [];
    headings.forEach((heading, index) => {
      const num = String(index + 1).padStart(2, '0');
      const label = heading.textContent.trim().replace(/\s+/g, ' ');
      const fallbackId = `fh-${num}-${slugify(label)}`;
      ensureId(heading, fallbackId);

      const chapter = document.createElement('section');
      chapter.className = 'fh-chapter';
      chapter.dataset.chapter = num;
      chapter.dataset.label = label;
      chapter.setAttribute('aria-label', label);

      const head = document.createElement('div');
      head.className = 'fh-chapter__head';
      const body = document.createElement('div');
      body.className = 'fh-chapter__body';

      const meta = document.createElement('div');
      meta.className = 'fh-chapter__meta';
      meta.innerHTML = `<span class="k">Index</span><span class="v">${num}</span>`;

      content.insertBefore(chapter, heading);
      chapter.appendChild(head);
      chapter.appendChild(body);
      head.appendChild(meta);
      head.appendChild(heading);

      let node = chapter.nextSibling;
      while (node && !(node.nodeType === Node.ELEMENT_NODE && node.matches('h1'))) {
        const next = node.nextSibling;
        if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) {
          node = next;
          continue;
        }
        body.appendChild(node);
        node = next;
      }

      chapters.push(chapter);
    });
    return chapters;
  };

  const buildIndex = (chapters) => {
    if (!chapters.length) return null;

    const index = document.createElement('nav');
    index.className = 'fh-index';
    index.setAttribute('aria-label', 'On-page index');
    index.innerHTML = [
      '<button class="fh-index__toggle" type="button" aria-expanded="false" aria-controls="fh-index-panel">Index</button>',
      '<div class="fh-index__panel" id="fh-index-panel">',
      '<div class="fh-index__title">Index</div>',
      '<ul class="fh-index__list"></ul>',
      '</div>',
    ].join('');

    const list = index.querySelector('.fh-index__list');
    if (!list) return null;

    const items = [
      { id: 'about-me', num: '00', label: 'About' },
      ...chapters.map((ch) => {
        const h = ch.querySelector('h1');
        return { id: h && h.id ? h.id : '', num: ch.dataset.chapter || '', label: ch.dataset.label || '' };
      }),
    ].filter((x) => x.id);

    list.innerHTML = items
      .map(
        (it) =>
          `<li><a href="#${it.id}" data-fh-id="${it.id}"><span class="n">${it.num}</span><span class="t">${it.label}</span></a></li>`
      )
      .join('');

    document.body.appendChild(index);

    const panel = index.querySelector('.fh-index__panel');
    const toggle = index.querySelector('.fh-index__toggle');
    if (toggle && panel) {
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        panel.hidden = expanded;
      });
      const mobile = window.matchMedia('(max-width: 920px)').matches;
      toggle.hidden = !mobile;
      toggle.setAttribute('aria-expanded', String(!mobile));
      panel.hidden = mobile;
    }

    const setActive = (id) => {
      index.querySelectorAll('a[data-fh-id]').forEach((a) => {
        a.classList.toggle('is-active', a.getAttribute('data-fh-id') === id);
      });
    };

    if ('IntersectionObserver' in window) {
      const targets = chapters.map((c) => ({ el: c, id: (c.querySelector('h1') || {}).id })).filter((x) => x.id);
      const io = new IntersectionObserver(
        (entries) => {
          entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
            .slice(0, 1)
            .forEach((entry) => setActive(entry.target.querySelector('h1').id));
        },
        { threshold: [0.15, 0.3, 0.6], rootMargin: '-15% 0px -70% 0px' }
      );
      targets.forEach((t) => io.observe(t.el));
    } else {
      setActive(items[0].id);
    }

    return index;
  };

  const intro = wrapIntro();
  const chapters = wrapChapters();
  buildIndex(chapters);

  const updateQuickCounts = () => {
    const pubs = document.querySelectorAll('.paper-box').length;
    const patents = document.querySelectorAll('.patent-box').length;
    const pubLink = document.querySelector('.fh-quick-links a[href="#publications"]');
    const patentLink = document.querySelector('.fh-quick-links a[href="#patents"]');
    if (pubLink && pubs) pubLink.textContent = `Publications (${pubs})`;
    if (patentLink && patents) patentLink.textContent = `Patents (${patents})`;
  };
  updateQuickCounts();

  const filmstrip = document.querySelector('.fh-filmstrip');
  if (filmstrip) {
    filmstrip.addEventListener(
      'wheel',
      (event) => {
        if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
        filmstrip.scrollLeft += event.deltaY;
        event.preventDefault();
      },
      { passive: false }
    );
  }

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
    '.fh-shell, .fh-intro, .fh-chapter, .milestones-section, .news-section, .travel-guide, .paper-box, .patent-box, .skills-section, .awards-section, #educations + ul, .skill-points'
  );

  const forceReveal = () => {
    targets.forEach((item) => item.classList.add('is-inview'));
  };

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
    forceReveal();
  }

  window.addEventListener('beforeprint', forceReveal);
  if (window.matchMedia) {
    const media = window.matchMedia('print');
    const handler = (event) => {
      if (event.matches) forceReveal();
    };
    try {
      media.addEventListener('change', handler);
    } catch (_) {
      if (media.addListener) media.addListener(handler);
    }
  }

  const reactive = document.querySelectorAll('.paper-box');
  reactive.forEach((card) => {
    card.addEventListener(
      'mousemove',
      (event) => {
        const r = card.getBoundingClientRect();
        const px = (event.clientX - r.left) / r.width;
        const py = (event.clientY - r.top) / r.height;
        card.style.setProperty('--mx', `${(px * 100).toFixed(2)}%`);
        card.style.setProperty('--my', `${(py * 100).toFixed(2)}%`);
      },
      { passive: true }
    );
    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--mx');
      card.style.removeProperty('--my');
    });
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
