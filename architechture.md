# Architecture

This is a static HTML/CSS/JavaScript homepage prototype.

- `index.html` owns page structure, story content, and the three preview modes.
- `mobile-fix.css` contains the authoritative responsive layout and desktop mode matrix.
- `script.js` switches preview modes, applies the desktop With Ad baseline to Lite modes, and synchronizes rail heights.
- Desktop mode differences are isolated to the middle rail: story visibility, ad visibility, Brandspot card layout, and middle-rail dividers.
- Tablet and mobile layouts use the existing responsive `news-grid` and are not affected by desktop-only mode rules.
