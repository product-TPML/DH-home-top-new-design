# Home Top Prototype Cleanup — Implementation Plan

## 1. Goal, non-goals, and decision

**Goal:** Refactor the existing Deccan Herald static homepage-top prototype in place so one semantic content tree supports the three preview modes and mobile/tablet/desktop layouts without duplicated markup, accumulated overrides, runtime story relocation, or measured rail sizing. Preserve DH branding, existing editorial content, and the current visual intent while using the historical baseline as a reference.

**Decision:** Refactor in place first. Do not replace the prototype wholesale. Build and compare a narrow vertical slice (header, lead story, responsive layout, and mode-dependent middle-rail stories/ad) before migrating the remaining content. Use a clean-room rebuild only if this slice cannot reasonably match the responsive invariants and the historical 1440px geometry after a focused correction pass; record the mismatch and reason at the checkpoint before switching approaches.

**Non-goals:** New product content, backend/CMS behavior, new framework/dependencies, production ad delivery, redesigning DH branding, or reproducing every historical pixel when that conflicts with semantic/accessibility improvements. Do not change unrelated project files as part of this implementation.

## 2. Current-state problems (audited)

- `index.html` contains both `.desktop-wireframe` (lines 73–98) and `.news-grid` (lines 100–163), duplicating the lead story, news, and Premium content in separate trees. It also contains four inline `<style>` blocks (lines 12–27), which compete with the two linked stylesheets.
- `styles.css` is minified legacy CSS; `mobile-fix.css` is 3,644 lines of accumulated responsive/desktop/mode overrides. Two cascades plus inline CSS obscure which declarations own behavior.
- `script.js` moves the two support story nodes between trees around the 700px breakpoint (`syncStoryLayout`, lines 2–7), couples ad display to desktop breakpoint state (`syncAdBaseline`, lines 8–9), and sets/observes desktop Premium height using the main rail's measured height (lines 9–13). These are layout responsibilities and make DOM order/state viewport-dependent.
- Current menu handlers in `script.js` only toggle `hidden`/a body class (lines 14–16); they do not update `aria-expanded`, manage focus, or close on Escape. The `.social-links` in `index.html` are spans, not usable links.
- Breakpoints are mobile `<=700px`, tablet `701–1050px`, and desktop `>=1051px`. Keep those boundaries stable.
- `CONTEXT.md` specifies mobile ad placement after the hero and a second ad before Premium only in With Ad mode, while the historical 390px baseline records `.top-ad` hidden. This is an explicit decision gate below, not a license to silently choose one.
- `baseline-desktop.json.md` (in the parent `Home Top` folder) records historical 1440px geometry by mode and 900/390 responsive invariants. It predates the current refactor and is a comparison reference, not absolute truth.
- `brandspot-desktop.png` is visually mobile-width despite its filename. Inspect before using; do not infer responsive artwork from its name.

## 3. Target architecture

- Keep plain `index.html`, CSS, and `script.js`; add no framework, packages, build system, or test framework.
- `index.html`: exactly one semantic content tree and no inline style blocks. Keep the three mode controls and set the selected mode on `<body data-mode="...">`.
- One readable stylesheet is preferred: consolidate the required styles into `styles.css` and remove the `mobile-fix.css` link/file only after its rules have been migrated and verified. A split is acceptable only if there is a real, clear ownership boundary; do not retain a legacy override layer. The end state has one authoritative stylesheet (or an explicitly documented minimal split), no inline style blocks, and no `!important`.
- CSS owns all viewport and mode presentation. Use `data-mode="with-ad|subscribers-lite|brandspot-lite"` selectors and the three agreed media-query bands. Keep source/reading order semantic and stable. Use CSS grid/flex/order only where presentation genuinely requires it; do not duplicate content to obtain layout differences.
- JS only handles preview-mode selection and accessible menu open/close. Mode selection updates `body.dataset.mode`, button active state, and `aria-pressed`; it does not reorder stories or apply layout styles. CSS chooses the mode's middle-rail stories and ad state. Remove resize observers, rail-height measurement, breakpoint-driven ad class hacks, and all runtime node moving.
- Reuse content/assets already in the prototype. Preserve typography intent (Playfair Display headings; Roboto Slab navigation, copy, metadata, and controls), black editorial text, image `object-fit: cover`, approximately 1.5 editorial image ratios, and small editorial corner radii unless baseline/source comparison shows a specific justified exception.

## 4. Viewport/mode behavior matrix

The following is the required implementation target from `CONTEXT.md`; record decisions for the gated mobile details before implementation. “News” count below means editorial news stories, not Premium stories or ads.

| Viewport | With Ad | Subscribers Lite | Brandspot Lite |
|---|---|---|---|
| **390px mobile** | Lead hero first; four non-hero news stories in the mobile sequence; Premium hero plus two compact Premium stories. `CONTEXT.md` requests an ad immediately after the hero and a second ad between standard news and Premium only in this mode. | Same hero, four non-hero news stories, and Premium hero plus two compact stories; no second/between-section ad. Whether the first hero-following ad appears in this mode is unresolved by `CONTEXT.md`; decide at gate. | Same mobile editorial order/count unless the gate decides otherwise. No desktop Brandspot pair is specified for mobile; do not invent a mobile-only content replacement. Resolve ad placements at gate. |
| **900px tablet** | Use one responsive tree in the historical `.news-grid` responsive composition (`.desktop-wireframe` equivalent must not appear). Retain hero/news/Premium content and order. Desktop middle-rail mode counts/ad behavior should not be assumed to apply at tablet; decide if mode variation is needed at gate. | Same baseline tablet composition; mode must remain selectable and must not change editorial order. | Same baseline tablet composition; do not force the desktop side-by-side Brandspot treatment unless confirmed at gate. |
| **1440px desktop** | Three editorial columns: main rail with one hero + two support stories; middle rail with exactly two non-hero stories then the 300×250 ad; Premium rail with one hero + four non-hero stories and CTA. | Main rail unchanged; middle rail has exactly three non-hero stories, no ad; Premium rail unchanged. | Main rail unchanged; middle rail has two Brandspot stories side by side with image/content, no ad; Premium rail unchanged. |

**Decision gate (resolve before implementing ad placement/tablet-specific mode differences):** `CONTEXT.md` asks for an ad immediately after the hero on mobile and a second ad before Premium only in With Ad, but the historical 390px baseline shows `.top-ad: display:none`; it does not establish the intended first-ad creative/slot in the lite modes. Confirm whether With Ad mobile has one ad after hero plus a second before Premium, whether all modes show the first ad, and whether tablet follows desktop or stacked/mobile ad rules. Do not invent extra ad inventory. If no clarification is available, follow the explicit `CONTEXT.md` placement in With Ad, keep other modes ad-free, and document that conservative fallback in the implementation notes. Desktop behavior/counts above are not ambiguous.

At 900px, retain the baseline responsive invariant: desktop-specific composition is absent and the responsive content tree is displayed. At 390px, use a single-column stacked flow and hide desktop-only rail treatment. At 1440px, use the three-column desktop grid. 700/701 and 1050/1051 are exact boundary checks, not extra layout modes.

## 5. Phased implementation and checkpoints

### Phase 0 — Capture and record current state (before structural edits)

- **Files changed:** none. Save evidence outside the source tree in a clearly named run directory (for example, `evidence/current/` if an evidence directory is approved; otherwise use the parent orchestrator's evidence location). Do not create evidence files over source assets.
- Run the existing static preview at `http://127.0.0.1:8002/` with cache-busting query parameters. Capture current screenshots at 390, 700, 701, 900, 1050, 1051, and 1440px, including all three modes at 1440 and relevant mobile states.
- Record browser/viewport, selected mode, console errors, visible story/ad counts, and the current screenshot file paths. Capture before structural changes because the baseline is historical and is not a substitute for current-state evidence.
- **Checkpoint:** preserve this evidence unchanged as comparison input. If current preview cannot be run, record why and proceed only after noting that limitation.

### Phase 1 — Narrow vertical slice (before wholesale replacement)

- **Files changed:** `index.html`, `styles.css`, `mobile-fix.css`, `script.js` only as needed for the slice; do not touch assets. Avoid committing partially migrated files as a finished state.
- Consolidate only the header, lead hero, and middle rail into one semantic tree. Keep a temporary legacy snapshot/checkpoint outside the active page (prefer version-control checkpoint if available; do not leave duplicate active markup in `index.html`). Establish one stylesheet ownership path, the body `data-mode` state, and CSS layout at mobile/tablet/desktop breakpoints. Implement desktop mode-specific two/three/Brandspot story and ad visibility for this slice.
- Remove the slice's dependency on inline styles and any JS story movement/rail measuring. Do not attempt to migrate all editorial/Premium markup until the slice has been previewed at 390, 900, and 1440 in all applicable modes.
- **Completion:** single hero instance in DOM; correct lead-first source order; desktop columns and mode content visible as specified; mobile/tablet responsive invariant holds; no overflow/console error introduced; key 1440 rail coordinates can be reconciled against baseline; screenshots captured for comparison.
- **Checkpoint / fallback criterion:** if a focused CSS correction pass cannot make this slice match the baseline's broad composition and geometry (within reasonable, explained differences) while preserving responsive behavior, stop before migrating the rest. Report exact mismatches and recommend clean-room rebuild. Otherwise continue.

### Phase 2 — Consolidate content tree and semantic boundaries

- **Files changed:** `index.html`, `styles.css` (and `mobile-fix.css` only during migration, then remove its link/file); retain `script.js` behavior only where needed for mode/menu.
- Migrate all content from both current trees into one semantic tree. Establish ordered lead, support stories, More News/middle stories, ad slot(s), Premium section, quote (if retained), header/navigation, and menu. Remove duplicate hidden desktop/mobile content and presentation-only duplicate trees. Preserve story text, categories, timestamps, image alternatives, and current sequence unless the explicit mobile sequence requires a CSS presentation arrangement that leaves source order sensible.
- Implement mode visibility in CSS with no ad/mode-dependent movement of unrelated stories. Keep With Ad from changing the main lead/support order. Use supplied ad artwork in the intended slot(s).
- **Completion:** exactly one instance of each retained story in the DOM; desktop counts/mode behavior match section 4; four non-hero standard stories and one hero + two compact Premium stories appear in the mobile content sequence; no accidental Premium duplication or desktop-only story leakage.
- **Checkpoint:** compare against Phase 0 and baseline; if content reconciliation reveals contradictory editorial identity or count, stop and ask at the decision gate rather than silently dropping/duplicating stories.

### Phase 3 — Replace competing styles and remove layout JS

- **Files changed:** `styles.css`, `mobile-fix.css` (delete after successful migration), `index.html`, `script.js`.
- Reformat the minified legacy rules into the new organized stylesheet. Migrate then delete legacy/competing rules and all four inline style blocks. Delete `mobile-fix.css` after confirming its responsibilities have an explicit home in `styles.css`.
- Remove `syncStoryLayout`, breakpoint listeners used for content placement, `syncAdBaseline`, `syncPremiumHeight`, `ResizeObserver`, resize/load layout handlers, and inline dimension writes. Keep mode selection and menu behavior only.
- **Completion:** one authoritative stylesheet; no `!important`, inline `<style>`, runtime node movement, or Premium rail measurement; resizing around all breakpoints causes no story reparenting, duplication, or geometry jump.
- **Checkpoint / rollback:** keep Phase 0 screenshots and Phase 1 source checkpoint available. If cleanup regresses a verified slice, restore only the affected CSS/markup from the checkpoint and reapply in smaller sections; do not restore the competing stylesheet stack as the final solution.

### Phase 4 — Accessibility, verification, and handoff

- **Files changed:** `index.html`, `script.js`, `styles.css`; evidence only in the agreed evidence location.
- Complete menu keyboard/focus behavior, actual social link destinations or remove decorative social controls, mode button states, and visible keyboard focus. Run the verification checklist in section 9 and record evidence paths/results.
- **Completion:** definition-of-done checklist is satisfied and parent orchestrator has reviewed document/source/baseline comparisons.

## 6. Content inventory and proposed semantic boundaries

- **Site header:** masthead/logo, primary navigation, action buttons, section navigation, social links; use `<header>`, labeled `<nav>` landmarks, real buttons/anchors.
- **Menu/search panel:** labeled dialog-like disclosure region (use dialog semantics only if implemented as modal); search form/control, menu navigation groups, close button, and actions. Keep it outside the story tree and associate the trigger with the panel.
- **Main editorial region:** `<main>` containing one lead `<article>` (one hero image, category, heading, subheading, metadata), two support `<article>` cards, then More News cards. Use semantic heading levels once (one page h1; section h2; card headings below).
- **Mode-dependent middle rail:** one More News section with two standard cards, one subscriber-only third card, and two Brandspot cards; one ad slot creative for each confirmed placement. Use specific classes such as `.more-news`, `.news-card`, `.news-card--brandspot`, `.ad-slot`, and a restrained visibility modifier, not parallel desktop/mobile names.
- **Premium:** one `<section>` with heading/icon, featured `<article>`, four desktop compact story articles. Mobile CSS exposes the specified hero + two compact sequence; any remaining desktop-only Premium stories must remain single DOM instances and their intended mobile visibility must be confirmed against CONTEXT/source before hiding. CTA is a real link.
- **Quote card:** retain only if part of intended product content; otherwise remove as unrelated prototype content with orchestrator approval. Avoid treating it as a story-count item.
- **Reusable class boundaries:** `.site-header`, `.masthead`, `.primary-nav`, `.section-nav`, `.site-menu`, `.page-shell`, `.home-grid`, `.lead-story`, `.story-card`, `.story-meta`, `.more-news`, `.ad-slot`, `.premium-section`, `.premium-feature`, `.premium-list`, `.premium-story`, `.mode-toolbar`, `.quote-card`. These are CSS/markup conventions, not JS component abstractions.

### Assets to retain

- `300x250.png` — existing 300×250 ad creative; keep dimensions/aspect and use only in the confirmed ad slot(s).
- `premium-icon.png` and `premium-icon.svg` — preserve both supplied Premium assets; use the existing PNG where its appearance matches the current desktop header, and inspect SVG before deciding whether it serves another presentation. Do not remove either without confirming unused status.
- `brandspot-desktop.png` (in the parent `Home Top` folder) — retain and inspect actual dimensions/appearance; despite the filename it is visually mobile-width, so do not stretch it as desktop artwork or assume filename indicates intended mode. Use only if the current content/design actually references it.
- Preserve the existing editorial image URLs and useful alt text already present in `index.html`; do not replace them with speculative new assets.

## 7. CSS organization, order, and tokens

Organize the authoritative stylesheet in this order so later rules do not become another override pile:

1. Short reset/base (box sizing, body margin, image/link defaults, focus-visible baseline).
2. Tokens: colors (DH teal, editorial black/white, accent, borders), content/max widths and gutters, spacing, type families/sizes, border radius, and header/rail dimensions only where needed. Keep values tied to observed current appearance/baseline rather than inventing a design system.
3. Shared primitives: shell, navigation, buttons, story metadata, image frames, ad label/creative, Premium mark.
4. Semantic component rules in page order: header/menu, lead/support, More News/mode variants, Premium, toolbar/quote.
5. Responsive rules, in ascending order and once conceptually: `@media (max-width: 700px)`, `@media (min-width: 701px) and (max-width: 1050px)`, `@media (min-width: 1051px)`. Avoid overlapping duplicate declarations for the same range; shared base styles should carry across ranges.
6. Mode modifiers grouped together (or mode selectors within their component section), with no repeated scattered mode overrides. Use `body[data-mode="with-ad"]`, `body[data-mode="subscribers-lite"]`, and `body[data-mode="brandspot-lite"]` selectors.

Define breakpoints once conceptually with the exact thresholds above. CSS custom properties may hold recurring visual tokens; do not add JS breakpoint constants. No `!important`. Keep rules readable and specific enough that mode behavior is apparent from selector names.

## 8. JS and accessibility requirements

- Mode buttons are native buttons. On click, set `body.dataset.mode`, synchronize active styling and `aria-pressed`, and leave DOM order unchanged. Default page mode remains explicit in HTML.
- Menu trigger exposes `aria-expanded="false|true"` and `aria-controls` pointing to the panel. Opening updates state and moves focus into the menu (close control or search field); closing by close button, trigger, or Escape restores focus to the element that opened it. Escape closes an open menu. If search opens the same panel, return focus to the search trigger.
- Keep all actions keyboard-operable; provide visible `:focus-visible` styling and logical tab order. Do not trap focus unless the panel is deliberately implemented as a modal dialog; if modal, provide complete focus containment and restoration.
- Preserve accessible names for icon-only buttons and useful image alt text; decorative icons use empty alt/hidden semantics. Ensure menu hidden state also removes its contents from keyboard navigation/accessibility tree (native `hidden` is acceptable).
- Social controls must be actual links with verified destinations; if destinations are not available, remove them rather than showing nonfunctional `<span>` faux-links. Keep labels/aria only when they describe real controls.
- No event handlers for layout, no DOM reparenting, `ResizeObserver`, `getBoundingClientRect`, or runtime element-height writes.

## 9. Verification evidence and acceptance

**Evidence path:** save current screenshots before edits and final screenshots under an agreed evidence folder outside the source file set; report exact paths. Use consistent browser, zoom, viewport dimensions, and mode naming in filenames, e.g. `current/390-subscribers-lite.png` and `final/1440-with-ad.png`. Do not overwrite current captures.

**Required viewport coverage:** screenshots at **390, 700, 701, 900, 1050, 1051, and 1440px**. Capture all three modes at 1440px; capture 390px With Ad and lite modes as determined by the decision gate; at minimum capture 390px subscribers-lite and With Ad. At 700/701 and 1050/1051, verify the exact side of each breakpoint. Include 900px tablet and 390px mobile responsive behavior. At 900px, mode screenshots are needed only if mode behavior is confirmed to differ there; otherwise capture the default and note the gate decision.

**Check and record:**

- Browser console has no errors or new failed asset loads.
- No horizontal overflow at each required width (inspect document scroll width against viewport width).
- Story/ad inventory and sequence at 1440 in every mode: lead hero + two supports unchanged; middle rail With Ad = 2 stories + 1 ad, Subscribers Lite = 3 stories + no ad, Brandspot Lite = 2 side-by-side stories + no ad; Premium = 1 hero + 4 non-hero stories and CTA.
- Mobile content order/count agrees with the decision gate: lead hero, required ad placement(s), four non-hero standard stories, optional With Ad second ad between standard/Premium content, then Premium hero + two compact stories. Record ad count separately from story count.
- At 900 and 390, responsive composition matches the established invariant: desktop-specific duplicate tree/composition is absent; tablet uses responsive grid; mobile stacks. Check 700/701 and 1050/1051 transitions for clipping, gaps, and content order.
- Keyboard-check mode buttons (Tab, Enter/Space, correct pressed state); menu trigger and search entry; focus entry and return; Escape close; close button; visible focus throughout. Verify social links navigate to actual destinations or that fake controls were removed.
- Compare computed layout and screenshots with `baseline-desktop.json.md`: use 1440px per-mode geometry as historical reference, especially three column x/width, hero, middle rail/ad, Premium heading/feature/list/CTA and counts. Compare 390/900 responsive invariants. Explain intentional differences (single-tree semantics, corrected spacing, responsive ad resolution) rather than chasing historical errors blindly. Historical values are not absolute truth.

**Acceptance criteria:** all three desktop modes have specified counts and no mode changes the lead/support order; one semantic instance per retained story; no duplicate content trees or inline styles; one authoritative stylesheet and no `!important`; CSS owns breakpoints/mode layout; no runtime node movement or rail measurement; keyboard/menu requirements pass; no console errors/horizontal overflow; screenshots and a concise comparison record exist for the required widths/modes.

**Validation ownership:** the parent orchestrator reviews this plan against source and baselines and owns acceptance of the implementation evidence. The implementing agent captures/runs checks and reports exact outcomes; do not claim baseline agreement without recorded screenshot/computed-style comparison.

## 10. Definition of done, risks, checklist

### Definition of done

- [ ] Current screenshots captured before structural changes and preserved.
- [ ] Mobile ad/tablet mode decision gate resolved or conservative fallback explicitly recorded.
- [ ] Narrow vertical slice completed and compared before wholesale content migration; fallback criterion considered and documented.
- [ ] One semantic content tree; desktop counts/mode matrix and agreed mobile sequence pass.
- [ ] Inline style blocks and duplicate content tree removed; one organized stylesheet; legacy `mobile-fix.css` no longer linked/needed; no `!important`.
- [ ] CSS owns responsive/mode layout; JS only mode control and accessible menu; no runtime moving/measuring.
- [ ] Keyboard/accessibility checks pass; social UI consists only of working links or is removed.
- [ ] Screenshots at required widths/modes, console/overflow/count/order evidence, and baseline comparison are recorded.
- [ ] Parent orchestrator reviews the document and implementation evidence.

### Known risks

- The mobile ad wording and historical 390px hidden-ad baseline conflict; resolve at the gate before coding ad slots.
- CONTEXT describes four mobile standard non-hero stories, while current desktop tree includes additional desktop-only stories and the duplicated responsive tree includes a different story set. Reconcile unique story identities/order during migration; do not count or silently drop duplicated content as if it were unique.
- CONTEXT requests four desktop non-hero Premium stories but only two compact stories in the current responsive tree; keep all four for desktop and explicitly limit mobile presentation to the stated two only after confirming they are the intended mobile subset.
- The legacy stylesheet cascade may encode visual intent not obvious from selector names. Phase 0 screenshots and narrow slice are mandatory before deleting it.
- Remote Unsplash and Google Fonts assets depend on network availability; distinguish network failures from local layout regressions in evidence.
- `brandspot-desktop.png` filename misstates its visual width; inspect before assigning it a role.

### Compact implementation checklist

1. Capture current screenshots at all seven widths and record current behavior.
2. Resolve mobile ad/tablet mode gate.
3. Implement and compare header + hero + middle-rail vertical slice.
4. Migrate all editorial/Premium content into one semantic tree and reconcile counts/order.
5. Consolidate styles, delete legacy overrides, inline style blocks, duplicate trees, and layout JS.
6. Complete accessible menu/mode/social behavior.
7. Run required viewport/mode, console, overflow, count/order, keyboard, and baseline-reference checks; save evidence and hand off to parent orchestrator.
