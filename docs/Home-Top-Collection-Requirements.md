# Home Top Collection Requirements (DH & PV)

_Date: 12 Oct 2026 · Audience: Tech team · Scope: Deccan Herald (DH) and Prajavani (PV) websites, home page top section. The mobile app is not covered for now_

## 1. Summary

The Home Top section on DH and PV is driven by a single **Home Top collection**, which is a **collection of collections**. Each visible editorial group (Top Stories, Premium, etc.) is its own CMS collection that the desk curates independently. The Home Top collection only decides which groups appear and points to them. DH Brandspot is not part of this: it is controlled by the ad ops team (section 2).

DH and PV each have their own Home Top collection and their own group collections. Nothing is shared between the two brands. The two brands also differ in groups, variations, story counts per device and functionality (sections 3 to 5).

## 2. Structure

```
Home Top (DH)                       Home Top (PV)
├── Top Stories                     ├── Lead
└── DH Premium                      ├── ಇನ್ನಷ್ಟು ಓದಿ (More News)
                                    ├── ಸುಭಾಷಿತ (Subhashita)
                                    └── ಪ್ರಜಾವಾಣಿ ಪ್ರೀಮಿಯಂ (PV Premium)
```

- Home Top contains only group collections, never stories directly.
- Each group collection contains only stories (for Subhashita, quotes).
- Each group maps to a fixed position in the design. The position is decided by the design, not by the order of groups inside the Home Top collection.
- The order of stories inside a group is the order readers see. The first story takes the most prominent slot.
- **DH Brandspot is outside the editorial collections.** It is enabled and managed by the ad ops team, and it works the same way it does today. Turning Brandspot on or off, or changing its stories, never requires editing Top Stories, DH Premium or the Home Top collection, and editors cannot change it.

## 3. Reader variations

The reader sees a different version of Home Top depending on who they are. Subscribers never see ads. Non-subscribers see an ad on both brands, except on DH when ad ops has enabled Brandspot, where they see Brandspot stories instead of the ad. The variation changes ad slots and story counts.

| Brand | Variation | Who sees it | Ads | Other differences |
| --- | --- | --- | --- | --- |
| DH | With Ad | Non-subscribers | Yes | Default version |
| DH | Subscribers | Subscribers | No | Freed ad space is given to one more Top Stories story |
| DH | Brandspot | Non-subscribers | No | Instead of the ad, two sponsored Brandspot stories are shown. Enabled by ad ops |
| PV | With Ad | Non-subscribers | Yes | Default version |
| PV | Subscribers | Subscribers | No | No ad; Premium leads with a hero story, which With Ad does not show on desktop |

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
  3. 3 Premium non-hero stories
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
  3. 3 Premium non-hero stories
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
  3. 3 Premium non-hero stories
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
  3. 4 Premium non-hero stories. With Ad shows no Premium hero story on desktop
  4. Premium call-to-action

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
  3. 3 Premium non-hero stories
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

Tablet (701 to 1023 px) for PV: With Ad shows 4 Premium non-hero stories and no Premium hero story, with the ad just before Premium; Subscribers shows a Premium hero story + 2 non-hero stories.

Subhashita shows one quote at a time from the Subhashita collection. It shows the current day's Subhashita, picked the same way as today. The hero image of the quote is used as the image on the Subhashita card (the portrait shown beside the quote).

All counts come from the prototype code. Section 9 asks to confirm that With Ad has no Premium hero story on desktop and tablet.

### 4.3 What each collection must hold

A collection must hold at least the largest count any variation or device needs, so no layout runs short.

| Collection | Minimum stories |
| --- | --- |
| DH Top Stories | 6 |
| DH Premium | 4 |
| PV Lead | 3 |
| PV ಇನ್ನಷ್ಟು ಓದಿ | 3 |
| PV ಸುಭಾಷಿತ | 1 (the current day's Subhashita) |
| PV Premium | 4 |

## 5. Story meta line (time and read time)

Every story has a meta line under it. Publish time is on the left; read time is on the right with a clock icon before it. Time is worked out from the story's publish time. Read time comes from the CMS API.

### 5.1 Time labels

Both brands have a long form and a short form for every label. Time labels count back from the moment the page loads. Labels without * are taken from the prototype. Rows and forms marked * are proposed and are not in the prototype; the desks confirm the wording, the PV desk for Kannada and the DH desk for English short forms.

| Case | DH long | DH short | PV long | PV short |
| --- | --- | --- | --- | --- |
| Under 1 minute | "Just now" | "Just now" * | "ಈಗಷ್ಟೇ" * | "ಈಗಷ್ಟೇ" * |
| 1 minute | "1 minute ago" * | "1 min ago" * | "1 ನಿಮಿಷ ಹಿಂದೆ" * | "1 ನಿ. ಹಿಂದೆ" * |
| 2 to 59 minutes | "30 minutes ago" | "30 mins ago" * | "30 ನಿಮಿಷಗಳ ಹಿಂದೆ" | "30 ನಿ. ಹಿಂದೆ" |
| 1 hour | "1 hour ago" | "1 hr ago" * | "1 ಗಂಟೆ ಹಿಂದೆ" | "1 ಗಂ. ಹಿಂದೆ" |
| 2 to 23 hours | "4 hours ago" | "4 hrs ago" * | "4 ಗಂಟೆಗಳ ಹಿಂದೆ" | "4 ಗಂ. ಹಿಂದೆ" |
| 1 day (24 to 47 hours) | "1 day ago" * | "1d ago" * | "1 ದಿನ ಹಿಂದೆ" * | "1 ದಿ. ಹಿಂದೆ" * |
| 2 to 6 days | "2 days ago" * | "2d ago" * | "2 ದಿನಗಳ ಹಿಂದೆ" * | "2 ದಿ. ಹಿಂದೆ" * |
| 7 days or more | Publish date, for example "12 Oct 2026" * | Publish date without the year, for example "12 Oct" * | Publish date in Kannada, format to be confirmed * | Same as long form * |

Rules:

- **DH time:** minutes and hours use the singular for 1 ("1 hour ago") and the plural for 2 or more ("2 hours ago"). The DH short form uses "min/mins", "hr/hrs" and "d", with the same singular and plural split for minutes and hours.
- **PV time:** hours use a different word for 1 ("ಗಂಟೆ") and for 2 or more ("ಗಂಟೆಗಳ"). Minutes use "ನಿಮಿಷಗಳ" in the examples seen. The short form uses "ನಿ." for minutes, "ಗಂ." for hours and "ದಿ." for days.
- **Numbers:** digits are Western (0 to 9) in both brands, as in the prototype.

### 5.2 Read time labels

Read time is the number of minutes provided by the CMS API. Home Top shows it as it comes, with no rounding or adjustment. Labels without * are taken from the prototype; forms marked * are proposed.

| Case | DH long | DH short | PV long | PV short |
| --- | --- | --- | --- | --- |
| 1 minute | "1 min read" * | "1 min" * | "1 ನಿಮಿಷ ಓದು" * | "1 ನಿ. ಓದು" * |
| 2 minutes or more | "6 min read" | "6 min" * | "6 ನಿಮಿಷ ಓದು" | "6 ನಿ. ಓದು" |

The wording is the same for 1 minute and for 2 or more; there is no singular or plural change.

### 5.3 Where the long and short forms are shown

These rules apply to both the time labels (5.1) and the read time labels (5.2). The two always use the same form on the same screen.

- **DH:** the long form on desktop (1024 px and wider); the short form on tablet (701 to 1023 px) and mobile (700 px and below). The prototype shows only the long form today, so the short form is new.
- **PV:** the short form on desktop and mobile.
- **Layout:** on both brands the time can wrap onto a second line when it does not fit, and the read time sits on the right.

### 5.4 Common to both brands

- Every story image is 3:2, except the round Subhashita image.
- Every Premium story is marked with the Premium badge before its headline.
- The meta line appears on every story, including hero stories. The Subhashita card has none.

## 6. Editor requirements (CMS)

1. Editors can open each group collection on its own and add, remove and reorder stories without touching any other group.
2. Editors can add or remove an editorial group in the Home Top collection. This does not apply to DH Brandspot, which ad ops controls.
3. A group can hold more stories than any one layout shows. Only the first N are displayed, where N depends on brand, variation and device (section 4). The rest act as a bench that moves up automatically if a story above is removed or unpublished.
4. Editors do not curate separately per variation or device. One ordered list per group serves all of them.
5. Group headings shown to readers (for example "ಇನ್ನಷ್ಟು ಓದಿ") come from the group collection's name and can be changed without a release.
6. DH and PV are curated separately. A change to a DH collection never affects PV and vice versa.
7. Premium groups are hand-curated only. A Premium group that is short of stories is never auto-filled.
8. The Subhashita collection holds the daily quotes. Home Top shows the current day's Subhashita, picked the same way as today.

## 7. Edge cases

| Situation | Expected behaviour |
| --- | --- |
| A group has fewer stories than the layout needs, on desktop | Show the stories that are available and leave the rest of the space empty. The layout does not rearrange to fill it |
| A group has fewer stories than the layout needs, on mobile | Show the stories that are available. The layout adapts, with no empty space, empty cards or broken dividers |
| A group is empty or removed from Home Top | Desktop keeps the existing layout and the group's area stays empty; no new desktop design is needed. Mobile skips the group and the rest of Home Top moves up |
| DH Top Stories or PV Lead is empty | Home Top must never render without a hero. Fall back to the latest top story and alert the desk |
| A story is unpublished or deleted | It disappears from Home Top and the next story in that group moves up |
| A story has no image | Show the brand's default placeholder image |
| Brandspot is enabled by ad ops but has no stories | Non-subscribers see the With Ad variation with the regular ad instead |
| A non-Premium story is added to a Premium collection (DH or PV) | It is skipped and does not count towards the Premium story count. The next Premium story in the collection takes its place |
| A story is scheduled | It appears only from its publish time |
| A story is more than 24 hours old | It stays in Home Top until the desk removes it. Its time label switches to days (up to 6 days) and then to the publish date (section 5.1) |
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
- [ ] Brandspot is enabled, changed and disabled by ad ops exactly as today, with no change to any editorial collection or to Home Top.
- [ ] Subhashita appears only on PV, and shows the current day's Subhashita, picked the same way as today.
- [ ] The Subhashita card shows the hero image of the quote as its image.
- [ ] Premium groups are never auto-filled.
- [ ] Read time on every story is the value from the CMS API, unchanged.
- [ ] Reordering stories in a group changes the reader-facing order in that group only.
- [ ] Adding or removing a group in Home Top shows or removes its stories on the home page. The desktop layout itself never changes.
- [ ] The meta line on every story uses the labels in section 5 (DH English form, PV short form).
- [ ] On both brands the time label can wrap onto a second line when it does not fit, and the read time stays right-aligned.
- [ ] No story appears twice within Home Top.
- [ ] Premium groups show only Premium stories; non-Premium stories added to them are skipped.
- [ ] When a group has fewer stories than its layout needs, desktop leaves the space empty and mobile adapts with no gaps.
- [ ] All edge cases in section 7 behave as described.

## 9. Open questions

1. Confirm how ad ops enables Brandspot and supplies its 2 stories today, so the new Home Top keeps that mechanism unchanged.
2. Time labels: does the PV desk approve the proposed Kannada wording for under 1 minute, 1 minute and days, and the Kannada date format for 7 days or more?
3. DH short form: does the DH desk approve the proposed wording?