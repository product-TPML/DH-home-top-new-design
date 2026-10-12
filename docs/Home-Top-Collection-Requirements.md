# Home Top Collection Requirements (DH & PV)

_Date: 12 Oct 2026 · Audience: Tech team · Scope: Deccan Herald (DH) and Prajavani (PV) home page top section_

## 1. Summary

The Home Top section on DH and PV is driven by a single **Home Top collection**, which is a **collection of collections**. Each visible group (Top Stories, Brandspot, Premium, etc.) is its own CMS collection that the desk curates independently. The Home Top collection only decides which groups appear and points to them.

DH and PV each have their own Home Top collection and their own group collections. Nothing is shared between the two brands. The two brands also differ in groups, variations, story counts per device and functionality (sections 3 to 5).

## 2. Structure

```
Home Top (DH)                       Home Top (PV)
├── Top Stories                     ├── Lead
├── Brandspot                       ├── ಇನ್ನಷ್ಟು ಓದಿ (More News)
└── DH Premium                      ├── ಸುಭಾಷಿತ (Subhashita)
                                    └── ಪ್ರಜಾವಾಣಿ ಪ್ರೀಮಿಯಂ (PV Premium)
```

- Home Top contains only group collections, never stories directly.
- Each group collection contains only stories (for Subhashita, the quote item).
- Each group maps to a fixed position in the design. The position is decided by the design, not by the order of groups inside the Home Top collection.
- The order of stories inside a group is the order readers see. The first story takes the most prominent slot.

## 3. Reader variations

The reader sees a different version of Home Top depending on who they are. Subscribers never see ads. Non-subscribers see an ad on both brands, except on DH when Brandspot is running, where they see Brandspot stories instead of the ad. The variation changes ad slots and story counts.

| Brand | Variation | Who sees it | Ads | Other differences |
| --- | --- | --- | --- | --- |
| DH | With Ad | Non-subscribers | Yes | Default version |
| DH | Subscribers | Subscribers | No | Freed ad space is given to one more Top Stories story |
| DH | Brandspot | Non-subscribers | No | Instead of the ad, two sponsored Brandspot stories are shown |
| PV | With Ad | Non-subscribers | Yes | Default version |
| PV | Subscribers | Subscribers | No | Freed ad space is given to more Premium stories |

PV has no Brandspot variation.

## 4. Story counts per group

Each variation lists what the reader sees, in position order. Tablet (701 to 1023 px) follows mobile unless stated.

### 4.1 Deccan Herald

The hero has no Story Section; every other story shows one. Premium always has a heading, the Premium badge on each headline and the "Explore all premium stories" call-to-action.

**With Ad, desktop** (three columns)

- Left column, top to bottom:
  1. Hero story
  2. Non-hero story 1
  3. Non-hero story 2
- Middle column, top to bottom:
  1. Non-hero story 3
  2. Non-hero story 4
  3. Ad
- Right column (Premium), top to bottom:
  1. Premium heading
  2. Premium hero story
  3. 5 Premium non-hero stories
  4. Premium call-to-action

**Subscribers, desktop** (three columns)

- Left column, top to bottom:
  1. Hero story
  2. Non-hero story 1
  3. Non-hero story 2
- Middle column, top to bottom (no ad):
  1. Non-hero story 3
  2. Non-hero story 4
  3. Non-hero story 5
- Right column (Premium), top to bottom:
  1. Premium heading
  2. Premium hero story
  3. 5 Premium non-hero stories
  4. Premium call-to-action

**Brandspot, desktop** (three columns)

- Left column, top to bottom:
  1. Hero story
  2. Non-hero story 1
  3. Non-hero story 2
- Middle column, top to bottom (no ad):
  1. Non-hero story 3
  2. Non-hero story 4
  3. Brandspot story 1 (compact, image on the left)
  4. Brandspot story 2 (compact, image on the left)
- Right column (Premium), top to bottom:
  1. Premium heading
  2. Premium hero story
  3. 5 Premium non-hero stories
  4. Premium call-to-action

**With Ad, mobile** (single column, top to bottom)

1. Hero story
2. Ad
3. Non-hero stories 1 to 4
4. Ad
5. Premium heading, hero story, 2 Premium non-hero stories, call-to-action

**Subscribers, mobile** (single column, top to bottom)

1. Hero story
2. Non-hero stories 1 to 4
3. Premium heading, hero story, 2 Premium non-hero stories, call-to-action

**Brandspot, mobile** (single column, top to bottom)

1. Hero story
2. Non-hero stories 1 to 4
3. Premium heading, hero story, 2 Premium non-hero stories, call-to-action
4. Brandspot story 1
5. Brandspot story 2

On mobile the 4 non-hero stories come in one sequence, not split between left and middle columns.

### 4.2 Prajavani

Every story, including the hero, shows a Story Section. Premium always has a heading, the Premium badge on each headline and the "ಎಲ್ಲಾ ಪ್ರೀಮಿಯಂ ಲೇಖನಗಳನ್ನು ನೋಡಿ" call-to-action.

**With Ad, desktop** (three columns)

- Left column, top to bottom:
  1. Hero story
  2. Non-hero story 1
  3. Non-hero story 2
- Middle column, top to bottom:
  1. "ಇನ್ನಷ್ಟು ಓದಿ" heading
  2. Hero story (with sub-heading)
  3. More News non-hero story 1
  4. More News non-hero story 2
  5. Subhashita
- Right column, top to bottom:
  1. Ad
  2. Premium heading
  3. Premium hero story
  4. 4 Premium non-hero stories (3 on narrower desktop)
  5. Premium call-to-action

**Subscribers, desktop** (three columns)

- Left column, top to bottom:
  1. Hero story
  2. Non-hero story 1
  3. Non-hero story 2
- Middle column, top to bottom:
  1. "ಇನ್ನಷ್ಟು ಓದಿ" heading
  2. Hero story (with sub-heading)
  3. More News non-hero story 1
  4. More News non-hero story 2
  5. Subhashita
- Right column (no ad), top to bottom:
  1. Premium heading
  2. Premium hero story
  3. 5 Premium non-hero stories (4 on narrower desktop)
  4. Premium call-to-action

**With Ad, mobile** (single column, top to bottom)

1. Hero story
2. Ad
3. Non-hero story 1
4. Non-hero story 2
5. "ಇನ್ನಷ್ಟು ಓದಿ" heading, hero story, 2 non-hero stories
6. Subhashita
7. Ad
8. Premium heading, hero story, 2 Premium non-hero stories, call-to-action

**Subscribers, mobile** (single column, top to bottom)

1. Hero story
2. Non-hero story 1
3. Non-hero story 2
4. "ಇನ್ನಷ್ಟು ಓದಿ" heading, hero story, 2 non-hero stories
5. Subhashita
6. Premium heading, hero story, 2 Premium non-hero stories, call-to-action

The mobile order of More News, Subhashita and Premium follows the prototype's source order, which is the order shown above.

All counts come from the current prototype. The PV desktop Premium counts and width thresholds need confirmation (section 9).

### 4.3 What each collection must hold

A collection must hold at least the largest count any variation or device needs, so no layout runs short.

| Collection | Minimum stories |
| --- | --- |
| DH Top Stories | 6 |
| DH Brandspot | 2 |
| DH Premium | 6 |
| PV Lead | 3 |
| PV ಇನ್ನಷ್ಟು ಓದಿ | 3 |
| PV ಸುಭಾಷಿತ | 1 |
| PV Premium | 6 |

## 5. Story card content and functionality per brand

| Item | DH | PV |
| --- | --- | --- |
| Hero Story Section | Not shown | Shown |
| Non-hero stories | Story Section, headline, time, read time | Story Section, headline, time, read time |
| Hero sub-heading | Shown | Shown |
| More News sub-heading | Not applicable | More News hero story shows a sub-heading |
| Group headings | Only Premium has a heading | More News, Subhashita and Premium have headings |
| Ad position (desktop) | Middle column, under the first 2 stories | Right column, above Premium |
| Ad position (mobile) | After the hero and again before Premium (With Ad) | After the hero and again before Premium (With Ad) |
| Sponsored content | Brandspot stories, labelled as sponsored | None |
| Subhashita | None | Quote of the day |
| Time and read time on mobile | Same wording as desktop | Shortened wording on mobile (for example "30 ನಿ. ಹಿಂದೆ" instead of "30 ನಿಮಿಷಗಳ ಹಿಂದೆ") |
| Premium call-to-action | "Explore all premium stories" | "ಎಲ್ಲಾ ಪ್ರೀಮಿಯಂ ಲೇಖನಗಳನ್ನು ನೋಡಿ" |

Common to both brands:

- Every story image is 3:2.
- Every Premium story is marked with the Premium badge before its headline.
- Time and read time (for example "6 min read") appear on every story.

## 6. Editor requirements (CMS)

1. Editors can open each group collection on its own and add, remove and reorder stories without touching any other group.
2. Editors can add or remove a group in the Home Top collection (for example, a DH Brandspot group that replaces the ad for non-subscribers while it is added).
3. A group can hold more stories than any one layout shows. Only the first N are displayed, where N depends on brand, variation and device (section 4). The rest act as a bench that moves up automatically if a story above is removed or unpublished.
4. Editors do not curate separately per variation or device. One ordered list per group serves all of them.
5. Changes published to a group collection appear on the home page without a separate publish of the Home Top collection.
6. Different desks can be given edit access to different groups (for example the Premium desk manages only Premium, the brand-solutions team manages only Brandspot).
7. Editors can preview Home Top before publishing for each brand, each variation and both desktop and mobile.
8. Group headings shown to readers (for example "ಇನ್ನಷ್ಟು ಓದಿ") come from the group collection's name and can be changed without a release.
9. DH and PV are curated separately. A change to a DH collection never affects PV and vice versa.

## 7. Edge cases

| Situation | Expected behaviour |
| --- | --- |
| A group has fewer stories than the layout needs | Show what is available; the layout closes the gap without empty cards or broken dividers |
| A group is empty or removed from Home Top | The group, including its heading and call-to-action, is hidden and the rest of Home Top adjusts |
| DH Top Stories or PV Lead is empty | Home Top must never render without a hero. Fall back to the latest top story and alert the desk |
| A story is unpublished or deleted | It disappears from Home Top and the next story in that group moves up |
| A story has no image | Show the brand's default placeholder image |
| DH Brandspot collection is empty | Non-subscribers see the With Ad variation with the regular ad instead |
| A non-Premium story is added to a Premium collection | It is not shown in the Premium group |
| A story is scheduled | It appears only from its publish time |
| A story appears in two groups | Shown once, in the first group in reading order; the next story in the later group moves up |
| A subscriber's status changes while on the page | The next page load shows the correct variation |

## 8. Acceptance criteria

- [ ] DH and PV each have one Home Top collection made up only of group collections.
- [ ] Every group in section 2 exists as a separate CMS collection and can be curated independently.
- [ ] Story counts in every cell of section 4 match for each brand, variation and device.
- [ ] The DH hero does not show a Story Section; the PV hero does.
- [ ] Ad slots and positions match section 5 for each brand and device, and the Subscribers and Brandspot variations show no ads.
- [ ] Brandspot appears only on DH, only for non-subscribers, and never together with the ad.
- [ ] Subscribers never see Brandspot stories.
- [ ] Subhashita appears only on PV.
- [ ] Reordering stories in a group changes the reader-facing order in that group only.
- [ ] Adding or removing a group in Home Top shows or hides it on the home page.
- [ ] No story appears twice within Home Top.
- [ ] All edge cases in section 7 behave as described.
- [ ] Editors can preview every brand, variation and device before publishing.

## 9. Open questions

1. PV Premium on desktop: confirm the story counts for With Ad and Subscribers, including the width break (the prototype changes counts around 1200 px and 1280 px, and its rules for Subscribers are inconsistent).
2. DH Premium on desktop: the prototype page has 4 non-hero stories while the design notes say 5. Confirm 5.
3. Should Premium be fully hand-curated, or auto-filled with the latest Premium stories when the desk has not curated it?
4. Is Subhashita a story collection (one story per day) or a single quote entry (text, attribution, portrait)? Should it rotate automatically each day?
5. Should DH Brandspot have a start and end time so it switches on and off without the desk editing Home Top?
6. On duplicates across groups, is "first occurrence wins" right, or should the CMS stop the editor from adding the same story twice?
7. Is read time calculated automatically from story length or entered by the editor?
8. Does the mobile app home use the same Home Top collections, or is this web only for now?
