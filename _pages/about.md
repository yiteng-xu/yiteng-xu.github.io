---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a third-year Ph.D. student at the School of Information Science and Technology, [ShanghaiTech University](https://www.shanghaitech.edu.cn/eng/), advised by Prof. Yuexin Ma. Previously, I obtained my B.S. degree from ShanghaiTech University in 2023.

My research lies at the intersection of **3D Computer Vision**, **Robotics**, and **Embodied AI**. My primary goal is to enable intelligent agents (like humanoid robots) to perceive, understand, and interact with the complex, dynamic 3D world in a human-like manner. I am particularly interested in **multi-modal sensor fusion (LiDAR-Camera)**, **3D human pose and motion understanding**, and building **human-in-the-loop systems** for bidirectional learning in human-robot interaction.

<!-- I am actively seeking research internship opportunities for the summer of 2025 that will allow me to apply my research to real-world challenges. -->
[**查看简历** (中文)](assets/files/CV_Yiteng_Xu.pdf){:target="_blank"}        [**View My CV** (English)](assets/files/CV_Yiteng_Xu_English.pdf){:target="_blank"}


# 🔥 Milestones
<div class="milestones-section" id="milestones">
  <div class="milestones-controls" role="tablist" aria-label="Milestones view">
    <button class="view-toggle active" role="tab" aria-selected="true" data-view="timeline">Timeline</button>
    <button class="view-toggle" role="tab" aria-selected="false" data-view="list">List</button>
  </div>

  <div class="milestones-timeline" role="list">
    <div class="timeline-line" aria-hidden="true"></div>

    <div class="milestone" role="listitem">
      <div class="milestone-dot" aria-hidden="true"></div>
      <div class="milestone-card" tabindex="0">
        <div class="milestone-date">Oct 2024</div>
        <h3 class="milestone-title">National Scholarship</h3>
        <p class="milestone-desc">Honored to receive the National Scholarship (Top 1%).</p>
        <div class="milestone-tags">
          <span class="chip chip-award">Award</span>
        </div>
      </div>
    </div>

    <div class="milestone" role="listitem">
      <div class="milestone-dot" aria-hidden="true"></div>
      <div class="milestone-card" tabindex="0">
        <div class="milestone-date">Feb 2024</div>
        <h3 class="milestone-title">CVPR 2024</h3>
        <p class="milestone-desc">UniPVU-Human: A unified framework for human-centric point cloud video understanding accepted by CVPR 2024.</p>
        <div class="milestone-tags">
          <span class="chip chip-paper">Publication</span>
          <a class="chip chip-link" href="https://openaccess.thecvf.com/content/CVPR2024/html/Xu_A_Unified_Framework_for_Human-centric_Point_Cloud_Video_Understanding_CVPR_2024_paper.html" target="_blank" rel="noopener">Paper</a>
        </div>
      </div>
    </div>

    <div class="milestone" role="listitem">
      <div class="milestone-dot" aria-hidden="true"></div>
      <div class="milestone-card" tabindex="0">
        <div class="milestone-date">Sep 2023</div>
        <h3 class="milestone-title">Start Ph.D. Journey</h3>
        <p class="milestone-desc">Started my Ph.D. at ShanghaiTech University.</p>
        <div class="milestone-tags">
          <span class="chip chip-life">Milestone</span>
        </div>
      </div>
    </div>

    <div class="milestone" role="listitem">
      <div class="milestone-dot" aria-hidden="true"></div>
      <div class="milestone-card" tabindex="0">
        <div class="milestone-date">Jul 2023</div>
        <h3 class="milestone-title">ICCV 2023</h3>
        <p class="milestone-desc">Human-centric scene understanding and the HuCenLife dataset accepted by ICCV 2023.</p>
        <div class="milestone-tags">
          <span class="chip chip-paper">Publication</span>
          <a class="chip chip-link" href="https://openaccess.thecvf.com/content/ICCV2023/html/Xu_Human-centric_Scene_Understanding_for_3D_Large-scale_Scenarios_ICCV_2023_paper.html" target="_blank" rel="noopener">Paper</a>
        </div>
      </div>
    </div>

    <div class="milestone" role="listitem">
      <div class="milestone-dot" aria-hidden="true"></div>
      <div class="milestone-card" tabindex="0">
        <div class="milestone-date">Dec 2022</div>
        <h3 class="milestone-title">AAAI 2023 (Oral)</h3>
        <p class="milestone-desc">Weakly supervised 3D multi-person pose estimation accepted as an Oral at AAAI 2023.</p>
        <div class="milestone-tags">
          <span class="chip chip-paper">Publication</span>
          <span class="chip chip-oral">Oral</span>
          <a class="chip chip-link" href="https://ojs.aaai.org/index.php/AAAI/article/view/25120" target="_blank" rel="noopener">Paper</a>
        </div>
      </div>
    </div>
  </div>

  <ul class="milestones-list" hidden>
    <li>Oct 2024 — National Scholarship (Top 1%)</li>
    <li>Feb 2024 — CVPR 2024: UniPVU-Human accepted</li>
    <li>Sep 2023 — Started Ph.D. at ShanghaiTech</li>
    <li>Jul 2023 — ICCV 2023: HuCenLife accepted</li>
    <li>Dec 2022 — AAAI 2023 Oral: Weakly supervised 3D multi-person pose estimation</li>
  </ul>
</div>

<style>
.milestones-section {
  /* Default to light theme-friendly values for better contrast */
  --ms-bg: var(--global-bg, #f7f7fb);
  --ms-card: rgba(255, 255, 255, 0.9);
  --ms-border: rgba(10, 10, 10, 0.08);
  --ms-text: var(--global-text, #000000);
  --ms-muted: #000000;
  --ms-accent: #7c3aed; /* purple */
  --ms-accent-2: #06b6d4; /* cyan */
  --ms-shadow: 0 10px 30px rgba(0,0,0,0.25);
  position: relative;
  margin: 1.2rem 0 2.4rem;
}
@media (prefers-color-scheme: dark) {
  .milestones-section {
    --ms-bg: #0b0c10;
    --ms-card: rgba(255, 255, 255, 0.08);
    --ms-border: rgba(255, 255, 255, 0.18);
    --ms-text: #e5e7eb;
    --ms-muted: #a3a3a3;
  }
}
.milestones-controls {
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0 1rem;
}
.milestones-controls .view-toggle {
  appearance: none;
  border: 1px solid var(--ms-border);
  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0));
  color: var(--ms-text);
  font: inherit;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all .25s ease;
}
.milestones-controls .view-toggle:hover {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
  transform: translateY(-1px);
}
.milestones-controls .view-toggle.active {
  background: linear-gradient(135deg, rgba(124,58,237,.18), rgba(6,182,212,.18));
  border-color: transparent;
}
.milestones-timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.5rem 2rem;
  padding: 1rem 0 0 0;
}
.milestones-timeline .timeline-line {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, rgba(124,58,237,.4), rgba(6,182,212,.4));
  transform: translateX(-50%);
  filter: blur(.3px);
}
.milestone {
  position: relative;
}
.milestone:nth-child(odd) {
  grid-column: 1;
}
.milestone:nth-child(even) {
  grid-column: 2;
}
.milestone .milestone-card {
  position: relative;
  background: var(--ms-card);
  border: 1px solid var(--ms-border);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 14px;
  padding: 1rem 1.1rem 1rem 1.1rem;
  box-shadow: var(--ms-shadow);
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease, opacity .6s ease;
}
.js-enabled .milestone-card {
  opacity: 0;
  transform: translateY(10px);
}
.js-enabled .milestone-card.in-view {
  opacity: 1;
  transform: translateY(0);
}
.milestone .milestone-dot {
  position: absolute;
  left: 50%;
  top: calc(50% - 7px);
  width: 14px;
  height: 14px;
  background: radial-gradient(circle at 35% 35%, #fff 0%, #fff 20%, var(--ms-accent) 60%, var(--ms-accent-2) 100%);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(124,58,237,0.25), 0 0 18px rgba(6,182,212,0.5), inset 0 0 6px rgba(255,255,255,0.8);
  transform: translateX(-50%);
}
.milestone .milestone-date {
  font-size: 0.85rem;
  color: var(--ms-muted);
  letter-spacing: .02em;
  margin-bottom: .25rem;
}
.milestone .milestone-title {
  margin: 0 0 .35rem 0;
  font-size: 1.1rem;
  line-height: 1.2;
  background: linear-gradient(135deg, var(--ms-accent), var(--ms-accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.milestone .milestone-desc {
  margin: 0 0 .7rem 0;
  color: var(--ms-text);
}
.milestone .milestone-tags {
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: .35rem;
  font-size: .75rem;
  padding: .2rem .55rem;
  border-radius: 999px;
  border: 1px solid var(--ms-border);
  background: rgba(255,255,255,.06);
  color: var(--ms-text);
  transition: border-color .25s ease, transform .25s ease;
}
.milestones-section .chip { color: #000 !important; }
.chip-award { border-color: rgba(234,179,8,.45) }
.chip-paper { border-color: rgba(59,130,246,.45) }
.chip-oral { border-color: rgba(244,63,94,.45) }
.chip-life { border-color: rgba(34,197,94,.45) }
.chip-link {
  text-decoration: none;
  border-color: rgba(124,58,237,.45);
}
.chip-link:hover { transform: translateY(-1px) }
.milestone:hover .milestone-card {
  transform: translateY(-2px);
  border-color: transparent;
  box-shadow: 0 14px 40px rgba(16, 24, 40, 0.25);
}
.milestone:hover .milestone-title {
  filter: saturate(1.15);
}
.milestone:hover .milestone-dot {
  animation: ms-pulse 1.8s infinite;
}
@keyframes ms-pulse {
  0% { box-shadow: 0 0 0 3px rgba(124,58,237,0.25), 0 0 18px rgba(6,182,212,0.5), inset 0 0 6px rgba(255,255,255,0.8); }
  70% { box-shadow: 0 0 0 8px rgba(124,58,237,0.12), 0 0 28px rgba(6,182,212,0.7), inset 0 0 6px rgba(255,255,255,0.8); }
  100% { box-shadow: 0 0 0 3px rgba(124,58,237,0.25), 0 0 18px rgba(6,182,212,0.5), inset 0 0 6px rgba(255,255,255,0.8); }
}
@media (max-width: 900px) {
  .milestones-timeline {
    grid-template-columns: 1fr;
  }
  .milestones-timeline .timeline-line {
    left: 0.5rem;
    transform: none;
  }
  .milestone {
    grid-column: 1 !important;
  }
  .milestone .milestone-card {
    padding-left: 2rem;
  }
  .milestone .milestone-dot {
    left: 0.5rem;
    transform: none;
  }
}
.milestones-list {
  margin: 0.5rem 0 0 0;
  padding-left: 1.1rem;
  color: var(--ms-text);
}
.milestones-list li { margin: .35rem 0 }
</style>

<script>
(function() {
  const root = document.getElementById('milestones');
  if (!root) return;
  root.classList.add('js-enabled');
  const timeline = root.querySelector('.milestones-timeline');
  const list = root.querySelector('.milestones-list');
  const buttons = root.querySelectorAll('.view-toggle');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const view = btn.getAttribute('data-view');
      if (view === 'list') {
        list.hidden = false;
        timeline.style.display = 'none';
      } else {
        timeline.style.display = 'grid';
        list.hidden = true;
      }
    });
  });

  // Animate cards on scroll into view
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    root.querySelectorAll('.milestone-card').forEach(el => io.observe(el));
  } else {
    // Fallback: show immediately
    root.querySelectorAll('.milestone-card').forEach(el => el.classList.add('in-view'));
  }
})();
</script>


# 🗞️ News

<div id="news" class="news-section">
  <p class="news-subtitle">互联网上与我相关的最新动态与报道</p>
  <div class="news-grid">
  {% for item in site.data.news %}
    <a class="news-card" href="{{ item.link }}" target="_blank" rel="noopener">
      <div class="news-accent"></div>
      {% if item.image %}
      <div class="news-thumb" style="background-image:url('{{ item.image }}')"></div>
      {% endif %}
      <div class="news-meta">
        <span class="news-chip news-source"><i class="{{ item.icon | default: 'fas fa-newspaper' }}"></i> {{ item.source }}</span>
        {% if item.date %}<span class="news-chip news-date">{{ item.date }}</span>{% endif %}
      </div>
      <h3 class="news-title">{{ item.title }} <i class="fas fa-external-link-alt news-ext"></i></h3>
      {% if item.excerpt %}<p class="news-excerpt">{{ item.excerpt }}</p>{% endif %}
    </a>
  {% endfor %}
  </div>
</div>

<style>
/* ============== News (scoped) ============== */
.news-section {
  /* Default to light theme-friendly values for better contrast */
  --nw-bg: var(--global-bg, #f7f7fb);
  --nw-card: rgba(255, 255, 255, 0.92);
  --nw-border: rgba(10, 10, 10, 0.08);
  --nw-text: var(--global-text, #000000);
  --nw-muted: #000000;
  --nw-ac1: #8b5cf6; /* purple */
  --nw-ac2: #06b6d4; /* cyan */
  --nw-shadow: 0 18px 50px rgba(0,0,0,0.35);
  position: relative;
  margin: 1.2rem 0 2.4rem;
  color: var(--nw-text);
}
@media (prefers-color-scheme: dark) {
  .news-section {
    --nw-bg: #0b0c10;
    --nw-card: rgba(255, 255, 255, 0.06);
    --nw-border: rgba(255, 255, 255, 0.12);
    --nw-text: #e5e7eb;
    --nw-muted: #a3a3a3;
  }
}
.news-subtitle {
  margin: 0.25rem 0 0.8rem;
  font-size: 0.95rem;
  color: var(--nw-muted);
}
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
@media (max-width: 1100px) { .news-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 700px) { .news-grid { grid-template-columns: 1fr; } }

.news-card {
  position: relative;
  display: block;
  text-decoration: none;
  color: var(--nw-text);
  background: var(--nw-card);
  border: 1px solid var(--nw-border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--nw-shadow);
  transform-style: preserve-3d;
  will-change: transform, box-shadow, opacity;
  outline: none;
}
.news-card, .news-card * { transition: color .25s ease, background .25s ease, border-color .25s ease; }
.js-enabled .news-card {
  opacity: 0;
  transform: translateY(14px) scale(.985);
  transition: transform .26s ease, box-shadow .26s ease, border-color .26s ease, opacity .65s ease;
  transition-delay: calc(var(--d, 0) * 60ms);
}
.js-enabled .news-card.in-view { opacity: 1; transform: none; }
.news-card:hover, .news-card:focus-visible {
  transform: translateY(-3px);
  border-color: transparent;
  box-shadow: 0 18px 60px rgba(16,24,40,.28);
}

.news-accent {
  position: absolute; inset: -40% -30% -60% -30%; pointer-events: none; z-index: 0;
  background:
    radial-gradient(600px 220px at var(--mx, 50%) var(--my, 50%), rgba(139,92,246,.28), transparent 60%),
    radial-gradient(600px 220px at calc(var(--mx, 50%) + 140px) calc(var(--my, 50%) + 40px), rgba(6,182,212,.24), transparent 65%);
  filter: blur(22px) saturate(130%);
  opacity: 0; transition: opacity .28s ease;
}
.news-card:hover .news-accent, .news-card:focus-visible .news-accent { opacity: 1; }

.news-thumb {
  position: relative; z-index: 1;
  aspect-ratio: 16 / 9;
  background-size: cover;
  background-position: center;
  transform: translate3d(calc((var(--px, .5) - .5) * 10px), calc((var(--py, .5) - .5) * 10px), 0) scale(1.06);
  transition: transform .25s ease;
}
.news-meta { position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: .45rem; padding: .65rem .9rem 0; }
.news-chip {
  display: inline-flex; align-items: center; gap: .35rem;
  font-size: .75rem; padding: .2rem .55rem; border-radius: 999px;
  border: 1px solid var(--nw-border); background: rgba(255,255,255,.06); color: var(--nw-text);
}
.news-section .news-chip { color: #000 !important; }
.news-source { border-color: rgba(124,58,237,.45); }
.news-date { border-color: rgba(59,130,246,.45); }
.news-title {
  position: relative; z-index: 1; margin: .4rem .9rem; display: flex; align-items: center; gap: .35rem;
  font-size: 1.02rem; line-height: 1.25;
  background: linear-gradient(135deg, var(--nw-ac1), var(--nw-ac2));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.news-ext { font-size: .85em; opacity: .8; }
.news-excerpt {
  position: relative; z-index: 1; margin: 0 .9rem .95rem; color: var(--nw-text);
  line-height: 1.45; max-height: 0; opacity: 0; overflow: hidden; transform: translateY(-4px);
  transition: max-height .35s ease, opacity .35s ease, transform .35s ease;
}
.news-card:hover .news-excerpt, .news-card:focus-within .news-excerpt { max-height: 220px; opacity: 1; transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  .js-enabled .news-card { opacity: 1; transform: none; transition: none; }
  .news-card, .news-card * { transition: none !important; }
  .news-excerpt { max-height: none; opacity: 1; transform: none; }
}
</style>

<script>
(function() {
  const root = document.getElementById('news');
  if (!root) return;
  root.classList.add('js-enabled');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Stagger and reveal on enter
  const cards = Array.from(root.querySelectorAll('.news-card'));
  cards.forEach((card, idx) => card.style.setProperty('--d', String(idx)));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    cards.forEach(c => io.observe(c));
  } else {
    cards.forEach(c => c.classList.add('in-view'));
  }

  // Cursor-reactive aurora + subtle tilt/parallax
  if (!reduced) {
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const px = x / r.width;
        const py = y / r.height;
        card.style.setProperty('--mx', x + 'px');
        card.style.setProperty('--my', y + 'px');
        card.style.setProperty('--px', px.toFixed(4));
        card.style.setProperty('--py', py.toFixed(4));
        const rx = (py - 0.5) * -8;  // natural feel: invert X rotation
        const ry = (px - 0.5) * 10;
        card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.removeProperty('--mx');
        card.style.removeProperty('--my');
        card.style.removeProperty('--px');
        card.style.removeProperty('--py');
      });
    });
  }
})();
</script>


# 📝 Publications 
<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2025</div><img src='images/IDKB.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Practical Human Motion Prediction with LiDAR Point Clouds](https://arxiv.org/abs/2409.02914)

Yuhang Lu, **Yichen Yao**, Jiadong Tu, Jiangnan Shao, Yuexin Ma, Xinge Zhu
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM Multimedia 2024</div><img src='images/MotionPrediction.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Practical Human Motion Prediction with LiDAR Point Clouds](https://dl.acm.org/doi/abs/10.1145/3664647.3680720)

Xiao Han, Yiming Ren, **Yichen Yao**, Yujing Sun, Yuexin Ma
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024</div><img src='images/LiveHPS++.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[LiveHPS++: Robust and Coherent Motion Capture in Dynamic Free Environment](https://arxiv.org/abs/2407.09833)

Yiming Ren, Xiao Han, **Yichen Yao**, Xiaoxiao Long, Yujing Sun, Yuexin Ma
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2024</div><img src='images/RealDex.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[RealDex: Towards Human-like Grasping for Robotic Dexterous Hand](https://arxiv.org/abs/2402.13853)

Yumeng Liu, Yaxun Yang, Youzhuo Wang, Xiaofei Wu, Jiamin Wang, **Yichen Yao**, Sören Schwertfeger, Sibei Yang, Wenping Wang, Jingyi Yu, Xuming He, Yuexin Ma
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='images/HUNTER.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[HUNTER: Unsupervised Human-centric 3D Detection via Transferring Knowledge from Synthetic Instances to Real Scenes](https://arxiv.org/abs/2403.02769)

**Yichen Yao**, Zimo Jiang, Yujing Sun, Zhencai Zhu, Xinge Zhu, Runnan Chen, Yuexin Ma
</div>
</div> -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='images/unified.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Unified Framework for Human-centric Point Cloud Video Understanding](https://openaccess.thecvf.com/content/CVPR2024/html/Xu_A_Unified_Framework_for_Human-centric_Point_Cloud_Video_Understanding_CVPR_2024_paper.html)

**Yiteng Xu**, Kecheng Ye, Xiao Han, Yiming Ren, Xinge ZHU, Yuexin Ma

The IEEE / CVF Computer Vision and Pattern Recognition Conference (**CVPR**), 2024
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2023</div><img src='images/HuCenLife.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Human-centric Scene Understanding for 3D Large-scale Scenarios](https://openaccess.thecvf.com/content/ICCV2023/html/Xu_Human-centric_Scene_Understanding_for_3D_Large-scale_Scenarios_ICCV_2023_paper.html)

**Yiteng Xu\***, Peishan Cong\*, Yichen Yao\*, Runnan Chen, Yuenan Hou, Xinge Zhu, Xuming He, Jingyi Yu, Yuexin Ma

In IEEE/CVF International Conference on Computer Vision (**ICCV**), 2023
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023</div><img src='images/fusionpose.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Weakly Supervised 3D Multi-person Pose Estimation for Large-scale Scenes based on Monocular Camera and Single LiDAR](https://ojs.aaai.org/index.php/AAAI/article/view/25120)

Peishan Cong\*, **Yiteng Xu\***, Yiming Ren, Juze Zhang, Lan Xu, Jingya Wang, Jingyi Yu, Yuexin Ma

Thirty-Seventh AAAI Conference on Artificial Intelligence (**AAAI**), Oral, 2023
</div>
</div>

# 🛠️ Technical Skills & Expertise

<div id="skills" class="skills-section" aria-label="Technical Skills & Expertise">
  <div class="skills-aurora" aria-hidden="true"></div>

  <div class="skills-header">
    <div class="skills-title-wrap">
      <span class="skills-kicker">Designed for curiosity</span>
      <h3 class="skills-title">Interactive Skills Studio</h3>
    </div>
    <div class="skills-modes" role="tablist" aria-label="Skills view selector">
      <button class="skills-mode active" role="tab" aria-selected="true" data-mode="gallery">Gallery</button>
      <button class="skills-mode" role="tab" aria-selected="false" data-mode="constellation">Constellation</button>
    </div>
  </div>

  <div class="skills-grid" data-view="gallery">
    <section class="skills-rings" aria-label="Core proficiencies" role="list">
      <div class="ring" role="listitem" aria-label="Python — Expert" data-percent="95" style="--p: 0">
        <div class="ring-arc"></div>
        <div class="ring-core">
          <span class="ring-label">Python</span>
          <span class="ring-note">Expert</span>
        </div>
      </div>
      <div class="ring" role="listitem" aria-label="PyTorch — Expert" data-percent="92" style="--p: 0">
        <div class="ring-arc"></div>
        <div class="ring-core">
          <span class="ring-label">PyTorch</span>
          <span class="ring-note">Expert</span>
        </div>
      </div>
      <div class="ring" role="listitem" aria-label="3D Computer Vision — Expert" data-percent="93" style="--p: 0">
        <div class="ring-arc"></div>
        <div class="ring-core">
          <span class="ring-label">3D CV</span>
          <span class="ring-note">Expert</span>
        </div>
      </div>
      <div class="ring" role="listitem" aria-label="LiDAR–Camera Fusion — Advanced" data-percent="88" style="--p: 0">
        <div class="ring-arc"></div>
        <div class="ring-core">
          <span class="ring-label">LiDAR × Cam</span>
          <span class="ring-note">Advanced</span>
        </div>
      </div>
      <div class="ring" role="listitem" aria-label="Linux & DevOps — Advanced" data-percent="90" style="--p: 0">
        <div class="ring-arc"></div>
        <div class="ring-core">
          <span class="ring-label">Linux · DevOps</span>
          <span class="ring-note">Advanced</span>
        </div>
      </div>
      <div class="ring" role="listitem" aria-label="Parametric Human Modeling — Advanced" data-percent="85" style="--p: 0">
        <div class="ring-arc"></div>
        <div class="ring-core">
          <span class="ring-label">SMPL/SMPL-X</span>
          <span class="ring-note">Advanced</span>
        </div>
      </div>
    </section>

    <section class="skills-cards" aria-label="Skill categories">
      <article class="skill-card" tabindex="0">
        <div class="card-accent"></div>
        <header class="card-head">
          <svg class="card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 5h8v6H3zM13 5h8v4h-8zM3 13h8v6H3zM13 11h8v8h-8z" stroke="currentColor" stroke-width="1.5"/></svg>
          <h4 class="card-title">Programming & Frameworks</h4>
        </header>
        <div class="card-body">
          <div class="chip-row">
            <span class="skill-chip chip-hot">Python</span>
            <span class="skill-chip chip-hot">PyTorch</span>
            <span class="skill-chip">Bash</span>
            <span class="skill-chip">NumPy</span>
            <span class="skill-chip">Pandas</span>
            <span class="skill-chip">SciPy</span>
            <span class="skill-chip">Scikit-learn</span>
            <span class="skill-chip">Matplotlib</span>
          </div>
          <div class="card-more" hidden>
            <ul class="mini-list">
              <li>Algorithm design & model implementation</li>
              <li>Large-scale data processing & analysis</li>
              <li>Reproducible training pipelines</li>
            </ul>
          </div>
        </div>
        <button class="card-toggle" aria-expanded="false" aria-controls="pf-more">More</button>
      </article>

      <article class="skill-card" tabindex="0">
        <div class="card-accent"></div>
        <header class="card-head">
          <svg class="card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l3 6 6 .9-4.5 4.2 1.2 6.9L12 17l-5.7 4 1.2-6.9L3 9.9 9 9z" stroke="currentColor" stroke-width="1.5"/></svg>
          <h4 class="card-title">Domain & Toolchain</h4>
        </header>
        <div class="card-body">
          <div class="chip-row">
            <span class="skill-chip chip-hot">3D Computer Vision</span>
            <span class="skill-chip">SMPL/SMPL-X</span>
            <span class="skill-chip">Open3D</span>
            <span class="skill-chip">PCL</span>
            <span class="skill-chip">MeshLab</span>
            <span class="skill-chip">LiDAR–Camera Fusion</span>
            <span class="skill-chip">Human Motion</span>
          </div>
          <div class="card-more" hidden>
            <ul class="mini-list">
              <li>Human-centric scene understanding</li>
              <li>Motion capture, mesh recovery & interaction</li>
              <li>Multi-human↔Multi-robot interaction modeling</li>
            </ul>
          </div>
        </div>
        <button class="card-toggle" aria-expanded="false" aria-controls="dt-more">More</button>
      </article>

      <article class="skill-card" tabindex="0">
        <div class="card-accent"></div>
        <header class="card-head">
          <svg class="card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" stroke-width="1.5"/></svg>
          <h4 class="card-title">Systems & Methods</h4>
        </header>
        <div class="card-body">
          <div class="chip-row">
            <span class="skill-chip">Linux</span>
            <span class="skill-chip">Git / GitHub</span>
            <span class="skill-chip">Slurm</span>
            <span class="skill-chip">Docker</span>
            <span class="skill-chip">LaTeX</span>
            <span class="skill-chip">Draw.io</span>
            <span class="skill-chip">Human-in-the-Loop</span>
            <span class="skill-chip">Wizard of Oz</span>
          </div>
          <div class="card-more" hidden>
            <ul class="mini-list">
              <li>Cluster scheduling & experiment orchestration</li>
              <li>High-quality documentation & diagrams</li>
              <li>Rigorous user study design</li>
            </ul>
          </div>
        </div>
        <button class="card-toggle" aria-expanded="false" aria-controls="sm-more">More</button>
      </article>
    </section>
  </div>

  <div class="skills-constellation" hidden aria-live="polite">
    <div class="float-chips">
      <span class="float-chip fc-1">3D Computer Vision</span>
      <span class="float-chip fc-2">Robotics</span>
      <span class="float-chip fc-3">Embodied AI</span>
      <span class="float-chip fc-4">Human–Robot Interaction</span>
      <span class="float-chip fc-5">LiDAR · Camera</span>
      <span class="float-chip fc-6">SMPL / SMPL-X</span>
      <span class="float-chip fc-7">Open3D</span>
      <span class="float-chip fc-8">PCL</span>
      <span class="float-chip fc-9">Docker</span>
      <span class="float-chip fc-10">Linux</span>
      <span class="float-chip fc-11">PyTorch</span>
      <span class="float-chip fc-12">Motion Capture</span>
      <span class="float-chip fc-13">Generative Models</span>
      <span class="float-chip fc-14">Point Clouds</span>
      <span class="float-chip fc-15">Pose Estimation</span>
      <span class="float-chip fc-16">Human-in-the-Loop</span>
    </div>
  </div>
</div>

<style>
/* ============== Skills Studio (scoped) ============== */
.skills-section {
  /* Default to light theme-friendly values for better contrast */
  --sk-bg: var(--global-bg, #f7f7fb);
  --sk-card: rgba(255,255,255,0.9);
  --sk-border: rgba(10,10,10,0.08);
  --sk-text: var(--global-text, #000000);
  --sk-muted: #000000;
  --sk-accent-1: #a855f7; /* purple */
  --sk-accent-2: #06b6d4; /* cyan */
  --sk-accent-3: #f472b6; /* pink */
  --sk-accent-4: #f59e0b; /* amber */
  --sk-shadow: 0 18px 50px rgba(0,0,0,0.35);
  position: relative;
  margin: 1.2rem 0 2.4rem;
  padding: 1rem 0 0 0;
  color: var(--sk-text);
  isolation: isolate;
}
@media (prefers-color-scheme: dark) {
  .skills-section {
    --sk-bg: #0b0c10;
    --sk-card: rgba(255,255,255,0.06);
    --sk-border: rgba(255,255,255,0.12);
    --sk-text: #e5e7eb;
    --sk-muted: #a3a3a3;
  }
}
.skills-aurora {
  position: absolute; inset: -10% -5% -15% -5%; pointer-events: none; z-index: -1;
  background:
    radial-gradient(1200px 800px at 10% 20%, rgba(168,85,247,.28), transparent 45%),
    radial-gradient(1000px 700px at 90% 10%, rgba(6,182,212,.28), transparent 45%),
    radial-gradient(900px 700px at 80% 80%, rgba(244,114,182,.25), transparent 50%),
    radial-gradient(900px 700px at 20% 85%, rgba(245,158,11,.22), transparent 50%);
  filter: blur(40px) saturate(120%);
  transform: translateZ(0);
  animation: auroraShift 16s ease-in-out infinite alternate;
}
@keyframes auroraShift { from { transform: scale(1) translateY(0); } to { transform: scale(1.05) translateY(-2%); } }

.skills-header { display: flex; justify-content: space-between; align-items: center; gap: .75rem; margin-bottom: .5rem; flex-wrap: wrap; }
.skills-kicker { font-size: .8rem; color: var(--sk-muted); letter-spacing: .12em; text-transform: uppercase; }
.skills-title { margin: .15rem 0 0; font-size: clamp(1.1rem, 1.2rem + .5vw, 1.5rem); background: linear-gradient(135deg, var(--sk-accent-1), var(--sk-accent-2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.skills-modes { display: inline-flex; gap: .4rem; }
.skills-mode { appearance: none; border: 1px solid var(--sk-border); background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,0)); color: var(--sk-text); font: inherit; padding: .35rem .8rem; border-radius: 999px; cursor: pointer; transition: all .25s ease; }
.skills-mode:hover { border-color: transparent; box-shadow: 0 0 0 3px rgba(124,58,237,.18); transform: translateY(-1px); }
.skills-mode.active { background: linear-gradient(135deg, rgba(168,85,247,.2), rgba(6,182,212,.2)); border-color: transparent; }

.skills-grid { display: grid; gap: 1.2rem; }
.skills-rings { display: grid; grid-template-columns: repeat(6, minmax(90px, 1fr)); gap: 1rem; align-items: center; }
@media (max-width: 1100px) { .skills-rings { grid-template-columns: repeat(3, minmax(100px, 1fr)); } }
@media (max-width: 600px) { .skills-rings { grid-template-columns: repeat(2, minmax(100px, 1fr)); } }

.ring { --size: 132px; --thickness: 14px; position: relative; display: grid; place-items: center; aspect-ratio: 1/1; width: 100%; min-width: 110px; filter: drop-shadow(0 10px 22px rgba(16, 24, 40, .35)); }
.ring-arc {
  width: var(--size); height: var(--size); border-radius: 50%;
  background:
    conic-gradient(from -90deg,
      color-mix(in oklab, var(--sk-accent-1) 70%, var(--sk-accent-3) 30%) calc(var(--p) * 1%),
      rgba(255,255,255,0.08) 0);
  -webkit-mask: radial-gradient(circle at center, transparent calc(50% - var(--thickness)), #000 calc(50% - var(--thickness) + 1px));
  mask: radial-gradient(circle at center, transparent calc(50% - var(--thickness)), #000 calc(50% - var(--thickness) + 1px));
  transition: background .8s ease;
}
.ring::after { content: ""; position: absolute; inset: 8%; border-radius: 50%; background: radial-gradient(circle at 35% 35%, rgba(255,255,255,.2), rgba(255,255,255,0)); pointer-events: none; }
.ring-core { position: absolute; display: grid; place-items: center; text-align: center; gap: .15rem; }
.ring-label { font-weight: 700; letter-spacing: .02em; font-size: .95rem; }
.ring-note { font-size: .75rem; color: var(--sk-muted); }

.skills-cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
@media (max-width: 1100px) { .skills-cards { grid-template-columns: 1fr 1fr; } }
@media (max-width: 700px) { .skills-cards { grid-template-columns: 1fr; } }

.skill-card { position: relative; background: var(--sk-card); border: 1px solid var(--sk-border); border-radius: 16px; overflow: hidden; box-shadow: var(--sk-shadow); transform-style: preserve-3d; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.skill-card:hover { transform: translateY(-2px) scale(1.01); border-color: transparent; box-shadow: 0 18px 60px rgba(16,24,40,.28); }
.card-accent { position: absolute; inset: -20% -30% auto -30%; height: 120px; background: radial-gradient(700px 200px at 30% 50%, rgba(168,85,247,.35), transparent 60%), radial-gradient(700px 200px at 70% 50%, rgba(6,182,212,.35), transparent 60%); filter: blur(24px) saturate(130%); pointer-events: none; }
.card-head { display: flex; align-items: center; gap: .6rem; padding: .9rem .95rem .2rem; }
.card-icon { color: color-mix(in oklab, var(--sk-accent-1) 60%, var(--sk-accent-2) 40%); }
.card-title { margin: 0; font-size: 1.05rem; background: linear-gradient(135deg, var(--sk-accent-1), var(--sk-accent-2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.card-body { padding: .25rem .95rem .8rem; }
.chip-row { display: flex; flex-wrap: wrap; gap: .45rem; }
.skill-chip { display: inline-flex; align-items: center; gap: .35rem; font-size: .78rem; padding: .28rem .6rem; border-radius: 999px; border: 1px solid var(--sk-border); color: var(--sk-text); background: rgba(255,255,255,.06); transition: transform .2s ease, border-color .2s ease, background .2s ease; }
.skills-section .skill-chip { color: #000 !important; }
.skills-section .float-chip { color: #000 !important; }
.skill-chip:hover { transform: translateY(-2px); border-color: transparent; background: linear-gradient(135deg, rgba(168,85,247,.25), rgba(6,182,212,.25)); }
.chip-hot { border-color: rgba(124,58,237,.45); }
.mini-list { margin: .5rem 0 0; padding-left: 1.1rem; color: var(--sk-text); }
.mini-list li { margin: .25rem 0; }
.card-toggle { width: max-content; margin: 0 .95rem .9rem; appearance: none; border: 1px solid var(--sk-border); background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,0)); color: var(--sk-text); font: inherit; padding: .3rem .7rem; border-radius: 10px; cursor: pointer; transition: all .25s ease; }
.card-toggle:hover { border-color: transparent; box-shadow: 0 0 0 3px rgba(124,58,237,.15); transform: translateY(-1px); }

.skills-constellation { position: relative; min-height: 280px; display: grid; place-items: center; }
.float-chips { display: flex; flex-wrap: wrap; gap: .55rem; justify-content: center; padding: .6rem; }
.float-chip { font-size: .85rem; padding: .35rem .7rem; border-radius: 999px; border: 1px solid var(--sk-border); background: linear-gradient(135deg, rgba(168,85,247,.22), rgba(6,182,212,.22)); color: var(--sk-text); box-shadow: 0 8px 24px rgba(16,24,40,.18); animation: float 5.5s ease-in-out infinite; }
.float-chip:hover { transform: translateY(-3px) scale(1.02); }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
.fc-1 { animation-duration: 5.2s } .fc-2 { animation-duration: 6.1s } .fc-3 { animation-duration: 5.8s } .fc-4 { animation-duration: 6.4s }
.fc-5 { animation-duration: 5.6s } .fc-6 { animation-duration: 6.0s } .fc-7 { animation-duration: 5.4s } .fc-8 { animation-duration: 6.2s }
.fc-9 { animation-duration: 5.7s } .fc-10 { animation-duration: 6.3s } .fc-11 { animation-duration: 5.3s } .fc-12 { animation-duration: 6.6s }
.fc-13 { animation-duration: 5.5s } .fc-14 { animation-duration: 6.5s } .fc-15 { animation-duration: 5.9s } .fc-16 { animation-duration: 6.7s }
</style>

<script>
(function() {
  const root = document.getElementById('skills');
  if (!root) return;
  root.classList.add('js-enabled');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // View toggle: Gallery <-> Constellation
  const modes = root.querySelectorAll('.skills-mode');
  const grid = root.querySelector('.skills-grid');
  const constellation = root.querySelector('.skills-constellation');
  modes.forEach(btn => {
    btn.addEventListener('click', () => {
      modes.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
      const mode = btn.getAttribute('data-mode');
      if (mode === 'constellation') {
        grid.style.display = 'none';
        constellation.hidden = false;
      } else {
        grid.style.display = 'grid';
        constellation.hidden = true;
      }
    });
  });

  // Animate rings on enter
  const rings = Array.from(root.querySelectorAll('.ring'));
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
  function animateRing(el) {
    const target = Number(el.dataset.percent || 0);
    if (reduced) { el.style.setProperty('--p', target); return; }
    const startVal = Number(getComputedStyle(el).getPropertyValue('--p')) || 0;
    const duration = 900 + target * 6;
    let startTime = 0;
    function step(ts) {
      if (!startTime) startTime = ts;
      const k = Math.min((ts - startTime) / duration, 1);
      const val = startVal + (target - startVal) * easeOutCubic(k);
      el.style.setProperty('--p', val.toFixed(1));
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { animateRing(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.35 });
    rings.forEach(r => io.observe(r));
  } else { rings.forEach(r => animateRing(r)); }

  // Card: tilt and expand
  const cards = Array.from(root.querySelectorAll('.skill-card'));
  const maxTiltX = 7, maxTiltY = 10;
  cards.forEach(card => {
    // expand
    const toggle = card.querySelector('.card-toggle');
    const more = card.querySelector('.card-more');
    if (toggle && more) {
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        more.hidden = expanded;
      });
    }
    if (reduced) return;
    // tilt
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width; // 0..1
      const py = (e.clientY - r.top) / r.height; // 0..1
      const rx = (py - 0.5) * -2 * maxTiltX; // invert for natural feel
      const ry = (px - 0.5) * 2 * maxTiltY;
      card.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();
</script>


<!-- # 🎖 Honors and Awards -->


<div id="awards" class="awards-section" aria-label="Honors and Awards">
  <div class="awards-head">
    <h2 class="awards-title">
      <img src="images/trophy.svg" alt="trophy" width="32" height="32" class="awards-ico" />
      Honors and Awards
    </h2>
    <div class="awards-views" role="tablist" aria-label="Awards view selector">
      <button class="awards-toggle active" role="tab" aria-selected="true" data-view="stairs">Stairs</button>
      <button class="awards-toggle" role="tab" aria-selected="false" data-view="list">List</button>
    </div>
  </div>

  <!-- 可视化阶梯视图 -->
  <div class="awards-stairs" role="list" aria-label="Awards as a visual staircase">
    <!-- lvl=1 最低台阶 -->
    <a class="stair" role="listitem" style="--lvl:1" tabindex="0">
      <div class="stair-main">
        <div class="stair-title">Third Prize</div>
        <div class="stair-sub">The 6th ShanghaiTech Innovation & Entrepreneurship · 2024</div>
      </div>
    </a>

    <!-- lvl=2 -->
    <a class="stair" role="listitem" style="--lvl:2" href="https://kms.shanghaitech.edu.cn/itemDetail?id=1963541292048760833" target="_blank" rel="noopener" tabindex="0">
      <div class="stair-main">
        <div class="stair-title">Merit Student & Outstanding Student Leader</div>
        <div class="stair-sub">ShanghaiTech University · 2020–2024</div>
      </div>
    </a>

    <!-- lvl=3 -->
    <a class="stair" role="listitem" style="--lvl:3" href="https://kms.shanghaitech.edu.cn/itemDetail?id=1963545413367676929" target="_blank" rel="noopener" tabindex="0">
      <div class="stair-main">
        <div class="stair-title">Shanghai Outstanding Graduate</div>
        <div class="stair-sub">2023</div>
      </div>
    </a>

    <!-- lvl=4 -->
    <a class="stair" role="listitem" style="--lvl:4" tabindex="0">
      <div class="stair-main">
        <div class="stair-title">National Second Prize</div>
        <div class="stair-sub">The National Robotics Competition · 2020</div>
      </div>
    </a>

    <!-- lvl=5 最高台阶 -->
    <a class="stair top" role="listitem" style="--lvl:5" tabindex="0">
      <div class="stair-main">
        <div class="stair-title">National Scholarship</div>
        <div class="stair-sub">Top 1% · 2024</div>
      </div>
    </a>
  </div>

  <!-- 无障碍/降级列表视图（默认隐藏） -->
  <ul class="awards-list" hidden>
    <li><strong>National Scholarship</strong> (Top 1%), 2024</li>
    <li><strong>National Second Prize</strong>, The National Robotics Competition, 2020</li>
    <li><a href="https://kms.shanghaitech.edu.cn/itemDetail?id=1963545413367676929" target="_blank" rel="noopener"><strong>Shanghai Outstanding Graduate</strong></a>, 2023</li>
    <li><a href="https://kms.shanghaitech.edu.cn/itemDetail?id=1963541292048760833" target="_blank" rel="noopener"><strong>Merit Student & Outstanding Student Leader</strong></a>, ShanghaiTech University, 2020 & 2021 & 2022 & 2023 & 2024</li>
    <li><strong>Third Prize</strong>, The 6th ShanghaiTech Innovation and Entrepreneurship Competition, 2024</li>
  </ul>
</div>

<style>
/* ============== Awards Stairs (scoped) ============== */
.awards-section {
  --aw-bg: var(--global-bg, #f7f7fb);
  --aw-card: rgba(255,255,255,0.9);
  --aw-border: rgba(10,10,10,0.08);
  --aw-text: var(--global-text, #000);
  --aw-muted: #000000;
  --aw-ac1: #8b5cf6; /* purple */
  --aw-ac2: #06b6d4; /* cyan */
  --aw-ac3: #f59e0b; /* amber */
  --aw-shadow: 0 22px 60px rgba(0,0,0,0.32);
  --step-w: clamp(160px, 20vw, 240px);
  --step-h: clamp(64px, 8vw, 86px);   /* 顶面高度（可视内容区） */
  --rise: 22px;                       /* 立面厚度（前脸） */
  --gap: 14px;                        /* 各阶垂直间距 */
  --skew: 0.5deg;                     /* 细微透视倾斜 */
  position: relative;
  margin: 1.2rem 0 2.4rem;
  color: var(--aw-text);
}
@media (prefers-color-scheme: dark) {
  .awards-section {
    --aw-bg: #0b0c10;
    --aw-card: rgba(255,255,255,0.08);
    --aw-border: rgba(255,255,255,0.18);
    --aw-text: #e5e7eb;
    --aw-muted: #a3a3a3;
  }
}

.awards-head { display: flex; align-items: center; justify-content: space-between; gap: .8rem; flex-wrap: wrap; }
.awards-title { display: flex; align-items: center; gap: .6rem; margin: .2rem 0 .6rem; font-size: 1.35rem; background: linear-gradient(135deg, var(--aw-ac1), var(--aw-ac2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.awards-ico { filter: saturate(120%); }
.awards-views { display: inline-flex; gap: .4rem; }
.awards-toggle { appearance: none; border: 1px solid var(--aw-border); background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,0)); color: var(--aw-text); font: inherit; padding: .35rem .8rem; border-radius: 999px; cursor: pointer; transition: all .25s ease; }
.awards-toggle:hover { border-color: transparent; box-shadow: 0 0 0 3px rgba(124,58,237,.18); transform: translateY(-1px); }
.awards-toggle.active { background: linear-gradient(135deg, rgba(139,92,246,.22), rgba(6,182,212,.22)); border-color: transparent; }

/* 舞台容器 */
.awards-stairs {
  position: relative;
  height: clamp(320px, 40vw, 460px);
  background:
    radial-gradient(900px 380px at 10% 90%, rgba(139,92,246,.09), transparent 60%),
    radial-gradient(900px 380px at 80% 20%, rgba(6,182,212,.10), transparent 65%);
  border-radius: 16px;
  overflow: hidden;
  isolation: isolate;
}

/* 单个台阶（顶面） */
.stair {
  --tx: calc((var(--lvl,1) - 1) * (var(--step-w) * 0.22));             /* x 偏移：越高越靠右 */
  --ty: calc((var(--lvl,1) - 1) * (var(--step-h) + var(--gap)) * -1);  /* y 偏移：越高越向上 */
  position: absolute; left: 1.1rem; bottom: 1.2rem; z-index: calc(10 + var(--lvl,1));
  display: grid; place-items: center; width: var(--step-w); height: var(--step-h);
  padding: .6rem .8rem; text-decoration: none; color: var(--aw-text);
  background: linear-gradient(180deg, color-mix(in oklab, var(--aw-card) 88%, transparent), rgba(255,255,255,0.06));
  border: 1px solid var(--aw-border);
  border-radius: 14px 14px 8px 8px;
  box-shadow: var(--aw-shadow);
  transform: translate(var(--tx), var(--ty)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));
  transform-style: preserve-3d;
  transition: transform .26s ease, box-shadow .26s ease, border-color .26s ease, background .26s ease, filter .26s ease;
  outline: none;
}

/* 前脸（立面） */
.stair::before {
  content: "";
  position: absolute; inset: auto 0 calc(var(--rise) * -1) 0; height: var(--rise); border-radius: 0 0 8px 8px;
  background: linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.18));
  border: 1px solid var(--aw-border); border-top: none;
}
/* 环形高光 */
.stair::after {
  content: ""; position: absolute; inset: -40% -35% -60% -35%; pointer-events: none;
  background:
    radial-gradient(600px 260px at var(--mx,50%) var(--my,50%), rgba(139,92,246,.22), transparent 62%),
    radial-gradient(600px 260px at calc(var(--mx,50%) + 120px) calc(var(--my,50%) + 40px), rgba(6,182,212,.22), transparent 66%);
  filter: blur(22px) saturate(130%);
  opacity: 0; transition: opacity .28s ease;
}

.stair .stair-main { width: 100%; display: grid; gap: .2rem; text-align: center; }
.stair-title { font-weight: 700; letter-spacing: .02em; font-size: clamp(.98rem, .92rem + .2vw, 1.05rem); background: linear-gradient(135deg, var(--aw-ac1), var(--aw-ac2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.stair-sub { font-size: .82rem; color: var(--aw-muted); }

/* 悬停/聚焦交互 */
.stair:hover, .stair:focus-visible { border-color: transparent; box-shadow: 0 24px 70px rgba(16,24,40,.30); }
.stair:hover::after, .stair:focus-visible::after { opacity: 1; }
.stair:hover { --sc: 1.02; }
.stair.top { outline: none; }

/* 进入视口时淡入 */
.js-enabled .stair { opacity: 0; filter: blur(.6px) saturate(90%); transform: translate(var(--tx), var(--ty)) scale(.985); }
.js-enabled .stair.in-view { opacity: 1; filter: none; transform: translate(var(--tx), var(--ty)) scale(1); transition-duration: .65s; transition-delay: calc(var(--lvl) * 40ms); }

/* 窄屏：切换为纵向堆叠（仍保持阶梯厚度感） */
@media (max-width: 720px) {
  .awards-stairs { height: auto; padding: .6rem 0 0; background: none; }
  .stair { position: relative; left: 0; bottom: 0; width: 100%; transform: none !important; margin: 0 0 .9rem; }
  .stair::before { inset: auto 0 calc(var(--rise) * -1) 0; }
}

/* List 视图（降级/可切换） */
.awards-list { margin: .6rem 0 0; padding-left: 1.1rem; color: var(--aw-text); }
.awards-section .awards-list li { margin: .35rem 0; }
</style>

<script>
(function() {
  const root = document.getElementById('awards');
  if (!root) return;
  root.classList.add('js-enabled');
  const stairs = root.querySelector('.awards-stairs');
  const toggles = root.querySelectorAll('.awards-toggle');
  const list = root.querySelector('.awards-list');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 视图切换：Stairs <-> List
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      toggles.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active'); btn.setAttribute('aria-selected','true');
      const view = btn.getAttribute('data-view');
      if (view === 'list') { list.hidden = false; stairs.style.display = 'none'; }
      else { stairs.style.display = 'block'; list.hidden = true; }
    });
  });

  // 进入视口动画
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); } });
    }, { threshold: 0.15 });
    root.querySelectorAll('.stair').forEach(el => io.observe(el));
  } else {
    root.querySelectorAll('.stair').forEach(el => el.classList.add('in-view'));
  }

  // 鼠标跟随倾斜/光效（移动端忽略）
  if (!reduced && matchMedia('(hover: hover)').matches) {
    root.querySelectorAll('.stair').forEach(step => {
      step.addEventListener('mousemove', (e) => {
        const r = step.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        const px = x / r.width, py = y / r.height;
        // 轻微 3D 倾斜
        const rx = (py - 0.5) * -6; // invert X for natural feel
        const ry = (px - 0.5) * 8;
        step.style.setProperty('--rx', rx.toFixed(2) + 'deg');
        step.style.setProperty('--ry', ry.toFixed(2) + 'deg');
        step.style.setProperty('--mx', x + 'px');
        step.style.setProperty('--my', y + 'px');
      });
      step.addEventListener('mouseleave', () => {
        step.style.removeProperty('--rx');
        step.style.removeProperty('--ry');
        step.style.removeProperty('--mx');
        step.style.removeProperty('--my');
      });
    });
  } else {
    // 移动端/降级：点击/触摸时轻微高亮
    root.querySelectorAll('.stair').forEach(step => {
      step.addEventListener('touchstart', () => step.classList.add('in-view'), { passive: true });
      step.addEventListener('touchend', () => step.classList.remove('in-view'));
    });
  }
})();
</script>

# 📖 Educations

-   **Ph.D. in Computer Science and Technology** (2023 - Present)
    -   *ShanghaiTech University, Shanghai, China*
-   **B.S. in Computer Science and Technology** (2019 - 2023)
    -   *ShanghaiTech University, Shanghai, China*

# Skill Points

<div id="skill-points" class="skill-points">
  <div class="sp-chips" role="list" aria-label="Skill Points">
    <span class="sp-chip" role="listitem">3D Computer Vision</span>
    <span class="sp-chip" role="listitem">Robotics</span>
    <span class="sp-chip" role="listitem">Embodied AI</span>
    <span class="sp-chip" role="listitem">Human-Robot Interaction (HRI)</span>
    <span class="sp-chip" role="listitem">3D Perception</span>
    <span class="sp-chip" role="listitem">Human-centric Scene Understanding</span>
    <span class="sp-chip" role="listitem">Parametric Human Modeling (SMPL/SMPL-X)</span>
    <span class="sp-chip" role="listitem">3D Motion Generation and Prediction</span>
    <span class="sp-chip" role="listitem">Humanoid Robotics</span>
    <span class="sp-chip" role="listitem">Multi-Agent Interaction</span>
    <span class="sp-chip" role="listitem">Physics-based Simulation and Modeling</span>
    <span class="sp-chip" role="listitem">Sensor Fusion (LiDAR & Camera)</span>
    <span class="sp-chip" role="listitem">Human-in-the-Loop (HITL) Simulation</span>
    <span class="sp-chip" role="listitem">Augmented Reality (AR) in Robotics</span>
    <span class="sp-chip" role="listitem">Real-time Motion Capture</span>
    <span class="sp-chip" role="listitem">Weakly Supervised Learning</span>
    <span class="sp-chip" role="listitem">Self-Supervised Learning for Robotics</span>
    <span class="sp-chip" role="listitem">Geometric Deep Learning</span>
    <span class="sp-chip" role="listitem">3D Human Pose Estimation</span>
    <span class="sp-chip" role="listitem">Point Cloud Video Understanding</span>
    <span class="sp-chip" role="listitem">Assistive Robotics</span>
    <span class="sp-chip" role="listitem">Python</span>
    <span class="sp-chip" role="listitem">PyTorch</span>
    <span class="sp-chip" role="listitem">NumPy</span>
    <span class="sp-chip" role="listitem">Pandas</span>
    <span class="sp-chip" role="listitem">SciPy</span>
    <span class="sp-chip" role="listitem">Scikit-learn</span>
    <span class="sp-chip" role="listitem">Matplotlib</span>
    <span class="sp-chip" role="listitem">Open3D</span>
    <span class="sp-chip" role="listitem">PCL</span>
    <span class="sp-chip" role="listitem">PyTorch3D</span>
    <span class="sp-chip" role="listitem">Trimesh</span>
    <span class="sp-chip" role="listitem">MeshLab</span>
    <span class="sp-chip" role="listitem">LaTeX</span>
    <span class="sp-chip" role="listitem">Bash Scripting</span>
    <span class="sp-chip" role="listitem">Algorithms and Data Structures</span>
    <span class="sp-chip" role="listitem">Docker</span>
    <span class="sp-chip" role="listitem">Slurm</span>
    <span class="sp-chip" role="listitem">Git / GitHub</span>
    <span class="sp-chip" role="listitem">PyTorch Lightning</span>
    <span class="sp-chip" role="listitem">OpenCV</span>
    <span class="sp-chip" role="listitem">Jupyter Notebook</span>
    <span class="sp-chip" role="listitem">Linux</span>
    <span class="sp-chip" role="listitem">Deep Learning</span>
    <span class="sp-chip" role="listitem">Generative Models</span>
    <span class="sp-chip" role="listitem">Diffusion Models</span>
    <span class="sp-chip" role="listitem">Autoregressive Models</span>
    <span class="sp-chip" role="listitem">Transformers</span>
    <span class="sp-chip" role="listitem">3D Point Cloud Processing</span>
    <span class="sp-chip" role="listitem">LiDAR Data Processing</span>
    <span class="sp-chip" role="listitem">Point Cloud Segmentation (Semantic/Instance)</span>
    <span class="sp-chip" role="listitem">Point Cloud Denoising</span>
    <span class="sp-chip" role="listitem">3D Action Recognition</span>
    <span class="sp-chip" role="listitem">3D Scene Flow Estimation</span>
    <span class="sp-chip" role="listitem">3D Human Mesh Recovery</span>
    <span class="sp-chip" role="listitem">3D Data Annotation</span>
    <span class="sp-chip" role="listitem">Inverse Kinematics (IK)</span>
    <span class="sp-chip" role="listitem">Forward Kinematics</span>
    <span class="sp-chip" role="listitem">Geometric Constraints Modeling</span>
    <span class="sp-chip" role="listitem">Spatio-temporal Representation Learning</span>
    <span class="sp-chip" role="listitem">Chamfer Distance</span>
    <span class="sp-chip" role="listitem">Point-based models (PointNet, PointNet++)</span>
    <span class="sp-chip" role="listitem">3D Visualization</span>
    <span class="sp-chip" role="listitem">Robot Perception Systems</span>
    <span class="sp-chip" role="listitem">Robot Learning</span>
    <span class="sp-chip" role="listitem">Motion Planning and Control</span>
    <span class="sp-chip" role="listitem">Behavior Generation</span>
    <span class="sp-chip" role="listitem">Human-Robot Collaboration</span>
    <span class="sp-chip" role="listitem">Real-time Interactive Systems</span>
    <span class="sp-chip" role="listitem">Robot Simulation Environments</span>
    <span class="sp-chip" role="listitem">Sim-to-Real Transfer</span>
    <span class="sp-chip" role="listitem">Augmented Reality Interfaces for Robotics</span>
    <span class="sp-chip" role="listitem">Multi-robot Systems</span>
    <span class="sp-chip" role="listitem">Data Science</span>
    <span class="sp-chip" role="listitem">Multimodal Temporal Data Processing</span>
    <span class="sp-chip" role="listitem">Data Analysis</span>
    <span class="sp-chip" role="listitem">Data Visualization</span>
    <span class="sp-chip" role="listitem">Large-scale Dataset Management</span>
    <span class="sp-chip" role="listitem">High-Quality Interactive Dataset Collection</span>
    <span class="sp-chip" role="listitem">Closed-loop System Integration</span>
    <span class="sp-chip" role="listitem">Real-time Data Streaming</span>
    <span class="sp-chip" role="listitem">Scientific Writing</span>
    <span class="sp-chip" role="listitem">Project Planning and Management</span>
    <span class="sp-chip" role="listitem">Problem Definition and Formulation</span>
    <span class="sp-chip" role="listitem">User-Centered Experiment Design</span>
    <span class="sp-chip" role="listitem">Human-in-the-Loop Studies</span>
    <span class="sp-chip" role="listitem">"Wizard of Oz" Prototyping</span>
    <span class="sp-chip" role="listitem">Quantitative and Qualitative Research</span>
    <span class="sp-chip" role="listitem">Technical Documentation (LaTeX, Draw.io)</span>
  </div>
</div>

<style>
/* ============== Skill Points bubbles (scoped) ============== */
.skill-points {
  /* Default to light theme-friendly values for better contrast */
  --sp-text: var(--global-text, #000000);
  --sp-muted: #000000;
  --sp-bg: rgba(255,255,255,0.9);
  --sp-border: rgba(10,10,10,0.08);
  --sp-ac1: #8b5cf6; /* purple */
  --sp-ac2: #06b6d4; /* cyan */
  --sp-hov-text: #000000; /* text color when highlighted */
  --sp-shadow: 0 12px 30px rgba(16,24,40,0.12);
  margin: .6rem 0 1.2rem;
  color: var(--sp-text);
}
@media (prefers-color-scheme: dark) {
  .skill-points {
    --sp-text: #e5e7eb;
    --sp-muted: #a3a3a3;
    --sp-bg: rgba(255,255,255,0.04);
    --sp-border: rgba(255,255,255,0.12);
    --sp-hov-text: #ffffff;
    --sp-shadow: 0 12px 36px rgba(0,0,0,0.28);
  }
}
.sp-chips {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem .55rem;
  align-items: center;
}
.sp-chip {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: .35rem;
  padding: .36rem .72rem;
  font-size: .86rem;
  line-height: 1;
  color: var(--sp-text);
  background: linear-gradient(180deg, var(--sp-bg), transparent);
  border: 1px solid var(--sp-border);
  border-radius: 999px;
  box-shadow: var(--sp-shadow);
  backdrop-filter: blur(8px) saturate(120%);
  -webkit-backdrop-filter: blur(8px) saturate(120%);
  transform-style: preserve-3d;
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease, background .22s ease, color .22s ease;
  cursor: default;
  will-change: transform;
}
.skill-points .sp-chip { color: #000 !important; }
.sp-chip::before {
  content: "";
  position: absolute;
  inset: -60% -40% -60% -40%;
  background:
    radial-gradient(280px 140px at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--sp-ac1) 55%, var(--sp-ac2) 45%), transparent 62%);
  filter: blur(18px) saturate(130%);
  opacity: 0;
  transition: opacity .28s ease;
  pointer-events: none;
}
.sp-chip:hover, .sp-chip:focus-visible {
  transform: translateY(-1px);
  border-color: transparent;
  background: linear-gradient(135deg,
    color-mix(in oklab, var(--sp-ac1) 55%, transparent),
    color-mix(in oklab, var(--sp-ac2) 55%, transparent)
  );
  color: var(--sp-hov-text);
  box-shadow: 0 16px 46px rgba(16,24,40,.22);
}
.sp-chip:hover::before, .sp-chip:focus-visible::before { opacity: 0; }
.sp-chip:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(139,92,246,.18), 0 16px 46px rgba(16,24,40,.25); }

@media (prefers-reduced-motion: reduce) {
  .sp-chip { transition: none; }
  .sp-chip::before { transition: none; }
}
</style>

<!-- - *2023.09 - present*, Postgraduate, ShanghaiTech University, Shanghai, China.
- *2019.09 - 2023.06*, Bachelor, ShanghaiTech University, Shanghai, China. -->