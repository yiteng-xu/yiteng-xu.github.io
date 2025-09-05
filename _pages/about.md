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
  <div class="milestones-controls" aria-label="Milestones controls">
    <div class="milestones-toggles" role="tablist" aria-label="Milestones view">
      <button class="view-toggle active" role="tab" aria-selected="true" data-view="timeline">Timeline</button>
      <button class="view-toggle" role="tab" aria-selected="false" data-view="list">List</button>
    </div>
    <div class="milestones-filters" aria-label="Category filters">
      <button class="filter-chip active" data-filter="all">All</button>
      <button class="filter-chip" data-filter="paper">Publications</button>
      <button class="filter-chip" data-filter="award">Awards</button>
      <button class="filter-chip" data-filter="life">Life</button>
    </div>
  </div>

  <div class="milestones-timeline" role="list">
    <div class="timeline-line" aria-hidden="true"></div>

    <div class="milestone" role="listitem" data-type="award">
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

    <div class="milestone" role="listitem" data-type="paper">
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

    <div class="milestone" role="listitem" data-type="life">
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

    <div class="milestone" role="listitem" data-type="paper">
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

    <div class="milestone" role="listitem" data-type="paper">
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
    <li data-type="award">Oct 2024 — National Scholarship (Top 1%)</li>
    <li data-type="paper">Feb 2024 — CVPR 2024: UniPVU-Human accepted</li>
    <li data-type="life">Sep 2023 — Started Ph.D. at ShanghaiTech</li>
    <li data-type="paper">Jul 2023 — ICCV 2023: HuCenLife accepted</li>
    <li data-type="paper">Dec 2022 — AAAI 2023 Oral: Weakly supervised 3D multi-person pose estimation</li>
  </ul>
</div>

<style>
.milestones-section {
  --ms-bg: var(--global-bg, #0b0c10);
  --ms-card: rgba(255, 255, 255, 0.08);
  --ms-border: rgba(255, 255, 255, 0.18);
  --ms-text: var(--global-text, #e5e7eb);
  --ms-muted: #9aa6b2;
  --ms-accent: #7c3aed; /* purple */
  --ms-accent-2: #06b6d4; /* cyan */
  --ms-accent-3: #22d3ee; /* sky */
  --ms-accent-4: #f0abfc; /* pink */
  --ms-shadow: 0 10px 30px rgba(0,0,0,0.30);
  position: relative;
  margin: 1.2rem 0 2.4rem;
  border-radius: 18px;
  overflow: hidden;
  isolation: isolate;
}
.milestones-section::before {
  content: "";
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(600px circle at 20% 20%, rgba(255, 0, 128, 0.14), transparent 55%),
    radial-gradient(500px circle at 85% 15%, rgba(0, 200, 255, 0.14), transparent 55%),
    radial-gradient(650px circle at 30% 85%, rgba(0, 255, 170, 0.12), transparent 60%),
    radial-gradient(700px circle at 80% 75%, rgba(255, 196, 0, 0.10), transparent 60%);
  filter: blur(30px) saturate(120%);
  transform: translateZ(0);
  animation: aurora-shift 18s ease-in-out infinite alternate;
  z-index: -2;
}
.milestones-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(600px 600px at var(--spot-x, 50%) var(--spot-y, 0%), rgba(255,255,255,0.10), transparent 55%);
  pointer-events: none;
  mix-blend-mode: screen;
  transition: background-position .15s ease;
  z-index: -1;
}
@keyframes aurora-shift {
  0% { transform: translate3d(0, -1%, 0) scale(1.02); }
  50% { transform: translate3d(1%, 1%, 0) scale(1.03); }
  100% { transform: translate3d(-1%, 0%, 0) scale(1.02); }
}
@media (prefers-color-scheme: light) {
  .milestones-section {
    --ms-bg: #f7f7fb;
    --ms-card: rgba(255, 255, 255, 0.92);
    --ms-border: rgba(10, 10, 10, 0.08);
    --ms-text: #0f172a;
    --ms-muted: #48566a;
  }
}
.milestones-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem 1rem;
  margin: 0.5rem 0 1rem;
  flex-wrap: wrap;
}
.milestones-toggles { display: flex; gap: 0.5rem; }
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
.milestones-filters { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.filter-chip {
  appearance: none;
  border: 1px solid rgba(255,255,255,0.18);
  background: linear-gradient(135deg, rgba(124,58,237,.25), rgba(6,182,212,.25));
  color: white;
  font: inherit;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
  box-shadow: 0 6px 16px rgba(16,24,40,.18);
}
.filter-chip:hover { transform: translateY(-1px); filter: saturate(1.2); }
.filter-chip.active { box-shadow: 0 8px 22px rgba(124,58,237,.35); }
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
  width: 4px;
  background: linear-gradient(180deg, rgba(124,58,237,.6), rgba(6,182,212,.6), rgba(34,211,238,.6), rgba(240,171,252,.6));
  transform: translateX(-50%);
  filter: blur(.2px) saturate(120%);
  background-size: 100% 300%;
  animation: ms-flow 8s linear infinite;
}
@keyframes ms-flow { 0% { background-position: 0% 0%; } 100% { background-position: 0% 100%; } }
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
.milestone .milestone-card::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: conic-gradient(from 180deg at 50% 50%, #7c3aed, #06b6d4, #22d3ee, #f0abfc, #7c3aed);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
  opacity: .85;
}
.milestone .milestone-card::after {
  content: "";
  position: absolute;
  inset: -20% -60% -20% -60%;
  background: linear-gradient(120deg, rgba(255,255,255,0.0) 30%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0.0) 70%);
  transform: translateX(-60%) rotate(8deg);
  transition: transform .9s cubic-bezier(.2,.5,.2,1);
  pointer-events: none;
}
.milestone .milestone-card:hover::after { transform: translateX(60%) rotate(8deg); }
.milestone .milestone-year {
  position: absolute;
  right: .75rem;
  top: .15rem;
  font-weight: 800;
  font-size: clamp(2.5rem, 14vw, 7.5rem);
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.22);
  text-shadow: 0 0 22px rgba(124,58,237,.25);
  opacity: .08;
  pointer-events: none;
  user-select: none;
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
  background: linear-gradient(135deg, var(--ms-accent), var(--ms-accent-2), var(--ms-accent-3), var(--ms-accent-4));
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
  border: 1px solid rgba(255,255,255,0.22);
  background: linear-gradient(135deg, rgba(255,255,255,.10), rgba(255,255,255,.02));
  color: #f8fafc;
  transition: border-color .25s ease, transform .25s ease, filter .25s ease;
}
.chip-award { border-color: rgba(234,179,8,.55); }
.chip-paper { border-color: rgba(59,130,246,.55); }
.chip-oral { border-color: rgba(244,63,94,.55); }
.chip-life { border-color: rgba(34,197,94,.55); }
.chip-link {
  text-decoration: none;
  border-color: rgba(124,58,237,.45);
}
.chip-link:hover { transform: translateY(-1px); filter: saturate(1.2); }
.milestone:hover .milestone-card { border-color: transparent; box-shadow: 0 20px 50px rgba(16, 24, 40, 0.35); }
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
@media (prefers-reduced-motion: reduce) {
  .milestones-section::before,
  .milestones-section::after,
  .milestones-timeline .timeline-line,
  .milestone .milestone-card::after { animation: none; transition: none; }
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
  const filterChips = root.querySelectorAll('.filter-chip');
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

  // Spotlight follows pointer over the section
  root.addEventListener('mousemove', (e) => {
    const rect = root.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    root.style.setProperty('--spot-x', x + '%');
    root.style.setProperty('--spot-y', y + '%');
  });

  // Add year watermark to each card
  root.querySelectorAll('.milestone-card').forEach(card => {
    const dateEl = card.querySelector('.milestone-date');
    const match = dateEl ? dateEl.textContent.match(/(19|20)\d{2}/) : null;
    if (match) {
      const yearEl = document.createElement('div');
      yearEl.className = 'milestone-year';
      yearEl.textContent = match[0];
      card.appendChild(yearEl);
    }
  });

  // 3D tilt and shine reactive to pointer
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    root.querySelectorAll('.milestone-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        const rx = (-py * 10).toFixed(2);
        const ry = (px * 14).toFixed(2);
        card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // Filtering by category
  function applyFilter(kind) {
    root.querySelectorAll('.milestones-timeline .milestone').forEach(ms => {
      const type = ms.getAttribute('data-type');
      ms.style.display = (kind === 'all' || type === kind) ? '' : 'none';
    });
    root.querySelectorAll('.milestones-list li').forEach(li => {
      const type = li.getAttribute('data-type');
      li.style.display = (kind === 'all' || type === kind) ? '' : 'none';
    });
  }
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      applyFilter(chip.dataset.filter);
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

<div class="news-section">
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

*   **Programming & Frameworks**
    *   **Python & PyTorch (Expert):** For core algorithm design, model implementation, and large-scale data analysis.
    *   **Bash Shell (Proficient):** For automation scripts and server management.
    *   **Data Science Stack (Proficient):** Pandas, Matplotlib, NumPy, SciPy, Scikit-learn for processing, cleaning, and analyzing large-scale time-series and multi-modal data.

*   **Domain Expertise & Toolchain**
    *   **Research Interests:** **3D Computer Vision**, **Multi-Modal Fusion (LiDAR & Camera)**, **Humanoid Robotics**, **Embodied AI**.
    *   **Parametric Human Modeling (Expert):** Proficient with **SMPL/SMPL-X**, capable of leveraging them for 3D reconstruction, motion synthesis, interaction modeling, and integration with physics-based simulation.
    *   **Multi-Agent Interaction Modeling:** Capable of designing **Multi-Human to Multi-Robot** interaction algorithms from the ground up.
    *   **3D Toolchain (Proficient):** Open3D, PCL, MeshLab for point cloud processing, 3D reconstruction, and real-time visualization.
    <!-- *   **Physics Simulation (Proficient):** **NVIDIA Isaac Gym/Orbit** for robot reinforcement learning and real-time interactive simulation. -->
    
*   **System Engineering & Research Methodologies**
    *   **System & DevOps (Expert):** Linux, Git/GitHub, Slurm, and Docker for efficient development environment management and large-scale cluster scheduling.
    *   **Human-Centered AI Methods (Proficient):** Designing and executing complex user studies (e.g., **"Wizard of Oz"**, **"Human-in-the-Loop"**) to collect high-quality, ecologically-valid interaction data.
    *   **Documentation & Communication (Expert):** LaTeX, Draw.io for creating high-quality technical documentation and clear system architecture diagrams.



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

3D Computer Vision, Robotics, Embodied AI, Human-Robot Interaction (HRI), 3D Perception, Human-centric Scene Understanding, Parametric Human Modeling (SMPL/SMPL-X), 3D Motion Generation and Prediction, Humanoid Robotics, Multi-Agent Interaction, Physics-based Simulation and Modeling, Sensor Fusion (LiDAR & Camera), Human-in-the-Loop (HITL) Simulation, Augmented Reality (AR) in Robotics, Real-time Motion Capture, Weakly Supervised Learning, Self-Supervised Learning for Robotics, Geometric Deep Learning, 3D Human Pose Estimation, Point Cloud Video Understanding, Assistive Robotics, Python, PyTorchm, NumPy, Pandas, SciPy, Scikit-learn, Matplotlib, Open3D, PCL, PyTorch3D, Trimesh, MeshLab, LaTeX, Bash Scripting, Algorithms and Data Structures, Docker, Slurm, Git / GitHub, PyTorch Lightning, OpenCV, Jupyter Notebook, Linux, Deep Learning, Generative Models, Diffusion Models, Autoregressive Models, Transformers, 3D Point Cloud Processing, LiDAR Data Processing, Point Cloud Segmentation (Semantic/Instance), Point Cloud Denoising, 3D Action Recognition, 3D Scene Flow Estimation, 3D Human Mesh Recovery, 3D Data Annotation, Inverse Kinematics (IK), Forward Kinematics, Geometric Constraints Modeling, Spatio-temporal Representation Learning, Chamfer Distance, Point-based models (PointNet, PointNet++), 3D Visualization, Robot Perception Systems, Robot Learning, Motion Planning and Control, Behavior Generation, Human-Robot Collaboration, Real-time Interactive Systems, Robot Simulation Environments, Sim-to-Real Transfer, Augmented Reality Interfaces for Robotics, Multi-robot Systems, Data Science, Multimodal Temporal Data Processing, Data Analysis, Data Visualization, Large-scale Dataset Management, High-Quality Interactive Dataset Collection, Closed-loop System Integration, Real-time Data Streaming, Scientific Writing, Project Planning and Management, Problem Definition and Formulation, User-Centered Experiment Design, Human-in-the-Loop Studies, "Wizard of Oz" Prototyping, Quantitative and Qualitative Research, Technical Documentation (LaTeX, Draw.io).

<!-- - *2023.09 - present*, Postgraduate, ShanghaiTech University, Shanghai, China.
- *2019.09 - 2023.06*, Bachelor, ShanghaiTech University, Shanghai, China. -->