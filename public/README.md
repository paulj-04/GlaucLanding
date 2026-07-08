# Glauc Design System

> **Read the eye. See the future.**
> Harvard-validated biological monitoring AI. The intersection of cutting-edge
> medical research and consumer health technology.

Glauc is a Harvard Medical School AI that analyzes smartphone photographs of the
eye and returns a biological eye-age estimate plus a disease-risk panel. The
brand is **precise, warm, authoritative, and accessible** — the brilliant doctor
who knows how to explain things to a friend.

This design system covers four surfaces:

| Surface | Audience | Tone |
|---|---|---|
| **Mobile patient app** | Wellness-conscious consumer | Warm, conversational, clear |
| **Clinical / employer dashboard** | Clinician, plan admin | Dense, data-rich, calm |
| **Developer API docs** | Engineers | Terse, monospaced, exact |
| **Investor / marketing** | Investors, partners, press | Confident, editorial, premium |

Across all four, the brand stays unmistakably itself: cream paper, sage greens,
serif headlines with the signature *italic-then-underline* emphasis move.

---

## Source materials

| Source | Path | Notes |
|---|---|---|
| Q2 Investor pitch deck (PDF, 16 pages) | `uploads/Q2 Glauc Investor Intro Pitch Deck_compressed.pdf` | rendered to PNGs in `uploads/_pdf/` |
| Pitch deck — slide 5 (3-step results) | `uploads/v2 Glauc Investor Intro Pitch Deck - 5.jpeg` | mobile mock reference |
| Pitch deck — slide 6 (split stat) | `uploads/v2 Glauc Investor Intro Pitch Deck - 6.jpeg` | layout reference |
| Logo isolate (sage g) | `uploads/Untitled design - 7.jpeg` | converted to alpha PNG → `assets/logo-g-sage.png` |

No codebase or Figma file was provided. The system was reverse-engineered from
the pitch deck + the comprehensive written brief.

---

## Index

```
.
├── README.md                  ← this file — start here
├── SKILL.md                   ← machine-readable skill entry (Agent Skill)
├── colors_and_type.css        ← all CSS custom properties + element semantics
│
├── assets/                    ← logos, textures, partner badges
│   ├── logo-g-sage.png        ← primary mark, sage on transparent
│   ├── logo-g-white.png       ← reverse mark, for forest / dark backgrounds
│   ├── logo-g-forest.png      ← dark mark, for cream / light backgrounds
│   ├── texture-cream.jpg      ← warm off-white paper grain
│   ├── texture-sage.jpg       ← sage paper grain
│   └── texture-forest.jpg     ← forest dark paper grain
│
├── preview/                   ← Design System tab cards (one per concept)
│   ├── colors-primary.html
│   ├── colors-neutral.html
│   ├── colors-risk.html
│   ├── colors-bioage.html
│   ├── type-display.html
│   ├── type-headings.html
│   ├── type-body.html
│   ├── type-label.html
│   ├── type-mono.html
│   ├── spacing.html
│   ├── radius.html
│   ├── elevation.html
│   ├── buttons.html
│   ├── form-inputs.html
│   ├── risk-pills.html
│   ├── cards.html
│   ├── biological-age-ring.html
│   ├── harvard-badge.html
│   └── logo.html
│
├── ui_kits/
│   ├── mobile_app/            ← Glauc patient app: capture → results → history
│   │   ├── index.html
│   │   └── *.jsx
│   └── clinical_dashboard/    ← web dashboard for clinicians + employers
│       ├── index.html
│       └── *.jsx
│
└── slides/                    ← pitch-deck templates (16:9, 1920×1080)
    ├── index.html
    ├── TitleSlide.jsx
    ├── BigStatementSlide.jsx
    ├── SplitStatSlide.jsx
    ├── ProductSlide.jsx
    └── ValidationSlide.jsx
```

---

## CONTENT FUNDAMENTALS

Glauc's voice is **editorial, warm, and earned**. It writes like an essay, not
a marketing page.

**Person & address.** Mostly **you** — direct, second-person. "Take a photo of
*your* eye." "*Your* Scan Results." First-person plural ("**we**") only when
speaking *about* Glauc itself ("We are the *first* at-home ocular aging panel").
Never "I". Never anonymous "users".

**Casing.** Sentence case for everything — slide titles, button labels,
section headings — except the label class (10–12px DM Sans Medium) which is
**ALL CAPS WITH WIDE TRACKING** (`letter-spacing: 0.08em`). Examples in the
pitch deck: `MODERATE`, `OPTIMAL`, `ELEVATED`, `Phase 1 — Q2 2025`.

**The signature move: italic + underline emphasis.** Glauc emphasizes one or
two key words per statement with a combination of *italic serif* and
<u>underlined</u> text:

> "We are the <u>first</u> at-home ocular aging panel, with *just* a photo of your eye."
> "Detect over a dozen diseases with *just* a <u>smartphone photo</u>."
> "Disease that's *preventable* is still caught too <u>late</u>."

Rules of thumb:
- Italicize qualifiers and degree words: *just, only, half, under, first*
- Underline the **noun or verb that carries the proof**: <u>smartphone photo</u>, <u>10 seconds</u>, <u>Launch</u>, <u>permanent</u>
- One emphasis per phrase, two max. Never both treatments on the same word.

**Numbers as protagonists.** Statistics are typeset huge in DM Serif Display
and treated as headlines, not body copy: `$139ᴮ`, `20%`, `$45M`. Unit
markers (B, %, /yr) are set 40–60% the size of the number and sit superscript
or trailing.

**No emoji.** None of the pitch deck uses any. Don't introduce them.

**Clinical honesty is part of the voice.** Wellness copy stays approachable
("Tap for details") but disclaimers appear plainly, never hidden:

> *FDA Class I General Wellness Device. Not a diagnostic tool. Clinical
> judgment required.*

**Examples of approved copy:**
- App home: "Your Scan Results"
- Empty state: "No scans yet. Take your first eye photo to begin."
- Capture prompt: "Hold steady. We'll snap when your eye is centered."
- Result framing: "Your biological eye age is *5 years younger* than your chronological age."
- Marketing: "Read the eye. See the future."
- Investor: "Disease that's preventable is still caught too late."

---

## VISUAL FOUNDATIONS

### Surfaces & backgrounds

Glauc lives on **paper**, not glass. Every surface has a subtle grain that
softens the medical clinicism into something warmer and editorial.

- **Cream (#F7F3EE) with grain** — the default page background. Warm off-white,
  visibly textured. Used for marketing, app shell, dashboard frame.
- **Sage (#8DA08F-ish) with grain** — secondary marketing surface. The same
  paper, just sage-toned. Used for one-up product hero slides.
- **Forest (#1A3A2A) with grain** — high-contrast slides ("MVP Development"
  page). White serif headlines on this surface; never use ink (#1A1A18)
  body copy on it.

Cards inside the cream shell are **flat white (#FFFFFF)** with a 1px border
(`#E2DDD8`) and shadow-1. Cards never go beyond shadow-2 — Glauc does not
"float". The texture is the visual interest; shadows stay restrained.

### Color vibe

Cool muted greens (sage, mint) paired with warm cream and warm-toned ink.
The greens hold most of the brand identity; the warm neutrals stop it from
feeling cold or sterile. Reds and ambers appear only as risk semantics — they
are intentionally *less saturated* than typical alert reds so they read as
clinical findings, not UI noise. Harvard crimson (#A51C30) is reserved
exclusively for the validation badge.

### Typography motif

DM Serif Display does **all the talking** — every slide title, every screen
title, every hero number. DM Sans does the listening — body copy, captions,
labels. DM Mono carries data: probability values, API responses, timestamps.

The serif's *italic* cut is treated as a separate brand voice and used
constantly for emphasis (see Content Fundamentals).

### Imagery

Warm, candid, real. The pitch deck mixes:
- Documentary-style portraits (founders, advisors, patients) — warm light,
  shallow depth, never stock-photo-clean
- Hero lifestyle shot with skin tones against sage background
- Iconographic pictograms (the standing-figure population dots)
- Circular crops for all profile photos (`border-radius: 50%`)

When in doubt: imagery is **warm**, occasionally a little grainy, and never
clinical-blue or gradient-y.

### Layout rules

- 8-pt grid throughout
- Marketing pages are loose and editorial — generous left margins, big
  numbers, lots of breathing room. Don't fill every corner.
- App / dashboard surfaces are denser but still leave 24px+ around cards
- The Glauc "g" mark sits in the **top-right** corner of every marketing
  surface, 64px from each edge. This is the brand's most consistent move.
- A vertical hairline rule (1px `--color-stone`) is used to split two-up
  statements (slide 6: statement | stat)

### Borders & corners

- **Default radius: 4px** (`--radius-subtle`). Buttons, cards, inputs.
- Risk pills, profile photos, and ring visualizations are **fully rounded**
  (`--radius-pill` / `border-radius: 50%`)
- Bottom sheets and toasts use 8px
- Modals use 12px
- API code blocks use 2px — sharper, more "data"

### Animation

- **Reserved.** Glauc moves slowly and intentionally — this is a health app,
  not a game.
- Default easing: `ease-out-cubic` for entries, `ease-in-cubic` for exits,
  `ease-in-out-cubic` for repositioning.
- **Biological age ring** is the showpiece animation: 800ms ease-out-cubic
  fill from 0 → final value, with the number counting up in parallel. After
  the ring lands, the delta indicator fades in.
- Disease-score cards **stagger in** on the results screen: 50ms between
  cards, each sliding up 8px over 200ms.
- Button press: 100ms scale to 0.98, no bounce.
- No springy or playful easings. No parallax. No autoplaying video.

### Interactive states

| State | Treatment |
|---|---|
| Hover (primary button) | darken 10% — `filter: brightness(0.9)` |
| Hover (outline / ghost) | fill at 6% of forest |
| Pressed | darken 15% + 100ms scale 0.98 |
| Focus | 2px mint outline, 2px offset (visible only on keyboard nav) |
| Disabled | 40% opacity, no pointer events |
| Loading | text replaced by 16px sage spinner; button width pinned |

### Use of transparency / blur

Sparingly. The only place blur belongs is the **camera capture overlay** in
the mobile app — a subtle backdrop-blur(8px) behind the live viewfinder
chrome, so the controls don't get lost on busy backgrounds. No glassmorphism
elsewhere.

### Cards (canonical recipe)

```
background: #FFFFFF;
border: 1px solid #E2DDD8;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.08);
padding: 24px;
```

The disease-risk card is a variant: same shell but with a **3px left bar in
the risk semantic color** plus the card-background tinted to 10% of the
risk color. The pitch-deck mockup uses a much softer pill-card shape (full
rounded corners ~24px) in the *mobile* context — the design system spec
keeps that rounding for mobile only; web stays at 4px.

---

## ICONOGRAPHY

Glauc uses **Lucide** as its primary icon set — clean, single-stroke,
1.5px-weight outline icons that match the editorial-but-precise tone.

```html
<!-- Drop-in via CDN -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="camera"></i>
```

**Sizes:**
- 24px — standard (nav, buttons)
- 20px — compact contexts (cards, inline)
- 16px — inline within body text
- All icons inherit `currentColor` so they tint with their parent.

**Brand-specific glyphs that aren't in Lucide are kept as PNG/SVG assets:**
- The Glauc **g** mark itself (`assets/logo-g-*.png`) — this is the only
  truly proprietary glyph
- The **standing-figure** pictogram from the pitch deck (used at 40-figure
  scale for the "20% of adults" infographic) — currently linked from CDN
  Lucide as `user` if needed; the brand-accurate version is yet to be
  vectored. **FLAGGED — see Caveats.**
- The **Harvard shield** for the validation badge — substituted in this
  system with an inline SVG approximating the Harvard crest in crimson;
  for production, replace with the official Harvard Medical School lockup.

**Emoji: never.** They don't match the tone.

**Unicode special characters used:** `—` (em-dash, frequent in slide titles
like "Phase 1 — Q2 2025"), `·` (middle-dot in metadata), `→` for inline
flow. No arrow emoji.

---

## FONTS

Brand-supplied font files live in `fonts/` and are loaded via `@font-face`:

| Role | Family | File(s) |
|---|---|---|
| Serif (display + headings) | **Instrument Serif** | `InstrumentSerif-Regular.ttf`, `InstrumentSerif-Italic.ttf` |
| Sans (headings, UI labels) | **Hagrid** *(trial)* | `Hagrid-Regular-trial.ttf` |
| Sans (body fallback) | DM Sans | Google Fonts |
| Mono (data, code) | DM Mono | Google Fonts |

> ⚠️ Hagrid is shipped here as the **trial** weight only. For production, drop the licensed `Hagrid-Regular.ttf` + any italic/medium cuts into `fonts/`, then update the `@font-face` `src` URL. Body copy currently falls back to DM Sans because Hagrid Trial doesn't ship italic / medium / longer paragraphs render better in DM Sans.

> ⚠️ DM Mono only ships **Regular 400** and **Medium 500**. If a bolder mono is ever required, the system uses Medium 500.

---

## CAVEATS for the human reviewing this system

1. **No real codebase / Figma was attached.** The system is built entirely
   from the pitch deck and the comprehensive written brief. The mobile-app
   mock on slide 5 was the only real interface reference — everything else
   is a derived recreation that matches the brief's spec.
2. **The pitch-deck mobile mockup uses much softer card rounding** (~24px,
   fully pilled cards) than the design-system spec's `--radius-subtle: 4px`.
   I followed the spec for web and the mockup for mobile — please confirm
   which is canonical and I'll align.
3. **Standing-figure pictogram** (used in the pitch deck for population
   infographics) is **not yet vectored** as a brand asset. I left placeholder
   `<i data-lucide="user-round">` glyphs where it appears; please drop the
   real SVG into `assets/figure.svg` when available.
4. **Harvard shield** in the validation badge is an SVG approximation.
   Replace with the official Harvard Medical School lockup before any
   production use.
5. **No real photography was supplied.** I used the founder portraits visible
   in the pitch deck only inside the slides recreations; UI kits use
   illustrative placeholders.
