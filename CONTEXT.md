# Deccan Herald Home Top — Project Context

## Project

This is a greenfield static prototype for redesigning the Deccan Herald English homepage top section. It uses plain HTML, CSS, and JavaScript.

Typography uses Playfair Display for editorial headings and Roboto Slab for body copy, navigation, metadata, and supporting UI text.

The Prajavani screenshots are used only as layout/ad-behavior references. DH must remain an English-language site with Deccan Herald branding and navigation.

## Current Layout Decisions

### Desktop

- DH teal masthead with English primary navigation.
- Black secondary section/navigation bar.
- Three-column editorial dashboard:
  1. Main hero column.
  2. More News center column.
  3. Premium/ad right rail.
- Hero headline is rendered inside the hero image with a bottom gradient overlay.
- Two standard stories appear below the hero.
- The center More News section shows exactly four visible stories.
- Additional desktop-only story markup exists for rail-height balancing, but stories beyond the four-story cap are hidden.
- Right rail contains a `300 × 250` ad slot followed by Premium content.
- Premium contains exactly three stories: one featured story and two compact stories.
- Desktop columns are stretched to share a bottom baseline, but Premium content must remain natural and clean rather than stretched internally.

### Mobile

- Mobile-first stacked layout.
- Compact DH header with subscribe, account, search, and hamburger controls.
- Horizontally scrollable section navigation.
- Full-screen hamburger/search panel with grouped navigation links.
- Hero story appears first, with headline inside the image.
- Four standard stories appear together in one continuous More News list.
- Ad slot appears between standard and Premium content only when the ad state is enabled.
- Premium stories appear below the ad.
- No artificial equal-height columns or desktop-only whitespace on mobile.

## Ad Behavior

The floating bottom-right switcher has two states:

- `Ad Lite`: hides the ad slot.
- `With Ad`: displays the `300 × 250` ad slot in the desktop right rail.

The ad control must remain floating and must not change the editorial story order.

## Premium Image Rules

Premium images must share a consistent `1.5` aspect ratio:

- Desktop compact images: `120 × 80`.
- Mobile compact images: `96 × 64`.
- Featured Premium image uses the same ratio and `object-fit: cover`.

Premium cards must not be stretched with flex sizing. The section should keep natural content flow.

## Files

- `index.html` — page structure, story content, navigation, ad controls, and menu markup.
- `styles.css` — original prototype styles and legacy layout rules.
- `mobile-fix.css` — final responsive overrides and current authoritative layout corrections.
- `script.js` — ad-state switcher, hamburger menu, and breakpoint-aware standard-story placement.

When changing the layout, prefer updating `mobile-fix.css` for final responsive behavior. Avoid adding additional competing override layers unless necessary.

## Preview

The local static server is currently available at:

`http://127.0.0.1:8002/`

Use a query string such as `?v=20` when previewing after CSS changes to make refreshes obvious.

## Acceptance Checks

- Desktop hero, More News, and Premium/ad rails align visually at the bottom.
- Desktop center rail shows exactly four visible More News stories.
- Mobile shows exactly four standard stories in one sequence.
- Premium shows exactly three stories.
- Hero headline remains inside the hero image at all breakpoints.
- Premium image ratios remain consistent.
- Ad Lite and With Ad states work without changing content order.
- No horizontal overflow or large unexplained whitespace appears on mobile.
