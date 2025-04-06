---
# An instance of the Experience widget.
# Documentation: https://docs.hugoblox.com/page-builder/
widget: experience

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 20

title: Publication
subtitle:

# Date format for experience
#   Refer to https://docs.hugoblox.com/customization/#date-format
date_format: Jan 2006

# Experiences.
#   Add/remove as many `experience` items below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
experience:
  - title: A Unified Framework for Human-centric Point Cloud Video Understanding
    company: Accepted by CVPR2024
    company_url: 'https://openaccess.thecvf.com/content/CVPR2024/papers/Xu_A_Unified_Framework_for_Human-centric_Point_Cloud_Video_Understanding_CVPR_2024_paper.pdf'
    company_logo: org-gc
    location: Seattle WA, USA
    date_start: '2024-06-17'
    date_end: '2024-06-21'
    description: |2-
        Considering that human has specific characteristics, including the structural semantics of human body and the dynamics of human motions, we propose a unified framework to make full use of the prior knowledge and explore the inherent features in the data itself for generalized human-centric point cloud video understanding.
  - title: Human-centric scene understanding for 3d large-scale scenarios
    company: Accepted by ICCV2023
    company_url: 'https://openaccess.thecvf.com/content/ICCV2023/html/Xu_Human-centric_Scene_Understanding_for_3D_Large-scale_Scenarios_ICCV_2023_paper.html'
    company_logo: org-gc
    location: Paris, France
    date_start: '2023-10-02'
    date_end: '2023-10-06'
    description: |2-
        We present a large-scale multi-modal dataset for human-centric scene understanding, dubbed HuCenLife, which is collected in diverse daily-life scenarios with rich and fine-grained annotations, with benchmarks in 3D perception tasks, such as segmentation, detection, action recognition, etc.
  - title: Weakly Supervised 3D Multi-person Pose Estimation for Large-scale Scenes based on Monocular Camera and Single LiDAR
    company: Accepted by AAAI2023(Oral)
    company_url: 'https://ojs.aaai.org/index.php/AAAI/article/view/25120'
    company_logo: org-gc
    location: Washington, DC, USA
    date_start: '2023-02-07'
    date_end: '2023-02-14'
    description: |2-
        We propose a monocular camera and single LiDAR-based method for 3D multi-person pose estimation in large-scale scenes, with an effective fusion strategy to take advantage of multi-modal input data and make full use of temporal information to guide the network to learn natural and coherent human motions in a weak supervised paradigm.
  #   company: GenCoin
  #   company_url: ''
  #   company_logo: org-gc
  #   location: California
  #   date_start: '2021-01-01'
  #   date_end: ''
  #   description: |2-
  #       Responsibilities include:
        
  #       * Analysing
  #       * Modelling
  #       * Deploying

  # - title: Professor of Semiconductor Physics
  #   company: University X
  #   company_url: ''
  #   company_logo: org-x
  #   location: California
  #   date_start: '2016-01-01'
  #   date_end: '2020-12-31'
  #   description: Taught electronic engineering and researched semiconductor physics.

design:
  columns: '1'
---
