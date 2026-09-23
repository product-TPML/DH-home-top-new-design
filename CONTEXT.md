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
- Premium rail: supplied Premium icon, one featured story with category, headline, subheading, and timestamp, four non-hero stories, and a Premium CTA.

### Mobile

- Stacked layout with the lead hero first and its headline below the image, connected by a dark gradient transition.
- With Ad shows the ad after the hero. Subscribers Lite and Brandspot Lite are ad-free on mobile.
- Four non-hero stories follow in the mobile news sequence, with image and content side by side.
- Premium follows the news content with one hero and two non-hero stories.

## Mode and responsive behavior

The in-flow mode toolbar selects `With Ad`, `Ad Lite for Subscribers`, or `Ad Lite for Brandspot`. Mode state is represented by `body[data-mode]`. CSS owns mode visibility and responsive presentation; `script.js` only updates mode state and accessible menu interactions. Breakpoints are mobile `<=700px`, tablet `701–1050px`, and desktop `>=1051px`.

On desktop, the three modes alter only the middle rail; the main editorial order remains unchanged. On mobile, only With Ad displays the ad after the hero, while both Lite modes are ad-free.

## Image and card rules

- Every editorial story image—hero, first-column non-hero, middle-rail, Brandspot, Premium featured, and Premium compact—uses a responsive displayed 3:2 aspect ratio with `object-fit: cover`.
- This 3:2 contract excludes the supplied `300x250.png` advertisement and Premium branding icons.
- Corner radii are 4px or smaller where the layout requires square editorial edges.
- Premium cards remain clean and content-driven; avoid flex stretching that creates artificial gaps.

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
