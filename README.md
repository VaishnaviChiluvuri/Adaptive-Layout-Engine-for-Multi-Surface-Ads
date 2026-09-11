# Adaptive Layout Engine for Multi-Surface Ads

A frontend R&D project that automatically adapts a single advertisement creative to different digital surfaces such as **Mobile, Tablet, Desktop, and Banner** formats.

The project demonstrates how a reusable layout engine can dynamically modify layout direction, typography, spacing, image dimensions, alignment, and CTA sizing based on the target surface.

## Project Overview

Creating advertisements for multiple digital surfaces often requires designing separate versions for different screen sizes.

This project addresses that problem by using a lightweight **Adaptive Layout Engine**.

Instead of manually creating a separate advertisement for every surface, the same advertisement data is passed to the layout engine. The engine determines the appropriate layout rules and renders an optimized version of the advertisement.

### Core Flow

```text
Advertisement Input
        ↓
Surface Selection
        ↓
Adaptive Layout Engine
        ↓
Layout Rules
        ↓
Typography + Spacing + Positioning
        ↓
Live Advertisement Preview
```

## Features

* Live advertisement editor
* Mobile layout
* Tablet layout
* Desktop layout
* Banner layout
* Dynamic typography adjustment
* Dynamic image sizing and positioning
* Dynamic content alignment
* Adaptive CTA sizing
* Real-time preview
* Advertisement image upload
* Reset functionality
* Responsive user interface

## Supported Surfaces

### Mobile

The engine applies a vertical layout optimized for smaller screens.

* Vertical content arrangement
* Image positioned above content
* Smaller typography
* Full-width CTA
* Reduced spacing

### Tablet

The engine uses a balanced two-column layout.

* Horizontal arrangement
* Medium typography
* Image and content displayed side-by-side
* Balanced spacing

### Desktop

The engine provides a larger layout for wide screens.

* Horizontal arrangement
* Large headline typography
* Increased spacing
* Larger advertisement image
* Content and image displayed side-by-side

### Banner

The engine uses a compact horizontal layout suitable for banner advertisements.

* Compact dimensions
* Smaller typography
* Reduced spacing
* Horizontal content arrangement
* Compact CTA

## Architecture

The application is divided into three major parts:

```text
┌──────────────────────┐
│   Advertisement      │
│       Editor         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Surface Selector    │
│                      │
│ Mobile / Tablet /    │
│ Desktop / Banner     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Adaptive Layout     │
│       Engine         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Layout Rules      │
│                      │
│ Typography           │
│ Spacing              │
│ Image Size           │
│ Positioning           │
│ CTA Size             │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     Live Preview     │
└──────────────────────┘
```

## Adaptive Layout Engine

The main logic is implemented in:

```text
src/engine/layoutEngine.js
```

The engine receives the selected surface and returns a set of layout rules.

For example:

```javascript
calculateLayout("mobile", ad)
```

returns rules optimized for a mobile surface, while:

```javascript
calculateLayout("desktop", ad)
```

returns rules optimized for a desktop surface.

The returned rules control:

* Layout direction
* Width and height
* Padding
* Gap
* Image dimensions
* Image order
* Content alignment
* Font size
* Line height
* CTA dimensions

This allows the same advertisement content to be reused across multiple surfaces.

## Technology Stack

* **React**
* **JavaScript**
* **Vite**
* **HTML5**
* **CSS3**

No backend or database is required for the current implementation.

## Project Structure

```text
adaptive-layout-engine/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── AdEditor.jsx
│   │   ├── AdPreview.jsx
│   │   ├── Header.jsx
│   │   └── SurfaceSelector.jsx
│   │
│   ├── engine/
│   │   └── layoutEngine.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd adaptive-layout-engine
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## How to Use

1. Open the application.
2. Enter the advertisement brand name.
3. Enter a headline.
4. Add a description.
5. Enter a CTA.
6. Upload an advertisement image.
7. Select a target surface.
8. Observe the layout automatically adapting in the live preview.

For example:

```text
Desktop
   ↓
Large typography
   ↓
Horizontal layout
   ↓
Large image
```

Changing the surface to:

```text
Mobile
```

causes the engine to automatically apply:

```text
Smaller typography
   ↓
Vertical layout
   ↓
Image above content
   ↓
Full-width CTA
```

## Design Approach

The project follows a **configuration-driven layout approach**.

Instead of duplicating advertisement components for each device, the application keeps the advertisement content independent from the layout.

```text
Advertisement Data
       +
Target Surface
       ↓
Layout Engine
       ↓
Surface-specific Layout Configuration
```

This makes the system easier to extend with additional surfaces and layout strategies.

## Future Improvements

Possible improvements include:

* Custom width and height input
* Automatic surface detection
* Auto-fit layout mode
* Drag-and-drop positioning
* Multiple advertisement templates
* Export advertisement as PNG
* Accessibility scoring
* Persistent advertisement templates
* A/B testing support
* AI-assisted layout optimization
* Additional advertising formats

## Limitations

The current version uses predefined layout rules for each supported surface.

The layout engine is intentionally lightweight and focuses on demonstrating the core adaptive layout concept rather than implementing a full production advertising platform.

**Project Link:**
https://github.com/VaishnaviChiluvuri/Adaptive-Layout-Engine-for-Multi-Surface-Ads

## Author

**Chiluvuri Sai Sri Vaishnavi**

B.Tech Computer Science and Engineering
Specialization: Artificial Intelligence and Machine Learning
