---
title: "React DICOM Viewer"
summary: "DICOM image (web/client CD) viewer"

date: "Jan 8 2024"
draft: false
tags:
  - Work product
  - DICOM
  - Fullstack
  - React
  - Node.js
  - Postgres
---

---

💼 This is a product I'm developing in my current role 💼

📈 Continuously evolving project 📈

---

## Description:

This project entails a comprehensive DICOM image viewer capable of running on both browsers as DICOM web viewer or clients as a DICOMDIR (CD) viewer.

It encompasses backend DICOM REST APIs (QIDO-RS, WADO-URI), along with essential features of a self-hosted web server (user control, authentication, RBAC, etc).

## Demo of basic operations:

<div style="position: relative; overflow: hidden; padding-top: 56.25%; width: 100%;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/W9wGj2S6sxI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Main Features:

- GET params for HIS call viewer (patient ID, accession number, study date range)
- Customizable conditions/results for study querying
- Adaptable and configurable for various screen sizes
- Tree/Grid study overview sidebar (customizable to anchor on any side)
- Drag-n-drop from overview to main grids
- JPEG preview before DICOM loaded
- Series/Image grid layouts
- Series merge
- Memorization and restoration of image status of series grids
- Basic imaging tools (W/L, Pan, Zoom, etc)
- Annotation tools (Length, Angle, EllipticalROI, etc)
- Text/Graphic overlay
- Grid, layout, tools are customizable via modalities
- Concurrent user limits
- Study share via QR codes
- Image download (DICOM, JPEG, MP4, PDF)
- Reference lines
- Image auto link
- ...and much more
