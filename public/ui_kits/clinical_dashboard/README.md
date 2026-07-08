# Glauc Clinical Dashboard — UI Kit

Web dashboard for clinicians and employer-health-plan admins.

## Files

| File | What |
|---|---|
| `index.html` | Entry — renders the Overview screen |
| `Components.jsx` | `Sidebar`, `TopBar`, `MetricCard`, `PatientTable`, `RiskDistribution`, `TrendChart`, `RadarChart`, plus a Lucide-style `CIcon` set |

## Sections on the Overview screen

1. **Forest sidebar** with logo lockup, six nav items, user lockup at bottom
2. **Top bar** with command-K search field, export button, notification bell
3. **KPI strip** — four MetricCards (total scans, avg bio age, flagged patients, critical alerts)
4. **Risk distribution** — stacked horizontal segmented bar (Optimal/Moderate/Elevated/Critical)
5. **Bio-age trajectory** — patient line vs cohort dashed reference line
6. **Recent patients table** — 7-column data grid with patient avatar, chrono / bio age / delta pill / last scan / top-flag pill
7. **Cohort biomarker radar** — 6-axis radar (Ocular / Metabolic / Cardiovascular / Neurological / Aging / Systemic)
8. **Validation footer** with Harvard shield + FDA disclaimer

## Not yet built

- Patient detail drilldown
- Scan-panel review screen
- Settings & user-management
- Employer / health-plan variant (different KPIs)

These all reuse the same components — they're omitted for scope, not because of design uncertainty.
