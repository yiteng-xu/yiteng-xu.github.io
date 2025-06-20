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


# 🔥 News
<!-- - Feb 2025: &nbsp;🎉🎉 
  One paper on human-robot interaction simulation submitted to <strong>SIGGRAPH 2025</strong>. -->
- Oct 2024: &nbsp;🎉🎉 
  Honored to receive the <strong>National Scholarship</strong> (Top 1%).
- Feb 2024: &nbsp;🎉🎉 
  Our work on unified human-centric point cloud understanding, UniPVU-Human, was accepted by <strong>CVPR 2024</strong>.
- Jul 2023: &nbsp;🎉🎉 
  Our work on human-centric scene understanding and the HuCenLife dataset was accepted by <strong>ICCV 2023</strong>.
- Dec 2022: &nbsp;🎉🎉 
  Our work on weakly supervised 3D multi-person pose estimation was accepted as an <strong>Oral</strong> presentation at <strong>AAAI 2023</strong>.
- Sep 2023: &nbsp;🎉🎉 
  Started my Ph.D. journey at ShanghaiTech University.


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

[A Unified Framework for Human-centric Point Cloud Video Understanding](https://arxiv.org/abs/2403.20031)

**Yiteng Xu**, Kecheng Ye, Xiao Han, Yiming Ren, Xinge ZHU, Yuexin Ma

The IEEE / CVF Computer Vision and Pattern Recognition Conference (**CVPR**), 2024
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2023</div><img src='images/HuCenLife.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Human-centric Scene Understanding for 3D Large-scale Scenarios](https://arxiv.org/abs/2307.14392)

**Yiteng Xu\***, Peishan Cong\*, Yichen Yao\*, Runnan Chen, Yuenan Hou, Xinge Zhu, Xuming He, Jingyi Yu, Yuexin Ma

In IEEE/CVF International Conference on Computer Vision (**ICCV**), 2023
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023</div><img src='images/fusionpose.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Weakly Supervised 3D Multi-person Pose Estimation for Large-scale Scenes based on Monocular Camera and Single LiDAR](https://arxiv.org/abs/2211.16951)

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
-   **National Second Prize**, The 19th ROBOMASTER Robotics Competition, 2020
-   **Third Prize**, The 6th ShanghaiTech Innovation and Entrepreneurship Competition, 2024
-   **Merit Student & Outstanding Student Cadre**, ShanghaiTech University, 2020 & 2021 & 2022 & 2023 & 2024

# 📖 Educations

-   **Ph.D. in Computer Science and Technology** (2023 - Present)
    -   *ShanghaiTech University, Shanghai, China*
-   **B.S. in Computer Science and Technology** (2019 - 2023)
    -   *ShanghaiTech University, Shanghai, China*

<!-- - *2023.09 - present*, Postgraduate, ShanghaiTech University, Shanghai, China.
- *2019.09 - 2023.06*, Bachelor, ShanghaiTech University, Shanghai, China. -->