// Components.jsx — Glauc mobile shared components
// All globals exported via window for cross-file babel.

const C = {
  forest: '#1A3A2A', sage: '#2D6A4F', mint: '#52B788', mist: '#D8F3DC',
  ink: '#1A1A18', slate: '#4A5568', stone: '#718096', border: '#E2DDD8',
  cream: '#F7F3EE', white: '#FFFFFF', light: '#F4F5F6',
  amber: '#C97D2E', amberLight: '#FDF0DF',
  red: '#C0392B', redLight: '#FDF0EF',
  crimson: '#8B0000', crimsonLight: '#FDE8E8',
};

const FONT = {
  serif: "'DM Serif Display', Georgia, serif",
  sans:  "'DM Sans', -apple-system, system-ui, sans-serif",
  mono:  "'DM Mono', ui-monospace, Menlo, monospace",
};

// ─────────────── RiskPill
function RiskPill({ level = 'low', label }) {
  const map = {
    low:    { bg: C.mist,       fg: '#1F6B43', txt: 'Optimal' },
    mod:    { bg: C.amberLight, fg: C.amber,    txt: 'Moderate' },
    elev:   { bg: C.redLight,   fg: C.red,      txt: 'Elevated' },
    crit:   { bg: C.crimsonLight, fg: C.crimson, txt: 'Critical' },
  };
  const m = map[level] || map.low;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      height: 22, padding: '0 10px', borderRadius: 50,
      fontFamily: FONT.mono, fontSize: 10, fontWeight: 500,
      letterSpacing: '0.08em', textTransform: 'uppercase',
      background: m.bg, color: m.fg, whiteSpace: 'nowrap',
    }}>{label || m.txt}</span>
  );
}

// ─────────────── BiomarkerRow — used on results screen
function BiomarkerRow({ label, sub, value, level = 'low', percent = 50, onClick }) {
  const colorMap = { low: C.mint, mod: C.amber, elev: C.red, crit: C.crimson };
  const accent = colorMap[level] || C.mint;
  return (
    <div onClick={onClick} style={{
      background: C.white, borderRadius: 20, padding: '16px 18px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      display: 'flex', flexDirection: 'column', gap: 10, cursor: onClick ? 'pointer' : 'default',
      transition: 'transform 100ms ease-out',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: FONT.sans, fontWeight: 500, fontSize: 16, color: C.ink }}>{label}</div>
          <div style={{ fontFamily: FONT.sans, fontSize: 13, color: C.stone, marginTop: 2 }}>{sub}</div>
        </div>
        <RiskPill level={level} />
      </div>
      <div style={{ height: 4, borderRadius: 999, background: 'rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${percent}%`, background: accent, borderRadius: 999 }} />
      </div>
    </div>
  );
}

// ─────────────── BioAgeRing — circular age viz
function BioAgeRing({ size = 200, value = 31.2, chrono = 36, animate = true }) {
  const r = size / 2 - 14;
  const circ = 2 * Math.PI * r;
  // map bio age 20..90 → 0..1 of ring
  const pct = Math.min(1, Math.max(0, (value - 20) / 70));
  const dashOffset = circ * (1 - pct);
  const color = value < chrono - 2 ? C.mint : (value > chrono + 2 ? C.amber : C.stone);
  const [progress, setProgress] = React.useState(animate ? 0 : pct);
  const [num, setNum] = React.useState(animate ? 0 : value);

  React.useEffect(() => {
    if (!animate) return;
    let start = null;
    const dur = 800;
    let raf;
    const tick = (ts) => {
      if (!start) start = ts;
      const t = Math.min(1, (ts - start) / dur);
      // ease-out-cubic
      const e = 1 - Math.pow(1 - t, 3);
      setProgress(pct * e);
      setNum(value * e);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, pct, animate]);

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r}
          stroke="rgba(82,183,136,0.12)" strokeWidth="8" fill="none" />
        <circle cx={size/2} cy={size/2} r={r}
          stroke={color} strokeWidth="8" fill="none" strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - progress)}
          transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: 'stroke 300ms ease-out' }} />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: Math.max(2, size * 0.02),
      }}>
        <div style={{
          fontFamily: FONT.serif,
          fontSize: size * 0.34,
          lineHeight: 0.85, /* tighten serif's natural extra leading so the number sits optically centered */
          color: C.forest,
          display: 'inline-flex',
          alignItems: 'baseline',
          fontFeatureSettings: '"lnum","tnum"',
          letterSpacing: '-0.01em',
        }}>
          <span style={{ display: 'inline-block' }}>{Math.floor(num)}</span>
          <span style={{
            fontSize: '0.46em',
            fontStyle: 'italic',
            color: C.sage,
            marginLeft: 2,
            letterSpacing: 0,
          }}>.{Math.floor((num % 1) * 10)}</span>
        </div>
        <div style={{
          fontFamily: FONT.sans, fontSize: Math.max(9, size * 0.055), fontWeight: 500,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: C.stone,
        }}>Biological years</div>
      </div>
    </div>
  );
}

// ─────────────── Lucide-style stroke icons (inline, scoped)
function Icon({ name, size = 24, color = 'currentColor', strokeWidth = 1.5 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    home:    (<><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V9.5z"/></>),
    camera:  (<><path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3.5"/></>),
    history: (<><path d="M3 12a9 9 0 109-9c-2.6 0-5 1.1-6.7 2.8L3 8"/><path d="M3 4v4h4"/><path d="M12 7v5l3 2"/></>),
    user:    (<><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></>),
    chevron: (<><path d="M9 6l6 6-6 6"/></>),
    close:   (<><path d="M6 6l12 12M18 6l-12 12"/></>),
    share:   (<><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><path d="M16 6l-4-4-4 4"/><path d="M12 2v13"/></>),
    bell:    (<><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9z"/><path d="M10 21a2 2 0 004 0"/></>),
    flash:   (<><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></>),
    chevDown:(<><path d="M6 9l6 6 6-6"/></>),
    arrUp:   (<><path d="M12 19V5M5 12l7-7 7 7"/></>),
    arrDown: (<><path d="M12 5v14M19 12l-7 7-7-7"/></>),
    check:   (<><path d="M20 6L9 17l-5-5"/></>),
    info:    (<><circle cx="12" cy="12" r="9"/><path d="M12 8v.01M12 11v5"/></>),
  };
  return <svg {...common}>{paths[name] || null}</svg>;
}

// ─────────────── Logo mark
function GlaucLogo({ size = 36, color = 'sage' }) {
  const src = {
    sage:   '../../assets/logo-g-sage.png',
    white:  '../../assets/logo-g-white.png',
    forest: '../../assets/logo-g-forest.png',
  }[color];
  return <img src={src} alt="Glauc" style={{ width: size, height: size, objectFit: 'contain', display: 'block' }} />;
}

// ─────────────── Bottom navigation
function BottomNav({ active, onChange }) {
  const tabs = [
    { id: 'home',    label: 'Home',    icon: 'home' },
    { id: 'check',   label: 'Check',   icon: 'camera' },
    { id: 'history', label: 'History', icon: 'history' },
    { id: 'profile', label: 'Profile', icon: 'user' },
  ];
  return (
    <div style={{
      height: 64, background: C.white,
      borderTop: `1px solid ${C.border}`,
      display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
      paddingBottom: 0,
    }}>
      {tabs.map(t => {
        const on = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} style={{
            background: 'transparent', border: 0, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 4, color: on ? C.forest : C.stone, padding: 6,
          }}>
            <Icon name={t.icon} size={22} color={on ? C.mint : C.stone} strokeWidth={on ? 1.8 : 1.5} />
            <span style={{
              fontFamily: FONT.sans, fontSize: 10, fontWeight: 500,
              letterSpacing: '0.04em', color: on ? C.forest : C.stone,
            }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─────────────── Primary button
function PrimaryButton({ children, onClick, full = false, disabled = false, variant = 'primary' }) {
  const bg = variant === 'primary' ? C.forest : variant === 'secondary' ? C.sage : 'transparent';
  const fg = variant === 'outline' ? C.forest : C.white;
  const border = variant === 'outline' ? `1.5px solid ${C.forest}` : 'none';
  return (
    <button onClick={disabled ? null : onClick} disabled={disabled} style={{
      background: bg, color: fg, border, borderRadius: 12,
      width: full ? '100%' : 'auto', height: 52, padding: '0 24px',
      fontFamily: FONT.sans, fontWeight: 500, fontSize: 16,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      transition: 'filter 100ms ease-out, transform 100ms ease-out',
    }}
    onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
    onMouseUp={e => e.currentTarget.style.transform = ''}
    onMouseLeave={e => e.currentTarget.style.transform = ''}
    >{children}</button>
  );
}

Object.assign(window, {
  GLAUC_C: C, GLAUC_FONT: FONT,
  RiskPill, BiomarkerRow, BioAgeRing, Icon, GlaucLogo, BottomNav, PrimaryButton,
});
