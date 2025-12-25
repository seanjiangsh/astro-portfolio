---
title: "Pixi React"
summary: "Interactive Pixi.js + React demos showcasing WebGL effects, Storybook integration, and performance practices."
date: "2025-12-25"
tags: ["Frontend", "Pixi.js", "React", "WebGL", "Graphics", "Storybook"]

demoUrl: https://seanjiangsh.github.io/pixi-react-tutorials
repoUrl: https://github.com/seanjiangsh/pixi-react-tutorials
---

---

# Pixi.js React Tutorials

A collection of interactive visual effects and animations built with **Pixi.js** and **React**, demonstrating the integration of WebGL-powered graphics in modern web applications.

## 🎨 Features

- **Multiple Interactive Scenes**: Switch between different visual demonstrations including:
  - **Hello World**: Interactive sprite animation with pointer tracking and blur effects
  - **Meteor**: Dynamic particle system with customizable path following, blur layers, and GSAP animations
  - **Lightning**: Advanced lightning bolt effects with border animation, travel bolts, and procedural generation
  - **Spotlight**: Spotlight effects with roulette board visualization (DOM & Pixi implementations)
  - **Cap**: Cap animations and visual effects
  - **Multiplier Text**: Animated text with multiplier effects and customizable styling
  - **SVG Parser**: Parse and render SVG files with interactive controls
  - **Grid Board**: Interactive grid-based game board with cell management

- **Dual Rendering Modes**: Many scenes support both Pixi.js (WebGL) and native DOM implementations for experimental of integration between the two.

- **Storybook Integration**: Interactive component documentation with full control customization for key scenes

- **Advanced Graphics Utilities**:
  - Path generation for circles and rounded rectangles
  - Custom equation-based point generation
  - Multi-layer blur effects with Kawase filters
  - HSL-based color transitions for smooth visual effects
  - SVG parsing and conversion to Pixi.js graphics

- **Performance Optimizations**: Comprehensive performance checklist and guidelines for WebGL rendering

- **Developer Tools Integration**:
  - Pixi.js DevTools support for debugging
  - Pixi Stats for real-time performance monitoring
  - Layout management with @pixi/layout

- **Responsive Design**: Automatically adapts to viewport size changes, including mobile virtual keyboard detection

- **Developer Controls**: Interactive Leva controls for real-time parameter adjustments (blur strength, animation speed, layer count, etc.)

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Pixi.js 8** for high-performance 2D WebGL rendering
- **@pixi/react** for declarative Pixi.js components
- **@pixi/devtools** for development debugging
- **@pixi/layout** for layout management
- **GSAP** for advanced animations and easing
- **pixi-filters** for visual effects
- **pixi-stats** for performance monitoring
- **Vite** for fast development and building
- **Leva** for GUI controls
- **Storybook 10** for component documentation and testing
- **Zustand** for state management
- **React Router** for navigation
- **svg-pathdata** for SVG path parsing and manipulation
