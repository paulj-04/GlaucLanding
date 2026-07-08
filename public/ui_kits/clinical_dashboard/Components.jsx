// ClinicalComponents.jsx — Glauc web dashboard pieces
const CC = {
  forest: '#1A3A2A', sage: '#2D6A4F', mint: '#52B788', mist: '#D8F3DC',
  ink: '#1A1A18', slate: '#4A5568', stone: '#718096', border: '#E2DDD8',
  cream: '#F7F3EE', white: '#FFFFFF', light: '#F4F5F6',
  amber: '#C97D2E', amberLight: '#FDF0DF',
  red: '#C0392B', redLight: '#FDF0EF',
  crimson: '#8B0000', crimsonLight: '#FDE8E8',
};
const CFONT = {
  serif: "'DM Serif Display', Georgia, serif",
  sans:  "'DM Sans', -apple-system, system-ui, sans-serif",
  mono:  "'DM Mono', ui-monospace, Menlo, monospace",
};

// ─────────── Icon (lucide-style)
function CIcon({ name, size = 20, color = 'currentColor', strokeWidth = 1.5 }) {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const p = {
    grid:    (<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>),
    users:   (<><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3 3-5.5 6.5-5.5s6.5 2.5 6.5 5.5"/><circle cx="17" cy="6" r="2.5"/><path d="M21 14c0-2-1.5-3.5-4-3.5"/></>),
    flask:   (<><path d="M9 3v6L4 19a2 2 0 002 2h12a2 2 0 002-2L15 9V3"/><path d="M8 3h8"/></>),
    chart:   (<><path d="M3 3v18h18"/><path d="M7 14l4-4 4 3 5-6"/></>),
    book:    (<><path d="M4 5a2 2 0 012-2h14v18H6a2 2 0 01-2-2V5z"/><path d="M4 19a2 2 0 012-2h14"/></>),
    cog:     (<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 01-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 01-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 012.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 012.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"/></>),
    search:  (<><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>),
    bell:    (<><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9z"/><path d="M10 21a2 2 0 004 0"/></>),
    arrUp:   (<><path d="M12 19V5M5 12l7-7 7 7"/></>),
    arrDown: (<><path d="M12 5v14M19 12l-7 7-7-7"/></>),
    minus:   (<><path d="M5 12h14"/></>),
    plus:    (<><path d="M12 5v14M5 12h14"/></>),
    download:(<><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></>),
    filter:  (<><path d="M3 4h18l-7 8v7l-4-2v-5L3 4z"/></>),
    eye:     (<><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></>),
    chevron: (<><path d="M9 6l6 6-6 6"/></>),
  };
  return <svg {...props}>{p[name] || null}</svg>;
}

// ─────────── Sidebar
function Sidebar({ active = 'overview' }) {
  const items = [
    { id: 'overview', label: 'Overview',     icon: 'grid' },
    { id: 'patients', label: 'Patients',     icon: 'users' },
    { id: 'panels',   label: 'Scan panels',  icon: 'flask' },
    { id: 'trends',   label: 'Trends',       icon: 'chart' },
    { id: 'research', label: 'Research',     icon: 'book' },
    { id: 'settings', label: 'Settings',     icon: 'cog' },
  ];
  return (
    <aside style={{
      width: 240, background: CC.forest, color: CC.cream,
      backgroundImage: "url('../../assets/texture-forest.jpg')",
      backgroundSize: 'cover', backgroundBlendMode: 'overlay',
      display: 'flex', flexDirection: 'column', flexShrink: 0,
    }}>
      <div style={{ height: 64, padding: '0 22px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <img src="../../assets/logo-g-white.png" alt="" style={{ width: 26, height: 26 }} />
        <div style={{ fontFamily: CFONT.serif, fontSize: 22, lineHeight: 1, color: CC.cream }}>Glauc</div>
        <div style={{
          marginLeft: 'auto', fontFamily: CFONT.mono, fontSize: 9,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'rgba(247,243,238,0.6)', padding: '3px 7px',
          background: 'rgba(255,255,255,0.08)', borderRadius: 999,
        }}>Clinic</div>
      </div>

      <nav style={{ padding: '14px 12px', flex: 1 }}>
        {items.map(it => {
          const on = active === it.id;
          return (
            <div key={it.id} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 12px', borderRadius: 6, cursor: 'pointer',
              color: on ? CC.cream : 'rgba(247,243,238,0.7)',
              background: on ? 'rgba(82,183,136,0.18)' : 'transparent',
              borderLeft: on ? `3px solid ${CC.mint}` : '3px solid transparent',
              fontFamily: CFONT.sans, fontSize: 14, fontWeight: on ? 500 : 400,
              transition: 'all 200ms ease-out',
            }}>
              <CIcon name={it.icon} size={18} color={on ? CC.mint : 'rgba(247,243,238,0.75)'} />
              {it.label}
            </div>
          );
        })}
      </nav>

      <div style={{ padding: '14px 18px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: `linear-gradient(135deg, ${CC.mint}, ${CC.sage})`,
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: CFONT.serif, fontSize: 14,
          }}>LT</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: CFONT.sans, fontSize: 13, fontWeight: 500, color: CC.cream }}>Dr. L. Trigler</div>
            <div style={{ fontFamily: CFONT.sans, fontSize: 11, color: 'rgba(247,243,238,0.55)' }}>Childrens' Eye Care</div>
          </div>
          <CIcon name="chevron" size={14} color="rgba(247,243,238,0.5)" />
        </div>
      </div>
    </aside>
  );
}

// ─────────── Top bar
function TopBar({ title }) {
  return (
    <header style={{
      height: 64, padding: '0 32px',
      display: 'flex', alignItems: 'center', gap: 16,
      borderBottom: `1px solid ${CC.border}`, background: CC.white,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        height: 36, padding: '0 12px',
        border: `1px solid ${CC.border}`, borderRadius: 4,
        width: 280, color: CC.stone,
      }}>
        <CIcon name="search" size={16} color={CC.stone} />
        <input placeholder="Search patients, scans..." style={{
          border: 0, outline: 0, flex: 1, background: 'transparent',
          fontFamily: CFONT.sans, fontSize: 13, color: CC.ink,
        }} />
        <span style={{
          fontFamily: CFONT.mono, fontSize: 10, color: CC.stone,
          padding: '2px 6px', border: `1px solid ${CC.border}`, borderRadius: 3,
        }}>⌘K</span>
      </div>
      <div style={{ flex: 1 }} />
      <button style={{
        height: 36, padding: '0 14px', border: `1px solid ${CC.border}`,
        background: CC.white, borderRadius: 4, cursor: 'pointer',
        fontFamily: CFONT.sans, fontSize: 13, fontWeight: 500, color: CC.ink,
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <CIcon name="download" size={14} color={CC.slate} />
        Export
      </button>
      <button style={{
        width: 36, height: 36, border: `1px solid ${CC.border}`, background: CC.white,
        borderRadius: 4, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <CIcon name="bell" size={16} color={CC.slate} />
        <span style={{ position: 'absolute', top: 7, right: 8, width: 6, height: 6, borderRadius: '50%', background: CC.red }} />
      </button>
    </header>
  );
}

// ─────────── KPI metric card
function MetricCard({ label, value, sub, trend, unit }) {
  const colorMap = { up: CC.red, down: '#1F6B43', flat: CC.stone };
  const arrows = { up: 'arrUp', down: 'arrDown', flat: 'minus' };
  return (
    <div style={{
      background: CC.white, border: `1px solid ${CC.border}`, borderRadius: 4,
      padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.04)', minWidth: 0,
    }}>
      <div style={{
        fontFamily: CFONT.sans, fontSize: 11, fontWeight: 500,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: CC.stone, marginBottom: 8,
      }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <div style={{ fontFamily: CFONT.serif, fontSize: 36, color: CC.ink, lineHeight: 1 }}>{value}</div>
        {unit && <div style={{ fontFamily: CFONT.sans, fontSize: 14, color: CC.stone }}>{unit}</div>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 12, fontFamily: CFONT.mono, fontSize: 11, color: colorMap[trend?.dir || 'flat'] }}>
        {trend && (
          <>
            <CIcon name={arrows[trend.dir]} size={12} color={colorMap[trend.dir]} />
            <span>{trend.text}</span>
          </>
        )}
        <span style={{ color: CC.stone }}>{sub}</span>
      </div>
    </div>
  );
}

// ─────────── Patient row table
function PatientTable({ rows }) {
  return (
    <div style={{
      background: CC.white, border: `1px solid ${CC.border}`, borderRadius: 4,
      overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.6fr 0.8fr 0.8fr 1fr 1fr 1.4fr 80px',
        padding: '10px 20px', borderBottom: `1px solid ${CC.border}`,
        fontFamily: CFONT.sans, fontSize: 11, fontWeight: 500,
        letterSpacing: '0.08em', textTransform: 'uppercase', color: CC.stone,
      }}>
        <span>Patient</span><span>Chrono</span><span>Bio age</span><span>Δ</span><span>Last scan</span><span>Top flag</span><span></span>
      </div>
      {rows.map((r, i) => (
        <div key={r.id} style={{
          display: 'grid', gridTemplateColumns: '1.6fr 0.8fr 0.8fr 1fr 1fr 1.4fr 80px',
          padding: '14px 20px', alignItems: 'center',
          borderBottom: i < rows.length - 1 ? `1px solid ${CC.border}` : 'none',
          fontFamily: CFONT.sans, fontSize: 13, color: CC.ink, cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 30, height: 30, borderRadius: '50%',
              background: r.bg, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: CFONT.serif, fontSize: 13,
            }}>{r.initials}</div>
            <div>
              <div style={{ fontWeight: 500 }}>{r.name}</div>
              <div style={{ fontFamily: CFONT.mono, fontSize: 11, color: CC.stone }}>{r.id}</div>
            </div>
          </div>
          <span style={{ fontFamily: CFONT.mono, fontSize: 13 }}>{r.chrono}</span>
          <span style={{ fontFamily: CFONT.serif, fontSize: 16, color: CC.ink }}>{r.bio.toFixed(1)}</span>
          <span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 2,
              padding: '3px 8px', borderRadius: 999,
              fontFamily: CFONT.mono, fontSize: 11, fontWeight: 500,
              background: r.delta < 0 ? CC.mist : (r.delta > 2 ? CC.amberLight : CC.light),
              color: r.delta < 0 ? '#1F6B43' : (r.delta > 2 ? CC.amber : CC.slate),
            }}>{r.delta > 0 ? '↑' : '↓'} {Math.abs(r.delta).toFixed(1)} yr</span>
          </span>
          <span style={{ fontFamily: CFONT.sans, fontSize: 12, color: CC.slate }}>{r.lastScan}</span>
          <span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', padding: '3px 8px', borderRadius: 999,
              fontFamily: CFONT.mono, fontSize: 10, fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              background: r.flagColor.bg, color: r.flagColor.fg,
            }}>{r.flag}</span>
          </span>
          <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CIcon name="chevron" size={16} color={CC.stone} />
          </span>
        </div>
      ))}
    </div>
  );
}

// ─────────── Population risk distribution (stacked horiz bar)
function RiskDistribution({ data, total }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', height: 36, borderRadius: 4, overflow: 'hidden', border: `1px solid ${CC.border}` }}>
        {data.map(d => (
          <div key={d.label} style={{
            width: `${(d.value / total) * 100}%`, background: d.color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: d.fg || '#fff', fontFamily: CFONT.mono, fontSize: 11, fontWeight: 500,
          }}>
            {Math.round((d.value / total) * 100)}%
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
        {data.map(d => (
          <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: d.color }} />
            <span style={{ fontFamily: CFONT.sans, fontSize: 12, color: CC.slate }}>{d.label}</span>
            <span style={{ fontFamily: CFONT.mono, fontSize: 11, color: CC.stone }}>{d.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────── Trend chart (cohort vs individual)
function TrendChart({ cohort, w = 520, h = 220 }) {
  const xs = cohort.map((_, i) => 40 + i * ((w - 56) / (cohort.length - 1)));
  const minY = Math.min(...cohort.flatMap(d => [d.bio, d.cohort])) - 1;
  const maxY = Math.max(...cohort.flatMap(d => [d.bio, d.cohort])) + 1;
  const y = (v) => 20 + ((maxY - v) / (maxY - minY)) * (h - 50);
  const yBio = cohort.map(d => y(d.bio));
  const yCoh = cohort.map(d => y(d.cohort));
  const ptsBio = xs.map((x, i) => `${x},${yBio[i]}`).join(' ');
  const ptsCoh = xs.map((x, i) => `${x},${yCoh[i]}`).join(' ');

  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      {/* y-axis labels */}
      {[minY, (minY+maxY)/2, maxY].map((v, i) => (
        <g key={i}>
          <line x1="36" x2={w-16} y1={y(v)} y2={y(v)} stroke={CC.border} strokeDasharray="2 4" />
          <text x="30" y={y(v)+3} fontFamily={CFONT.mono} fontSize="10" fill={CC.stone} textAnchor="end">{v.toFixed(0)}</text>
        </g>
      ))}
      {/* cohort */}
      <polyline points={ptsCoh} fill="none" stroke={CC.stone} strokeWidth="1.5" strokeDasharray="4 4" />
      {/* bio */}
      <polyline points={ptsBio} fill="none" stroke={CC.mint} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {xs.map((x, i) => (
        <circle key={i} cx={x} cy={yBio[i]} r="4" fill={CC.forest} />
      ))}
      {/* x labels */}
      {cohort.map((d, i) => (
        <text key={i} x={xs[i]} y={h-6} fontFamily={CFONT.mono} fontSize="10" fill={CC.stone} textAnchor="middle">{d.label}</text>
      ))}
    </svg>
  );
}

// ─────────── Biomarker radar
function RadarChart({ size = 240, data }) {
  const PAD = 56; // extra room for labels at the horizontal extremes
  const cx = size/2, cy = size/2, R = size/2 - PAD;
  const n = data.length;
  const pts = data.map((d, i) => {
    const a = -Math.PI/2 + (i * 2*Math.PI / n);
    const r = R * d.value;
    return [cx + r*Math.cos(a), cy + r*Math.sin(a)];
  });
  const grid = [0.25, 0.5, 0.75, 1].map(f => {
    return data.map((_, i) => {
      const a = -Math.PI/2 + (i * 2*Math.PI / n);
      return [cx + R*f*Math.cos(a), cy + R*f*Math.sin(a)];
    });
  });
  return (
    <svg width={size} height={size} style={{ display: 'block' }}>
      {grid.map((ring, idx) => (
        <polygon key={idx} points={ring.map(p => p.join(',')).join(' ')} fill="none" stroke={CC.border} strokeWidth="1" />
      ))}
      {/* spokes */}
      {data.map((_, i) => {
        const a = -Math.PI/2 + (i * 2*Math.PI / n);
        return <line key={i} x1={cx} y1={cy} x2={cx + R*Math.cos(a)} y2={cy + R*Math.sin(a)} stroke={CC.border}/>;
      })}
      {/* polygon */}
      <polygon points={pts.map(p => p.join(',')).join(' ')} fill="rgba(82,183,136,0.18)" stroke={CC.mint} strokeWidth="2" />
      {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="4" fill={CC.forest} />)}
      {/* labels */}
      {data.map((d, i) => {
        const a = -Math.PI/2 + (i * 2*Math.PI / n);
        const r = R + 16;
        const x = cx + r*Math.cos(a), y = cy + r*Math.sin(a);
        return <text key={i} x={x} y={y+3} fontFamily={CFONT.sans} fontSize="10" fill={CC.slate}
          fontWeight={500} textAnchor={x < cx-1 ? 'end' : (x > cx+1 ? 'start' : 'middle')}>
          {d.label}
        </text>;
      })}
    </svg>
  );
}

Object.assign(window, {
  CC, CFONT, CIcon, Sidebar, TopBar, MetricCard, PatientTable, RiskDistribution, TrendChart, RadarChart,
});
