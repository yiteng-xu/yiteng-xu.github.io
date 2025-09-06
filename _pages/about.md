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
  --ms-bg: var(--global-bg, #0b0c10);
  --ms-card: rgba(255, 255, 255, 0.08);
  --ms-border: rgba(255, 255, 255, 0.18);
  --ms-text: var(--global-text, #222);
  --ms-muted: #7b8a97;
  --ms-accent: #7c3aed; /* purple */
  --ms-accent-2: #06b6d4; /* cyan */
  --ms-shadow: 0 10px 30px rgba(0,0,0,0.25);
  position: relative;
  margin: 1.2rem 0 2.4rem;
}
@media (prefers-color-scheme: light) {
  .milestones-section {
    --ms-bg: #f7f7fb;
    --ms-card: rgba(255, 255, 255, 0.9);
    --ms-border: rgba(10, 10, 10, 0.08);
    --ms-text: #0f172a;
    --ms-muted: #6b7280;
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
  --nw-bg: var(--global-bg, #0b0c10);
  --nw-card: rgba(255, 255, 255, 0.06);
  --nw-border: rgba(255, 255, 255, 0.12);
  --nw-text: var(--global-text, #e5e7eb);
  --nw-muted: #a3a3a3;
  --nw-ac1: #8b5cf6; /* purple */
  --nw-ac2: #06b6d4; /* cyan */
  --nw-shadow: 0 18px 50px rgba(0,0,0,0.35);
  position: relative;
  margin: 1.2rem 0 2.4rem;
  color: var(--nw-text);
}
@media (prefers-color-scheme: light) {
  .news-section {
    --nw-bg: #f7f7fb;
    --nw-card: rgba(255, 255, 255, 0.92);
    --nw-border: rgba(10, 10, 10, 0.08);
    --nw-text: #0f172a;
    --nw-muted: #6b7280;
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
  --sk-bg: var(--global-bg, #0b0c10);
  --sk-card: rgba(255,255,255,0.06);
  --sk-border: rgba(255,255,255,0.12);
  --sk-text: var(--global-text, #e5e7eb);
  --sk-muted: #a3a3a3;
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
@media (prefers-color-scheme: light) {
  .skills-section {
    --sk-bg: #f7f7fb;
    --sk-card: rgba(255,255,255,0.9);
    --sk-border: rgba(10,10,10,0.08);
    --sk-text: #0f172a;
    --sk-muted: #6b7280;
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


# <img src='images/trophy.svg' alt='trophy' width="35" style="vertical-align: middle; margin-right: 10px;">Honors and Awards
-   **National Scholarship** (Top 1%), 2024
-   **Shanghai Outstanding Graduate**, 2023
-   **National Second Prize**, The National Robotics Competition, 2020
-   **Third Prize**, The 6th ShanghaiTech Innovation and Entrepreneurship Competition, 2024
-   **Merit Student & Outstanding Student Leader**, ShanghaiTech University, 2020 & 2021 & 2022 & 2023 & 2024

# 📖 Educations

-   **Ph.D. in Computer Science and Technology** (2023 - Present)
    -   *ShanghaiTech University, Shanghai, China*
-   **B.S. in Computer Science and Technology** (2019 - 2023)
    -   *ShanghaiTech University, Shanghai, China*

# Skill Points

<div id="skills-bubbles" class="bubbles-section" aria-label="Interactive Skill Points">
  <div class="bubbles-aurora" aria-hidden="true"></div>
  <canvas id="bubbles-canvas" role="img" aria-label="Floating skill bubbles visualization"></canvas>

  <!-- Progressive enhancement: screen-reader/static fallback -->
  <noscript>
    <p class="bubbles-noscript">JavaScript is disabled. Showing a simple list of skills:</p>
    <p class="bubbles-fallback">
      3D Computer Vision, Robotics, Embodied AI, Human-Robot Interaction (HRI), 3D Perception, Human-centric Scene Understanding, Parametric Human Modeling (SMPL/SMPL-X), 3D Motion Generation and Prediction, Humanoid Robotics, Multi-Agent Interaction, Physics-based Simulation and Modeling, Sensor Fusion (LiDAR & Camera), Human-in-the-Loop (HITL) Simulation, Augmented Reality (AR) in Robotics, Real-time Motion Capture, Weakly Supervised Learning, Self-Supervised Learning for Robotics, Geometric Deep Learning, 3D Human Pose Estimation, Point Cloud Video Understanding, Assistive Robotics, Python, PyTorchm, NumPy, Pandas, SciPy, Scikit-learn, Matplotlib, Open3D, PCL, PyTorch3D, Trimesh, MeshLab, LaTeX, Bash Scripting, Algorithms and Data Structures, Docker, Slurm, Git / GitHub, PyTorch Lightning, OpenCV, Jupyter Notebook, Linux, Deep Learning, Generative Models, Diffusion Models, Autoregressive Models, Transformers, 3D Point Cloud Processing, LiDAR Data Processing, Point Cloud Segmentation (Semantic/Instance), Point Cloud Denoising, 3D Action Recognition, 3D Scene Flow Estimation, 3D Human Mesh Recovery, 3D Data Annotation, Inverse Kinematics (IK), Forward Kinematics, Geometric Constraints Modeling, Spatio-temporal Representation Learning, Chamfer Distance, Point-based models (PointNet, PointNet++), 3D Visualization, Robot Perception Systems, Robot Learning, Motion Planning and Control, Behavior Generation, Human-Robot Collaboration, Real-time Interactive Systems, Robot Simulation Environments, Sim-to-Real Transfer, Augmented Reality Interfaces for Robotics, Multi-robot Systems, Data Science, Multimodal Temporal Data Processing, Data Analysis, Data Visualization, Large-scale Dataset Management, High-Quality Interactive Dataset Collection, Closed-loop System Integration, Real-time Data Streaming, Scientific Writing, Project Planning and Management, Problem Definition and Formulation, User-Centered Experiment Design, Human-in-the-Loop Studies, "Wizard of Oz" Prototyping, Quantitative and Qualitative Research, Technical Documentation (LaTeX, Draw.io).
    </p>
  </noscript>

  <!-- Data source: original comma-separated list (kept, but hidden) -->
  <div id="skills-raw" hidden>
3D Computer Vision, Robotics, Embodied AI, Human-Robot Interaction (HRI), 3D Perception, Human-centric Scene Understanding, Parametric Human Modeling (SMPL/SMPL-X), 3D Motion Generation and Prediction, Humanoid Robotics, Multi-Agent Interaction, Physics-based Simulation and Modeling, Sensor Fusion (LiDAR & Camera), Human-in-the-Loop (HITL) Simulation, Augmented Reality (AR) in Robotics, Real-time Motion Capture, Weakly Supervised Learning, Self-Supervised Learning for Robotics, Geometric Deep Learning, 3D Human Pose Estimation, Point Cloud Video Understanding, Assistive Robotics, Python, PyTorchm, NumPy, Pandas, SciPy, Scikit-learn, Matplotlib, Open3D, PCL, PyTorch3D, Trimesh, MeshLab, LaTeX, Bash Scripting, Algorithms and Data Structures, Docker, Slurm, Git / GitHub, PyTorch Lightning, OpenCV, Jupyter Notebook, Linux, Deep Learning, Generative Models, Diffusion Models, Autoregressive Models, Transformers, 3D Point Cloud Processing, LiDAR Data Processing, Point Cloud Segmentation (Semantic/Instance), Point Cloud Denoising, 3D Action Recognition, 3D Scene Flow Estimation, 3D Human Mesh Recovery, 3D Data Annotation, Inverse Kinematics (IK), Forward Kinematics, Geometric Constraints Modeling, Spatio-temporal Representation Learning, Chamfer Distance, Point-based models (PointNet, PointNet++), 3D Visualization, Robot Perception Systems, Robot Learning, Motion Planning and Control, Behavior Generation, Human-Robot Collaboration, Real-time Interactive Systems, Robot Simulation Environments, Sim-to-Real Transfer, Augmented Reality Interfaces for Robotics, Multi-robot Systems, Data Science, Multimodal Temporal Data Processing, Data Analysis, Data Visualization, Large-scale Dataset Management, High-Quality Interactive Dataset Collection, Closed-loop System Integration, Real-time Data Streaming, Scientific Writing, Project Planning and Management, Problem Definition and Formulation, User-Centered Experiment Design, Human-in-the-Loop Studies, "Wizard of Oz" Prototyping, Quantitative and Qualitative Research, Technical Documentation (LaTeX, Draw.io).
  </div>
</div>

<style>
/* ============== Skill Bubbles (scoped) ============== */
.bubbles-section {
  --bb-bg: var(--global-bg, #0b0c10);
  --bb-text: var(--global-text, #e5e7eb);
  --bb-muted: #9aa4af;
  --bb-glow: rgba(139,92,246,.35); /* purple glow */
  --bb-glow-2: rgba(6,182,212,.35); /* cyan glow */
  position: relative;
  margin: 1.2rem 0 2.4rem;
  min-height: clamp(340px, 40vw, 620px);
  border-radius: 18px;
  overflow: hidden;
  isolation: isolate;
  background: radial-gradient(1200px 800px at 10% 20%, rgba(168,85,247,.10), transparent 50%),
              radial-gradient(1000px 700px at 90% 10%, rgba(6,182,212,.10), transparent 55%),
              linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0));
  border: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 22px 60px rgba(0,0,0,.35);
}
@media (prefers-color-scheme: light) {
  .bubbles-section {
    --bb-bg: #f7f7fb;
    --bb-text: #0f172a;
    --bb-muted: #6b7280;
    border-color: rgba(10,10,10,.08);
    box-shadow: 0 22px 60px rgba(0,0,0,.18);
  }
}
.bubbles-aurora {
  position: absolute; inset: -25% -10% -35% -10%; z-index: -1; pointer-events: none;
  background:
    radial-gradient(1400px 800px at 20% 20%, rgba(168,85,247,.28), transparent 55%),
    radial-gradient(1200px 700px at 80% 15%, rgba(6,182,212,.26), transparent 60%),
    radial-gradient(1100px 800px at 75% 85%, rgba(244,114,182,.22), transparent 58%),
    radial-gradient(1200px 800px at 25% 90%, rgba(245,158,11,.20), transparent 60%);
  filter: blur(42px) saturate(118%);
  animation: auroraSway 18s ease-in-out infinite alternate;
}
@keyframes auroraSway { from { transform: scale(1) translateY(0); } to { transform: scale(1.06) translateY(-2.5%); } }

#bubbles-canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.bubbles-noscript { margin: .8rem; color: var(--bb-muted); }
.bubbles-fallback { margin: .6rem .8rem 1rem; padding-left: 1.1rem; color: var(--bb-text); }

/* Reduce motion preference */
@media (prefers-reduced-motion: reduce) {
  .bubbles-aurora { animation: none; }
}
</style>

<script>
(function() {
  const section = document.getElementById('skills-bubbles');
  if (!section) return;
  const canvas = document.getElementById('bubbles-canvas');
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Parse skills from hidden raw text
  const rawEl = document.getElementById('skills-raw');
  const rawText = rawEl ? rawEl.textContent : '';
  const skills = Array.from(new Set(
    rawText.split(',')
      .map(s => s.replace(/\n/g, ' ').trim())
      .map(s => s.replace(/^"|"$/g, ''))
      .filter(Boolean)
      .map(s => s.replace(/\bPyTorchm\b/i, 'PyTorch')) // small fix
  ));

  // Fallback list for <noscript> is populated by Jekyll server-side only when JS disabled.
  // Here we also keep an accessible list in DOM for SEO if needed.

  // Early exit for reduced motion: render static tagged cloud using DOM chips
  if (reduced) {
    // Build a simple static cloud of chips
    const ul = document.createElement('ul');
    ul.style.margin = '0.8rem';
    ul.style.padding = '0';
    ul.style.listStyle = 'none';
    ul.style.display = 'flex';
    ul.style.flexWrap = 'wrap';
    ul.style.gap = '.45rem';
    section.appendChild(ul);
    skills.forEach(label => {
      const li = document.createElement('li');
      li.textContent = label;
      li.style.border = '1px solid rgba(255,255,255,.12)';
      li.style.padding = '.28rem .6rem';
      li.style.borderRadius = '999px';
      li.style.background = 'linear-gradient(135deg, rgba(168,85,247,.18), rgba(6,182,212,.18))';
      li.style.color = 'var(--bb-text)';
      ul.appendChild(li);
    });
    return;
  }

  // Canvas sizing with DPR
  const dpr = Math.max(1, Math.min(2.5, window.devicePixelRatio || 1));
  function resize() {
    const r = section.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(r.width * dpr));
    canvas.height = Math.max(1, Math.floor(r.height * dpr));
    canvas.style.width = r.width + 'px';
    canvas.style.height = r.height + 'px';
  }
  resize();
  window.addEventListener('resize', resize);

  // Utilities
  function hashString(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rand01(seed) { // deterministic 0..1
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  // Bubble model
  const bounds = () => ({ w: canvas.width, h: canvas.height });
  const B = bounds();
  const num = skills.length;
  const minR = Math.max(16, Math.min(28, Math.round(Math.min(B.w, B.h) / 36)));
  const maxR = Math.max(minR + 10, Math.round(minR * 1.9));
  const bubbles = [];

  // Pre-render each bubble to its own offscreen canvas for performance
  function makeBubble(label, idx) {
    const seed = hashString(label) ^ (idx * 2654435761 >>> 0);
    const rNorm = 0.55 + 0.45 * rand01(seed + 1);
    const radius = Math.round(minR + (maxR - minR) * rNorm);
    const hue = Math.floor(360 * rand01(seed + 2));
    const hue2 = (hue + Math.floor(40 + 80 * rand01(seed + 3))) % 360;
    const sat = 60 + 30 * rand01(seed + 4);
    const light = 55 + 10 * rand01(seed + 5);

    const off = document.createElement('canvas');
    const d = Math.ceil((radius * 2 + 10) * dpr); // padding for shadow/halo
    off.width = d; off.height = d;
    const octx = off.getContext('2d');
    octx.scale(dpr, dpr);
    octx.translate(d / dpr / 2, d / dpr / 2);

    // Glow shadow
    octx.save();
    octx.shadowColor = `hsla(${hue}, 75%, 60%, .45)`;
    octx.shadowBlur = Math.min(26, radius * 0.9);
    octx.beginPath();
    octx.arc(0, 0, radius, 0, Math.PI * 2);
    octx.fillStyle = 'rgba(0,0,0,0)';
    octx.fill();
    octx.restore();

    // Bubble body with radial gradient
    const grad = octx.createRadialGradient(-radius * 0.3, -radius * 0.35, radius * 0.2, 0, 0, radius);
    grad.addColorStop(0, `hsla(${hue}, ${sat}%, ${Math.min(98, light + 25)}%, .95)`);
    grad.addColorStop(0.35, `hsla(${hue2}, ${sat}%, ${Math.min(96, light + 18)}%, .85)`);
    grad.addColorStop(1, `hsla(${hue}, ${sat}%, ${Math.max(28, light - 28)}%, .82)`);
    octx.beginPath();
    octx.arc(0, 0, radius, 0, Math.PI * 2);
    octx.fillStyle = grad;
    octx.fill();

    // Inner highlight ring
    octx.beginPath();
    octx.arc(-radius * 0.25, -radius * 0.28, radius * 0.72, 0, Math.PI * 2);
    octx.strokeStyle = 'rgba(255,255,255,.35)';
    octx.lineWidth = Math.max(1, radius * 0.08);
    octx.stroke();

    // Text fitting
    const maxTextWidth = radius * 1.72; // interior width
    let fontSize = clamp(radius * 0.62, 10, 22);
    octx.fillStyle = 'rgba(255,255,255,.92)';
    octx.font = `${fontSize}px ui-sans-serif, -apple-system, Segoe UI, Roboto, sans-serif`;
    let text = label;
    if (text.length > 24) text = text.replace(/\s*\([^)]*\)/g, '').trim(); // simplify long terms
    while (octx.measureText(text).width > maxTextWidth && fontSize > 9) {
      fontSize -= 1;
      octx.font = `${fontSize}px ui-sans-serif, -apple-system, Segoe UI, Roboto, sans-serif`;
    }
    octx.textAlign = 'center';
    octx.textBaseline = 'middle';
    octx.fillText(text, 0, 0);

    // Physics init
    const angle = 2 * Math.PI * rand01(seed + 7);
    const speed = 0.08 + 0.18 * rand01(seed + 8); // px/ms at DPR=1
    const wander = 0.0005 + 0.0015 * rand01(seed + 9);
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    return {
      label, radius, off, dCSS: d / dpr,
      x: Math.random() * (B.w / dpr),
      y: Math.random() * (B.h / dpr),
      vx, vy,
      wanderAngle: angle,
      wander,
      hue,
      highlight: 0
    };
  }

  skills.forEach((s, i) => bubbles.push(makeBubble(s, i)));

  // Spatial hash for light collision avoidance
  const gridSize = Math.max(40, Math.round((minR + maxR) * 0.9));
  function buildHash() {
    const map = new Map();
    for (let i = 0; i < bubbles.length; i++) {
      const b = bubbles[i];
      const gx = Math.floor(b.x / gridSize);
      const gy = Math.floor(b.y / gridSize);
      const key = gx + ',' + gy;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(i);
    }
    return map;
  }

  // Pointer tracking
  const pointer = { x: 0, y: 0, inside: false };
  section.addEventListener('pointermove', (e) => {
    const r = section.getBoundingClientRect();
    pointer.x = (e.clientX - r.left);
    pointer.y = (e.clientY - r.top);
    pointer.inside = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= r.width && pointer.y <= r.height;
  });
  section.addEventListener('pointerleave', () => { pointer.inside = false; });

  let last = performance.now();
  function step(now) {
    const dt = clamp(now - last, 6, 32); // ms
    last = now;
    const W = canvas.width / dpr, H = canvas.height / dpr;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);

    // Build grid
    const hash = buildHash();

    // Update physics
    const maxSpeed = 0.45; // px/ms
    const friction = 0.992;
    const attractRadius = Math.min(260, Math.max(160, Math.min(W, H) * 0.45));
    const G = 0.08; // attraction strength

    for (let i = 0; i < bubbles.length; i++) {
      const b = bubbles[i];
      // Wander force (slowly changing heading)
      b.wanderAngle += b.wander * dt;
      b.vx += Math.cos(b.wanderAngle) * 0.0006 * dt;
      b.vy += Math.sin(b.wanderAngle) * 0.0006 * dt;

      // Mouse attraction
      if (pointer.inside) {
        const dx = pointer.x - b.x;
        const dy = pointer.y - b.y;
        const d2 = dx*dx + dy*dy;
        const d = Math.sqrt(d2) + 0.001;
        if (d < attractRadius) {
          const strength = (G * (1 - d / attractRadius));
          b.vx += (dx / d) * strength * dt * 0.06;
          b.vy += (dy / d) * strength * dt * 0.06;
          b.highlight = Math.min(1, b.highlight + 0.08);
        } else {
          b.highlight = Math.max(0, b.highlight - 0.04);
        }
      } else {
        b.highlight = Math.max(0, b.highlight - 0.04);
      }

      // Speed clamp and friction
      const sp = Math.hypot(b.vx, b.vy);
      if (sp > maxSpeed) { b.vx = (b.vx / sp) * maxSpeed; b.vy = (b.vy / sp) * maxSpeed; }
      b.vx *= friction; b.vy *= friction;

      // Integrate
      b.x += b.vx * dt;
      b.y += b.vy * dt;

      // Soft collisions (check neighboring cells only)
      const gx = Math.floor(b.x / gridSize);
      const gy = Math.floor(b.y / gridSize);
      for (let oy = -1; oy <= 1; oy++) {
        for (let ox = -1; ox <= 1; ox++) {
          const key = (gx + ox) + ',' + (gy + oy);
          const arr = hash.get(key);
          if (!arr) continue;
          for (let k = 0; k < arr.length; k++) {
            const j = arr[k];
            if (j <= i) continue; // avoid double
            const a = b, c = bubbles[j];
            const dx2 = c.x - a.x; const dy2 = c.y - a.y;
            const dist = Math.hypot(dx2, dy2) || 0.001;
            const minDist = a.radius + c.radius - 4; // allow a tiny overlap for organic look
            if (dist < minDist) {
              const overlap = (minDist - dist) * 0.5;
              const ux = dx2 / dist, uy = dy2 / dist;
              a.x -= ux * overlap; a.y -= uy * overlap;
              c.x += ux * overlap; c.y += uy * overlap;
              const push = 0.002 * dt;
              a.vx -= ux * push; a.vy -= uy * push; c.vx += ux * push; c.vy += uy * push;
            }
          }
        }
      }

      // Boundaries bounce
      if (b.x - b.radius < 0) { b.x = b.radius; b.vx = Math.abs(b.vx) * 0.8; }
      if (b.x + b.radius > W) { b.x = W - b.radius; b.vx = -Math.abs(b.vx) * 0.8; }
      if (b.y - b.radius < 0) { b.y = b.radius; b.vy = Math.abs(b.vy) * 0.8; }
      if (b.y + b.radius > H) { b.y = H - b.radius; b.vy = -Math.abs(b.vy) * 0.8; }
    }

    // Draw
    for (let i = 0; i < bubbles.length; i++) {
      const b = bubbles[i];
      const x = b.x - b.dCSS / 2; const y = b.y - b.dCSS / 2;
      ctx.save();
      if (b.highlight > 0) {
        ctx.globalAlpha = 1;
        ctx.shadowColor = `hsla(${b.hue}, 80%, 65%, ${0.35 * b.highlight})`;
        ctx.shadowBlur = 24 * b.highlight;
      }
      ctx.drawImage(b.off, x, y, b.dCSS, b.dCSS);
      ctx.restore();
    }

    ctx.restore();
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();
</script>

<!-- End Skill Bubbles -->

<!-- - *2023.09 - present*, Postgraduate, ShanghaiTech University, Shanghai, China.
- *2019.09 - 2023.06*, Bachelor, ShanghaiTech University, Shanghai, China. -->