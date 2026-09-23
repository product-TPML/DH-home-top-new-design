# Architecture

This is a static HTML/CSS/JavaScript homepage prototype.

- `index.html` contains one semantic content tree for all viewports, story content, navigation, menu, and preview-mode controls.
- `styles.css` is the sole stylesheet. It owns responsive layout at `<=700px`, `701–1050px`, and `>=1051px`, as well as `body[data-mode]` presentation.
- `script.js` updates preview-mode state and accessible menu interactions, including `aria-expanded`, focus entry/return, and Escape handling. It does not reparent story nodes, measure layout, use `ResizeObserver`, or respond to breakpoints.
- Desktop middle-rail modes show two regular stories plus an ad (With Ad), three regular stories without an ad (Subscribers Lite), or two regular stories followed by two compact, image-left Brandspot stories without an ad (Brandspot Lite).
- The middle rail has no visible section heading. Neutral grey dividers separate its stories, and a continuous grey divider spans the first-column support-story pair; Premium story dividers remain gold.
- On mobile, only With Ad shows the ad after the hero; both Lite modes are ad-free.
- All editorial story images display at 3:2 with `object-fit: cover`; ad creative and branding icons retain their own proportions. The Perspective quote card is not part of the page.
- The lead hero keeps its 3:2 photo in a separate frame; its copy follows below on a dark surface connected to the photo by a gradient.
- Retained assets include `300x250.png`, `premium-icon.png`, `premium-icon.svg`, and the existing editorial imagery referenced by `index.html`.
