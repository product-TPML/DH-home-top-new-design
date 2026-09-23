# Deccan Herald Home Top — Project Context

## Project

This is a static prototype for the English-language Deccan Herald homepage top section, implemented with plain HTML, CSS, and JavaScript. Prajavani screenshots were used only as references for responsive composition and ad behavior; DH branding, English navigation, and DH-specific content remain the source of truth.

Typography intent:

- Playfair Display for editorial headings.
- Roboto Slab for body copy, navigation, categories, metadata, and controls.
- Text is black unless it is part of the DH masthead, Premium header, or another intentional colored UI element.

## Content and layout

`index.html` contains one semantic content tree used at every viewport. CSS presents it as a three-column editorial layout on desktop and a responsive grid/stack on tablet and mobile. Story content and order do not change through DOM movement.

### Desktop

- Main story column: one hero story with a 3:2 image and a dark gradient transition into the category, headline, subheading, and timestamp below the image; two non-hero stories with headline, category, and timestamp.
- Middle rail stories contain an image, headline, category, and timestamp. With Ad shows two regular stories followed by the 300 × 250 ad; Subscribers Lite shows three regular stories and no ad; Brandspot Lite shows the first two regular stories followed by two smaller image-left Brandspot stories, stacked one below the other, and no ad.
- Premium rail: supplied Premium icon, one featured story with a 3:2 image and copy below on a dark Premium-burgundy surface connected to the image by a gradient, five non-hero stories as horizontal compact cards with image left and text right, and a Premium CTA with a 3px radius. Every Premium article headline starts with the supplied Nandi badge (`premium-icon.png`), sized to one text line; wrapped lines start flush at the heading edge below it. Desktop compact thumbnails are 3:2 and at least 40% of their card width.
- On desktop, the middle and Premium rails stretch with CSS to the main-column height when content fits, and the Premium CTA is anchored at the bottom. If content needs more room, the grid may grow rather than clip.

### Mobile

- Stacked layout with the lead hero first and its headline below the image, connected by a dark gradient transition.
- With Ad shows one ad after the hero and a second after the four standard non-hero stories, immediately before Premium. Subscribers Lite and Brandspot Lite are ad-free on mobile.
- Four non-hero stories follow in the mobile news sequence, with image and content side by side; With Ad places its second ad after these stories and immediately before Premium.
- Premium follows the news content with one hero and two non-hero stories. Its hero uses the dark burgundy copy surface and 3:2 image-to-copy gradient treatment; the compact stories retain the mobile horizontal layout. The mobile Premium panel has a 4px radius.

## Mode and responsive behavior

The in-flow mode toolbar selects `With Ad`, `Ad Lite for Subscribers`, or `Ad Lite for Brandspot`. Mode state is represented by `body[data-mode]`. CSS owns mode visibility and responsive presentation; `script.js` only updates mode state and accessible menu interactions. Breakpoints are mobile `<=700px`, tablet `701–1050px`, and desktop `>=1051px`.

On desktop, the three modes alter only the middle rail; the main editorial order remains unchanged. On mobile, With Ad displays an ad after the hero and a second ad after the four standard stories, immediately before Premium; both Lite modes are ad-free.

## Image and card rules

- Every editorial story image—hero, first-column non-hero, middle-rail, Brandspot, Premium featured, and Premium compact—uses a responsive displayed 3:2 aspect ratio with `object-fit: cover`.
- In mobile side-by-side image-and-text story cards (main support, middle/news, Brandspot, and Premium compact), the image occupies at least 40% of the card width.
- This 3:2 contract excludes the supplied `300x250.png` advertisement and Premium branding icons.
- Corner radii are 4px or smaller where the layout requires square editorial edges.
- Desktop Premium layout uses the featured image/copy treatment and five horizontal image-left non-hero cards described above. Mobile and tablet continue to show the featured story and two compact stories. The Premium CTA has a 3px radius; the rail/grid may grow rather than clip content.

## Files and assets

- `index.html` — semantic page structure, story content, navigation, mode controls, and menu markup.
- `styles.css` — sole stylesheet for shared, responsive, and mode-specific presentation.
- `script.js` — preview-mode state and accessible menu interactions; no story reparenting or layout measurement.
- `300x250.png` — supplied advertisement creative.
- `premium-icon.png` and `premium-icon.svg` — supplied Premium branding assets.
- Existing editorial imagery is referenced by `index.html`.

## Preview

The local static server is available at:

`http://127.0.0.1:8002/`

Use a cache-busting query string when previewing CSS or HTML changes.
