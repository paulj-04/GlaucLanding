---
name: glauc-design
description: Use this skill to generate well-branded interfaces and assets for Glauc (Harvard Medical School AI biological-eye-monitoring), either for production or throwaway prototypes / mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the Glauc mobile patient app, clinical dashboard, developer docs, and investor materials.
user-invocable: true
---

Read the `README.md` file at the root of this skill, then explore the other files. `README.md` covers brand identity, content fundamentals (the *italic* + <u>underline</u> emphasis move is signature — read that section closely), visual foundations (cream/sage/forest paper surfaces, restrained motion), and iconography (Lucide, single-stroke 1.5px).

Key files to know:

- `colors_and_type.css` — all design tokens as CSS custom properties + element-level semantic styles. Drop into any HTML file with `<link rel="stylesheet" href="path/to/colors_and_type.css">` and you get the full token system.
- `assets/` — logo lockups (sage / white / forest), paper textures (cream / sage / forest), founder + family photography crops.
- `preview/` — visual reference cards for every token + component. Open these to see canonical examples.
- `ui_kits/mobile_app/` — React JSX components (`Components.jsx`, `Screens.jsx`) for the patient app. Reusable: `RiskPill`, `BiomarkerRow`, `BioAgeRing`, `BottomNav`, `PrimaryButton`, `Icon`.
- `ui_kits/clinical_dashboard/` — React JSX components for the web dashboard: `Sidebar`, `TopBar`, `MetricCard`, `PatientTable`, `RiskDistribution`, `TrendChart`, `RadarChart`.
- `slides/` — 6 slide templates in deck-stage (Title / Big Statement / Split Stat / Product / Validation / Thanks) matching the Q2 investor deck.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out into the new project and write static HTML files. Use `colors_and_type.css` as the source of truth for tokens — never invent new colors.

If working on production code, lift the JSX components as references and adapt them to your framework; the styles are designed to be copy-paste portable since they use the CSS variables, not Tailwind classes.

If the user invokes this skill without any other guidance, ask them what surface they want to design (mobile app screen, clinical dashboard module, investor slide, developer-docs page, marketing page) and what content goes in it. Then act as an expert Glauc designer and output an HTML artifact — using the paper textures, the italic-then-underline emphasis move, and the DM Serif Display / DM Sans / DM Mono trio. Avoid emoji. Avoid bluish-purple gradients. Avoid floating glass cards. Glauc lives on paper.

## Things to do every time

1. Use cream (`#F7F3EE`) with the paper texture as the page background, or forest (`#1A3A2A`) for high-contrast hero sections.
2. Headlines in **DM Serif Display** regular. Apply the brand emphasis move: italicize one qualifier (*just, only, half, first, under*) and underline one proof noun (smartphone photo, 10 seconds, permanent).
3. Place the **Glauc "g" mark** in the top-right corner, 60–80px from each edge, on any marketing surface.
4. For data values use **DM Mono**. For body and labels use **DM Sans**.
5. Use risk pills (Optimal / Moderate / Elevated / Critical) with the correct semantic colors — never paint your own.
6. Append the FDA disclaimer to any surface that shows clinical results: *FDA Class I General Wellness Device. Not a diagnostic tool. Clinical judgment required.*
