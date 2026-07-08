# Glauc Mobile App — UI Kit

Five screens that recreate the Glauc patient app from the Q2 investor deck.

## Files

| File | What |
|---|---|
| `index.html` | Entry point — renders all 5 screens side-by-side, plus one interactive device tied together with React state for the scan flow |
| `ios-frame.jsx` | iOS 26-style device chrome (status bar, dynamic island, home indicator) |
| `Components.jsx` | Shared building blocks: `RiskPill`, `BiomarkerRow`, `BioAgeRing`, `Icon` (Lucide-style stroke set), `GlaucLogo`, `BottomNav`, `PrimaryButton` |
| `Screens.jsx` | The five screens: `HomeScreen`, `CaptureScreen`, `ResultsScreen`, `HistoryScreen`, `ProfileScreen` |

## Screens covered

1. **Home** — greeting, weekly-scan CTA card on forest paper, bio-age summary, latest panel preview
2. **Capture** — full-bleed dark camera viewfinder with reticle, eye placeholder, processing overlay
3. **Results** — the canonical "Your Scan Results" view from slide 5 of the pitch deck. Bio-age ring + 11-biomarker panel + Harvard/FDA validation footer
4. **History** — bio-age trajectory chart vs chronological reference + scan timeline
5. **Profile** — avatar, personal info, care team, settings

## Interactive flow

In the center device of `index.html`, tap **Start scan** on the home screen to enter the capture flow → tap the shutter → simulated processing → land on results. The bottom nav also navigates between Home / Check / History / Profile.

## What's intentionally simplified

- Risk score values are static
- The capture viewfinder shows a CSS-drawn placeholder iris instead of a live camera feed
- No real persistence — state lives in React only

## Design system used

All visual tokens come from `colors_and_type.css`. The mobile app uses softer
card rounding (16–20px) than the spec's `--radius-subtle: 4px` to match the
mockup from the pitch deck — see README.md Caveats for context.
