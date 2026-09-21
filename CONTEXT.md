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
   - Two supporting stories beneath the hero.
2. Middle rail:
   - Two More News stories.
   - A fixed 300 × 250 slot at the bottom in With Ad mode.
   - Two compact replacement stories occupying the same bottom slot in Ad Lite mode.
3. Premium rail:
   - Premium header with the supplied premium icon PNG.
   - One featured Premium story.
   - Four compact Premium stories.
   - Premium CTA anchored inside the bottom of the Premium rail.
   - In the desktop With Ad view, the Premium rail keeps the shared rail height;
     the featured-story timestamp has an explicit 18px separation before the
     first compact-story separator, and every compact story has 16px from its
     separator to its image.

The desktop rails share the same top and bottom geometry. The wide desktop layout is bounded to fit a 1920 × 1080 first viewport using compact spacing, while shorter desktop screens fall back to natural page flow rather than clipping content.

The legacy `.news-grid` remains the mobile source structure and is hidden on desktop. Desktop-specific corrections belong in `mobile-fix.css`, whose later rules are authoritative.

### Mobile

- Mobile-first stacked layout.
- Compact DH masthead with Subscribe, account, search, and hamburger controls.
- Horizontally scrollable section navigation.
- Full-screen hamburger/search panel with grouped navigation links.
- Hero story appears first with the headline integrated into the image treatment.
- Four standard stories appear in the mobile sequence: two below the hero and two in More News.
- The ad appears between standard content and Premium content only in With Ad mode.
- Premium content follows the ad or its reserved Ad Lite replacement area.
- No artificial equal-height desktop columns or unexplained mobile whitespace.

## Ad Behavior

The floating bottom-right mode switcher has two states:

- `Ad Lite`: hides the ad and displays two compact replacement stories in the reserved desktop bottom slot.
- `With Ad`: displays `300x250.png` in the reserved desktop bottom slot.

The ad state must not change editorial story order. On desktop, the slot is outside the More News story content and remains aligned to the shared bottom edge. On mobile, the ad is part of the normal stacked flow.

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

## Acceptance Checks

- At 1920 × 1080, the desktop header and complete three-column editorial block fit in the first viewport.
- Main, middle, Premium, and ad/Ad Lite rails align at the top and bottom on wide desktop screens.
- The middle rail shows exactly two More News stories plus its mode-specific bottom slot.
- Premium shows one featured story and four compact stories.
- Mobile remains a stacked layout with four standard stories and no horizontal overflow.
- Hero headline remains integrated into the hero image treatment.
- Category labels and timestamps use the established typography scale.
- Premium image ratios remain consistent.
- Ad Lite and With Ad switch without changing editorial story order.
- Shorter desktop viewports flow naturally instead of clipping stories.
- No large unexplained whitespace appears inside the editorial rails.
