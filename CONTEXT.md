# Deccan Herald Home Top — Project Context

## Project

This is a greenfield static prototype for the English-language Deccan Herald homepage top section. It uses plain HTML, CSS, and JavaScript.

Prajavani screenshots were used only as references for responsive composition and ad behavior. DH branding, English navigation, and DH-specific content remain the source of truth.

Typography:

- Playfair Display for editorial headings.
- Roboto Slab for body copy, navigation, categories, metadata, and controls.
- Text is black unless it is part of the DH masthead, Premium header, or another intentional colored UI element.

## Current Layout

### Desktop

The desktop view uses an explicit three-column editorial dashboard in `.desktop-wireframe`:

1. Main story column:
   - One hero story with category, headline, subheading, and timestamp integrated into the lower image gradient.
   - Two non hero stories stories beneath the hero.it should contain headline, category label and timestamp.
2. Middle rail:
   - Middle-rail stories contain only an image, headline, category label, and timestamp.
   - With Ad: two non-hero stories, followed by a 300 × 250 ad slot beneath them.
   - Ad Lite for Subscribers: no ad; show three non-hero stories, with the added story using the same layout as the other two.
   - Ad Lite for Brandspot: no ad; show two brand stories side by side, each with an image and its story content.
3. Premium rail:
   - Premium header with the supplied premium icon PNG.
   - One hero Premium story with category, headline with premium icon at the satrting, subheading, and timestamp integrated into the lower image gradient.
   - Four non hero Premium stories, it should contain  image, headline with premium icon at the statrting, category label, and timestamp.
   - Premium CTA anchored inside the bottom of the Premium rail.


### Mobile

- Mobile-first stacked layout.
- Hero story appears first with the headline integrated into the image treatment same set of details as desktop.
- add the ad slot right after the hero story
- Four non hero stories appear in the mobile sequence with side by side image and content (content is same as desktop)
- The second ad appears between standard content and Premium content only in With Ad mode.
- Premium content follows with one hero story plus 2 non hero stories.
## Ad Behavior

The floating bottom-right mode switcher supports three desktop middle-rail scenarios:

- `With Ad`: displays two non-hero stories, then `300x250.png` beneath them.
- `Ad Lite for Subscribers`: hides the ad and displays a third non-hero story in the same layout as the other two.
- `Ad Lite for Brandspot`: hides the ad and displays two brand stories side by side, with image and story content for each.

Every middle-rail story displays only its image, headline, category label, and timestamp. The ad state must not change the main editorial story order. On mobile, the ad is part of the normal stacked flow.

## Image and Card Rules

- News and Premium images use consistent `1.5`-style editorial aspect ratios with `object-fit: cover` where appropriate.
- Premium compact images are 110 × 73 desktop-style thumbnails in the compact viewport layer and 96 × 64 on mobile.
- Premium featured imagery uses the same consistent ratio as other Premium imagery.
- Corner radii are 4px or smaller where the final layout requires square editorial edges.
- Premium cards must remain clean and content-driven; avoid flex stretching that creates artificial gaps.

## Files

- `index.html` — page structure, story content, navigation, ad controls, menu markup, and explicit desktop wireframe.
- `styles.css` — original prototype styles and legacy layout rules.
- `mobile-fix.css` — authoritative responsive overrides, desktop geometry, typography, Premium styling, and viewport-fit rules.
- `script.js` — ad-state switcher, hamburger menu, and breakpoint-aware story placement.
- `300x250.png` — supplied advertisement creative.
- `premium-icon.png` / `premium-icon.svg` — Premium branding assets; the PNG is used by the current desktop Premium header.

When changing the layout, prefer updating the final responsive rules in `mobile-fix.css`. Avoid creating another competing stylesheet layer unless the change cannot be expressed in the existing responsive overrides.

## Preview and Git

The local static server is available at:

`http://127.0.0.1:8002/`

Use a cache-busting query string such as `?v=58` when previewing CSS or HTML changes.

The project is now a local Git repository. The initial layout commit is:

`ab6912c Implement responsive DH homepage layout`


