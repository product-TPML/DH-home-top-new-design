# Architecture

This is a static HTML/CSS/JavaScript homepage prototype.

- `index.html` contains one semantic content tree for all viewports, story content, navigation, menu, and preview-mode controls.
- `styles.css` is the sole stylesheet. It owns responsive layout at `<=700px`, `701–1050px`, and `>=1051px`, as well as `body[data-mode]` presentation.
- `script.js` updates preview-mode state and accessible menu interactions, including `aria-expanded`, focus entry/return, and Escape handling. It does not reparent story nodes, measure layout, use `ResizeObserver`, or respond to breakpoints.
- Desktop middle-rail modes show two regular stories plus an ad (With Ad), three regular stories without an ad (Subscribers Lite), or two regular stories followed by two compact, image-left Brandspot stories without an ad (Brandspot Lite).
- The Premium featured story has a 3:2 image with copy below on a dark Premium-burgundy surface connected by a gradient on desktop and mobile. Desktop shows five non-hero stories as horizontal compact image-left/text-right cards; thumbnails are 3:2 and at least 40% of card width. The Premium CTA has a 3px radius. Mobile and tablet show two compact stories in their responsive layout; the mobile Premium panel has a 4px radius.
- The middle rail has no visible section heading. Grey separators are centered within flex-distributed gaps: With Ad has one between its stories and one between the second story and ad; Subscribers Lite has two between its three stories; Brandspot Lite has three between its four stories. A continuous grey divider spans the first-column support-story pair; Premium story dividers remain gold. The Premium desktop header is clipped to the panel's rounded top corners.
- At desktop widths, CSS stretches the middle and Premium rails to the main-column height when content fits, with the Premium CTA anchored at the bottom. The grid may grow rather than clip content. Mobile and tablet Premium layouts remain unchanged.
- On mobile, With Ad shows one ad after the hero and a second after the four standard stories, immediately before Premium. Both Lite modes are ad-free.
- All editorial story images display at 3:2 with `object-fit: cover`; ad creative and branding icons retain their own proportions. The Perspective quote card is not part of the page.
- Mobile side-by-side image-and-text cards for main support, middle/news, Brandspot, and Premium compact stories allocate at least 40% of card width to the image.
- The lead hero keeps its 3:2 photo in a separate frame; its copy follows below on a dark surface connected to the photo by a gradient.
- Retained assets include `300x250.png`, `premium-icon.png`, `premium-icon.svg`, and the existing editorial imagery referenced by `index.html`.
