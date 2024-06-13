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

This project entails a comprehensive DICOM image viewer capable of running on both browsers and clients, serving also as a DICOMDIR (CD) Viewer.

It encompasses backend DICOM REST APIs (QIDO-RS, WADO-URI), along with essential features of a self-hosted web server (user control, authentication, RBAC, etc).

## Demo of basic operations:

<video controls class="w-full">
  <source src="/assets/Viewer Basic Operation.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Main Features:

- GET params for HIS call viewer (patient ID, accession Number, studydate range)
- Customizable conditions/results for study querying
- Adaptable and configurable for various screen sizes
- Tree/Grid study overview sidebar (customizable to anchor on any side)
- Drag-n-drop for overview to main grids
- JPEG preview before DICOM loaded
- Series/Image grid layouts
- Series merge
- Memorization of image status in each series layout
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
