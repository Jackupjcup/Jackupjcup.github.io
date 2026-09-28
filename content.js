// 修改键值后保存、刷新网页。\n 表示换行；items 数组可增删条目。
window.SITE_CONTENT = {
  "site": {
    "title": "Runda Liu | Academic Homepage",
    "description": "Runda Liu — Xidian University B.Eng.; NUS M.Sc. in Electrical Engineering. Computer vision, spatial perception and multi-agent learning.",
    "language": "en"
  },
  "navigation": {
    "education": "Education",
    "research": "Research",
    "experience": "Experience",
    "cv": "CV"
  },
  "profile": {
    "name": "Runda Liu",
    "portrait": "assets/avatar.png",
    "portraitAlt": "Runda Liu’s illustrated GitHub avatar",
    "field": "Computer Vision &\nIntelligent Systems",
    "undergraduateLabel": "Undergraduate",
    "undergraduateSchool": "XDU",
    "graduateLabel": "Graduate",
    "graduateSchool": "NUS"
  },
  "links": {
    "github": "https://github.com/Jackupjcup",
    "email": "rundaliu@u.nus.edu",
    "alternateEmail": "Jackup_Liu@outlook.com",
    "cv": "CV_26_7_7.docx"
  },
  "labels": {
    "email": "Email",
    "alternateEmail": "Personal email",
    "github": "GitHub",
    "cv": "Download CV",
    "details": "Project details",
    "skip": "Skip to content",
    "projectPreview": "Project preview"
  },
  "education": {
    "title": "Education",
    "awardsLabel": "Undergraduate awards",
    "items": [
      {
        "id": "nus", "school": "National University of Singapore (NUS)",
        "url": "https://www.nus.edu.sg/", "logo": "assets/nus-logo.png",
        "date": "Aug 2026 – Present", "degree": "M.Sc. in Electrical Engineering",
        "location": "Singapore", "grade": "", "awards": []
      },
      {
        "id": "xdu", "school": "Xidian University (XDU)",
        "url": "https://www.xidian.edu.cn/", "logo": "assets/xdu-logo.png",
        "date": "Sep 2022 – Jun 2026", "degree": "B.Eng. in Electronic and Information Engineering",
        "location": "Xi’an, China", "grade": "GPA: 3.8 / 4.0",
        "awards": [
          {"date": "2024", "title": "Third Prize, Shaanxi Province — National Undergraduate Mathematics Competition"},
          {"date": "2022–23", "title": "Third-class Scholarship"}
        ]
      }
    ]
  },
  "research": {
    "title": "Research & Projects",
    "items": [
      {
        "id": "hmi",
        "title": "integrating-sensoring-system-for-HMI",
        "url": "https://github.com/Jackupjcup/integrating-sensoring-system-for-HMI",
        "category": "MULTIMODAL SENSING & HMI",
        "date": "2026",
        "media": {
          "type": "image",
          "src": "assets/projects/hand-attitude-demo.gif",
          "alt": "Sensor-based arm tracking alongside the corresponding Blender hand animation",
          "position": "50% 50%",
          "poster": ""
        },
        "summary": "A textile-based sensing platform combining a 14 × 10 pressure array and three IMUs for hand posture estimation, gesture recognition and Blender interaction.",
        "details": [
          "Built a pipeline for threaded sensor acquisition, calibration, tactile processing and IMU attitude estimation.",
          "Used MediaPipe-assisted joint-angle annotation and CNN models for gesture/object classification and regression of 14 hand joint angles from pressure sequences.",
          "Connected sensor predictions to Blender for hand/arm visualization and spatial drawing. The repository includes the project poster, demo video, datasets and model checkpoints.",
          "Project by Nie Mingkai and Liu Runda; supervised by Prof. Chengkuo Lee and mentored by Dr. Xu Yunlong."
        ]
      },
      {
        "id": "pose",
        "media": {"type": "image", "src": "", "alt": "Human pose estimation preview", "position": "50% 50%", "poster": ""},
        "title": "Human-3D-2D-Keypoints-Detection",
        "url": "https://github.com/Jackupjcup/Human-3D-2D-Keypoints-Detection",
        "category": "COMPUTER VISION",
        "date": "2026",
        "summary": "RTMW-based 2D / 3D keypoint regression and large-scale paired human pose data at Sentigent Tech.",
        "details": [
          "Optimized RTMW for accurate 2D and 3D keypoint regression and constructed a 200M paired 2D & 3D human keypoint dataset.",
          "The detector outputs 48 upper-body 2D landmarks, including hands, and 18 full-body 3D landmarks, reaching 46 mm Masked-MPJPE (3D) and 92% PCK@5% (2D)."
        ]
      },
      {
        "id": "depth",
        "media": {"type": "image", "src": "", "alt": "Monocular depth estimation preview", "position": "50% 50%", "poster": ""},
        "title": "Lightweight_mono_depth_estimation",
        "url": "https://github.com/Jackupjcup/Lightweight_mono_depth_estimation",
        "category": "SPATIAL PERCEPTION",
        "date": "2026",
        "summary": "MobileNetV2 depth distillation with a DepthAnythingV3 teacher, alongside Unreal Engine and AirSim simulation.",
        "details": [
          "Distilled a MobileNetV2 student using a DepthAnythingV3 (DA3) teacher on TartanGround (100M samples), with a depth-ray dual-head decoder for relative depth prediction.",
          "Excluding sky pixels, achieved δ1 = 0.6 (87.7% of DA3) and 96% feature SSIM.",
          "Built virtual scenes in Unreal Engine and customized depth passes for translucent materials, including water and glass. Used AirSim to record trajectory metadata and collect stereo RGB-depth data from simulated vehicles."
        ]
      },
      {
        "id": "agents",
        "media": {"type": "image", "src": "", "alt": "MAPPO project preview", "position": "50% 50%", "poster": ""},
        "title": "MAPPO",
        "url": "https://github.com/Jackupjcup/MAPPO",
        "category": "REINFORCEMENT LEARNING",
        "date": "2024–25",
        "summary": "Multi-platform task allocation with MAPPO, independent actor networks and action masking.",
        "details": [
          "Xi’an, China · Oct 2024 – Jul 2025. Built a reinforcement learning simulation environment and designed multi-objective rewards for task benefit, platform load balance and distance penalties.",
          "Modeled each platform as an independent agent with its own actor network. Trained with Multi-Agent Proximal Policy Optimization (MAPPO) and used action masking to restrict invalid actions.",
          "Improved collaborative task planning performance by approximately 11.26% compared with the doctoral-thesis algorithm used as the project baseline."
        ]
      },
      {
        "id": "antenna",
        "media": {"type": "image", "src": "", "alt": "Antenna array simulation preview", "position": "50% 50%", "poster": ""},
        "title": "near-and-far-field-radiation-energy-and-array-antenna-radiation-patterns",
        "url": "https://github.com/Jackupjcup/near-and-far-field-radiation-energy-and-array-antenna-radiation-patterns",
        "category": "MODELING & SIMULATION",
        "date": "2024–25",
        "summary": "MATLAB computational modules for near-field energy distributions and far-field antenna array radiation patterns.",
        "details": [
          "Xi’an, China · Mar 2024 – Mar 2025. Built mathematical models of antenna arrays using far-field pattern multiplication and near-field field superposition.",
          "Implemented near-field electromagnetic energy calculations on an observation plane at a specified distance and generated visual heatmaps.",
          "Computed three-dimensional far-field radiation patterns (PAT), decomposed array factors (AF) and element factors (EP), and visualized the results in sine space."
        ]
      }
    ]
  },
  "experience": {
    "title": "Experience",
    "items": [
      {
        "organization": "Sentigent Tech",
        "role": "Computer Vision Intern",
        "location": "Suzhou, Jiangsu, China",
        "date": "Apr – Jul 2026",
        "highlights": [
          "Human pose estimation with RTMW and large-scale 2D / 3D data.",
          "Monocular depth distillation with MobileNetV2 and DepthAnythingV3.",
          "Unreal Engine scene development and AirSim RGB-depth data collection."
        ]
      }
    ]
  },
  "awards": {
    "title": "Recognition",
    "items": [
      {
        "date": "2026",
        "title": "Outstanding Student of ECE — Class of 2026",
        "organization": "NUS (Suzhou) Research Institute"
      }
    ]
  },
  "skills": {
    "title": "Skills & tools",
    "items": [
      {
        "label": "Programming",
        "value": "Python · MATLAB"
      },
      {
        "label": "Frameworks & computing",
        "value": "PyTorch · TensorFlow · CUDA · Linux"
      },
      {
        "label": "Vision & simulation",
        "value": "Computer Vision · Blender · Unreal Engine"
      }
    ]
  },
  "footer": {
    "note": "Academic homepage",
    "reference": "Layout inspired by Academic Pages",
    "referenceUrl": "https://github.com/academicpages/academicpages.github.io"
  }
};
