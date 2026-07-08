// Screens.jsx — Glauc mobile screens
// Depends on Components.jsx globals: GLAUC_C, GLAUC_FONT, RiskPill, BiomarkerRow, BioAgeRing, Icon, GlaucLogo, PrimaryButton

const C = window.GLAUC_C;
const FONT = window.GLAUC_FONT;

// ─────────────── HomeScreen
function HomeScreen({ onCheck, onResult, lastScan }) {
  return (
    <div style={{
      flex: 1, background: C.cream,
      backgroundImage: "url('../../assets/texture-cream.jpg')",
      backgroundSize: 'cover', padding: '20px 22px 24px',
      overflow: 'auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <GlaucLogo size={32} color="sage" />
        <button style={{
          width: 36, height: 36, border: 0, background: 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <Icon name="bell" size={22} color={C.slate} />
        </button>
      </div>

      <div style={{ fontFamily: FONT.serif, fontSize: 30, lineHeight: 1.18, color: C.ink, marginBottom: 4 }}>
        Good morning, Sarvesh.
      </div>
      <div style={{ fontFamily: FONT.sans, fontSize: 14, color: C.slate, marginBottom: 22 }}>
        It's been <em style={{ fontFamily: FONT.serif }}>13 days</em> since your last scan.
      </div>

      {/* CTA card */}
      <div style={{
        background: C.forest, color: C.cream,
        backgroundImage: "url('../../assets/texture-forest.jpg')",
        backgroundSize: 'cover', backgroundBlendMode: 'overlay',
        borderRadius: 20, padding: '22px 22px 24px', marginBottom: 18,
        position: 'relative', overflow: 'hidden',
      }}>
        <img src="../../assets/logo-g-white.png" alt=""
          style={{ position: 'absolute', right: -10, top: -10, width: 110, opacity: 0.18 }} />
        <div style={{
          fontFamily: FONT.sans, fontSize: 11, fontWeight: 500,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'rgba(247,243,238,0.7)', marginBottom: 8,
        }}>Weekly scan</div>
        <div style={{ fontFamily: FONT.serif, fontSize: 24, lineHeight: 1.25, marginBottom: 16, maxWidth: 240 }}>
          Take a photo of your eye to update your panel.
        </div>
        <button onClick={onCheck} style={{
          background: C.mint, color: C.forest, border: 0, borderRadius: 12,
          padding: '0 22px', height: 46,
          fontFamily: FONT.sans, fontWeight: 500, fontSize: 15,
          display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer',
        }}>
          <Icon name="camera" size={18} color={C.forest} />
          Start scan
        </button>
      </div>

      {/* bio age summary */}
      <div onClick={onResult} style={{
        background: C.white, borderRadius: 20, padding: 20, marginBottom: 18,
        display: 'flex', alignItems: 'center', gap: 18, cursor: 'pointer',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}>
        <BioAgeRing size={108} value={31.2} chrono={36} animate={false} />
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: FONT.sans, fontSize: 11, fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: C.stone, marginBottom: 6,
          }}>Biological age</div>
          <div style={{ fontFamily: FONT.serif, fontSize: 22, lineHeight: 1.2, color: C.ink, marginBottom: 6 }}>
            <em>5 years</em> younger
          </div>
          <div style={{ fontFamily: FONT.sans, fontSize: 13, color: C.slate, lineHeight: 1.4 }}>
            vs your chronological age of 36.
          </div>
        </div>
        <Icon name="chevron" size={18} color={C.stone} />
      </div>

      {/* recent flags */}
      <div style={{
        fontFamily: FONT.sans, fontSize: 11, fontWeight: 500,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: C.stone, marginBottom: 10,
      }}>Latest panel · 13 days ago</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <BiomarkerRow label="Inflammation" sub="Slightly elevated" value="0.42" level="mod" percent={42} onClick={onResult} />
        <BiomarkerRow label="Oxidative Stress" sub="Within optimal range" value="0.18" level="low" percent={18} onClick={onResult} />
        <BiomarkerRow label="Neurodegeneration" sub="Consult a specialist" value="0.61" level="elev" percent={61} onClick={onResult} />
      </div>

      <div style={{ height: 8 }} />
    </div>
  );
}

// ─────────────── CaptureScreen — viewfinder
function CaptureScreen({ onCancel, onCapture }) {
  const [phase, setPhase] = React.useState('aiming'); // aiming, captured, processing
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (phase === 'processing') {
      let p = 0;
      const id = setInterval(() => {
        p += 12;
        setProgress(Math.min(100, p));
        if (p >= 100) { clearInterval(id); setTimeout(onCapture, 250); }
      }, 90);
      return () => clearInterval(id);
    }
  }, [phase, onCapture]);

  return (
    <div style={{
      flex: 1, background: '#0E1F17', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* top bar */}
      <div style={{
        position: 'absolute', top: 60, left: 0, right: 0, zIndex: 5,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 20px',
      }}>
        <button onClick={onCancel} style={{
          width: 40, height: 40, borderRadius: 20, border: 0, cursor: 'pointer',
          background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name="close" size={20} color="#fff" />
        </button>
        <div style={{
          padding: '6px 12px', borderRadius: 999, color: '#fff',
          background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)',
          fontFamily: FONT.sans, fontSize: 12, fontWeight: 500, letterSpacing: '0.04em',
        }}>Right eye · 1 of 2</div>
        <button style={{
          width: 40, height: 40, borderRadius: 20, border: 0, cursor: 'pointer',
          background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name="flash" size={18} color="#fff" />
        </button>
      </div>

      {/* viewfinder eye placeholder */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 280, height: 280, borderRadius: '50%',
          border: `2px solid ${C.mint}`, position: 'relative',
          boxShadow: '0 0 0 9999px rgba(0,0,0,0.45)',
        }}>
          {/* reticle marks */}
          {[0, 90, 180, 270].map(a => (
            <div key={a} style={{
              position: 'absolute', width: 16, height: 2, background: C.mint,
              top: '50%', left: '50%',
              transform: `translate(-50%,-50%) rotate(${a}deg) translateX(140px)`,
            }} />
          ))}
          {/* mock eye iris */}
          <div style={{
            position: 'absolute', inset: 40, borderRadius: '50%',
            background: 'radial-gradient(circle at 45% 40%, #6B4A2C 0%, #3B2918 60%, #1A1109 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#000' }} />
          </div>
        </div>
      </div>

      {/* hint */}
      <div style={{
        position: 'absolute', top: 130, left: 0, right: 0,
        textAlign: 'center', color: '#fff',
        fontFamily: FONT.serif, fontSize: 22, lineHeight: 1.3,
      }}>
        Hold steady.<br/>
        <span style={{ fontFamily: FONT.sans, fontSize: 14, opacity: 0.7 }}>
          We'll snap when your eye is centered.
        </span>
      </div>

      {/* processing overlay */}
      {phase === 'processing' && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', zIndex: 10,
        }}>
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <div style={{ fontFamily: FONT.serif, fontSize: 26, marginBottom: 16 }}>
              Analyzing<span className="dots">...</span>
            </div>
            <div style={{ width: 200, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 999, overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: C.mint, transition: 'width 90ms linear' }} />
            </div>
            <div style={{ fontFamily: FONT.mono, fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 12, letterSpacing: '0.06em' }}>
              {progress}% · 11 biomarkers
            </div>
          </div>
        </div>
      )}

      {/* shutter */}
      <div style={{
        position: 'absolute', bottom: 50, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 28,
      }}>
        <div style={{ width: 44, height: 44 }} />
        <button onClick={() => setPhase('processing')} style={{
          width: 78, height: 78, borderRadius: '50%', border: '4px solid #fff',
          background: phase === 'processing' ? C.mint : 'rgba(255,255,255,0.95)', cursor: 'pointer',
          transition: 'background 200ms ease-out',
        }} />
        <button style={{
          width: 44, height: 44, borderRadius: 22, border: 0, cursor: 'pointer',
          background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name="info" size={20} color="#fff" />
        </button>
      </div>
    </div>
  );
}

// ─────────────── ResultsScreen — the canonical "Your Scan Results" view
function ResultsScreen({ onBack }) {
  return (
    <div style={{
      flex: 1, background: C.cream,
      backgroundImage: "url('../../assets/texture-cream.jpg')",
      backgroundSize: 'cover', overflow: 'auto',
    }}>
      {/* header */}
      <div style={{
        padding: '20px 22px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <button onClick={onBack} style={{
          width: 36, height: 36, border: 0, background: 'transparent', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name="chevron" size={20} color={C.ink} style={{ transform: 'rotate(180deg)' }}/>
        </button>
        <GlaucLogo size={26} color="sage" />
      </div>

      <div style={{ padding: '12px 22px 8px' }}>
        <div style={{ fontFamily: FONT.serif, fontSize: 32, lineHeight: 1.1, color: C.ink }}>
          Your Scan Results
        </div>
        <div style={{ fontFamily: FONT.sans, fontSize: 13, color: C.stone, marginTop: 4 }}>
          Scanned today · 09:21 · <span style={{ fontFamily: FONT.mono }}>glc_8f3a9c</span>
        </div>
      </div>

      {/* bio age hero */}
      <div style={{
        margin: '14px 22px 0',
        background: C.forest, color: C.cream,
        backgroundImage: "url('../../assets/texture-forest.jpg')",
        backgroundSize: 'cover', backgroundBlendMode: 'overlay',
        borderRadius: 20, padding: 22, position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <BioAgeRing size={140} value={31.2} chrono={36} animate={true} />
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: FONT.sans, fontSize: 10, fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'rgba(247,243,238,0.6)', marginBottom: 6,
            }}>Biological age</div>
            <div style={{ fontFamily: FONT.serif, fontSize: 22, lineHeight: 1.18, color: C.cream }}>
              <em>5 years younger</em>
            </div>
            <div style={{ fontFamily: FONT.sans, fontSize: 12, color: 'rgba(247,243,238,0.7)', marginTop: 4 }}>
              vs chronological 36
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              background: C.mist, color: '#1F6B43', padding: '4px 10px',
              borderRadius: 999, fontFamily: FONT.mono, fontSize: 11,
              fontWeight: 500, marginTop: 12,
            }}>↓ 4.8 yr</div>
          </div>
        </div>
      </div>

      {/* risk panel */}
      <div style={{ padding: '22px 22px 8px' }}>
        <div style={{
          fontFamily: FONT.sans, fontSize: 11, fontWeight: 500,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: C.stone, marginBottom: 12,
        }}>Disease risk panel · 11 biomarkers</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <BiomarkerRow label="Inflammation" sub="Slightly elevated · recheck 30d" level="mod" percent={42} />
          <BiomarkerRow label="Oxidative Stress" sub="Within optimal range" level="low" percent={18} />
          <BiomarkerRow label="Neurodegeneration" sub="Consult a specialist" level="elev" percent={61} />
          <BiomarkerRow label="Cardiovascular" sub="Within optimal range" level="low" percent={22} />
          <BiomarkerRow label="Metabolic" sub="Slightly elevated" level="mod" percent={38} />
          <BiomarkerRow label="Systemic Aging" sub="Within optimal range" level="low" percent={26} />
        </div>
      </div>

      {/* validation footer */}
      <div style={{ padding: '20px 22px 24px' }}>
        <div style={{
          background: C.white, borderRadius: 16, padding: '14px 16px',
          display: 'flex', gap: 12, alignItems: 'flex-start',
          border: `1px solid ${C.border}`,
        }}>
          <svg width="22" height="26" viewBox="0 0 24 28" style={{ flexShrink: 0, marginTop: 2 }}>
            <path d="M2 2 H22 V18 C22 22, 17 26, 12 27 C7 26, 2 22, 2 18 Z" fill="#A51C30"/>
            <text x="12" y="17" fontFamily="DM Serif Display, serif" fontSize="11" fill="#fff" textAnchor="middle" fontWeight="700">VE</text>
          </svg>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 10, fontWeight: 500,
              letterSpacing: '0.04em', textTransform: 'uppercase', color: C.ink,
            }}>Harvard Medical School Validated</div>
            <div style={{ fontFamily: FONT.sans, fontSize: 11, color: C.stone, marginTop: 6, lineHeight: 1.5 }}>
              FDA Class I General Wellness Device. Not a diagnostic tool. Clinical judgment required.
            </div>
          </div>
        </div>
        <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
          <PrimaryButton variant="primary" full={false} onClick={() => {}}>
            <Icon name="share" size={18} color="#fff" /> Share with clinician
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

// ─────────────── HistoryScreen
function HistoryScreen() {
  const data = [
    { date: 'May 24',  bio: 31.2, delta: -4.8 },
    { date: 'May 11',  bio: 31.6, delta: -4.4 },
    { date: 'Apr 27',  bio: 32.1, delta: -3.9 },
    { date: 'Apr 13',  bio: 32.0, delta: -4.0 },
    { date: 'Mar 30',  bio: 33.4, delta: -2.6 },
    { date: 'Mar 16',  bio: 34.1, delta: -1.9 },
    { date: 'Mar 02',  bio: 34.8, delta: -1.2 },
  ];
  // simple sparkline
  const W = 320, H = 130;
  const xs = data.map((_, i) => 16 + i * ((W - 32) / (data.length - 1)));
  const ys = data.map(d => H - 20 - ((34.8 - d.bio) / (34.8 - 31)) * (H - 40));
  const pts = xs.map((x, i) => `${x},${ys[i]}`).join(' ');

  return (
    <div style={{
      flex: 1, background: C.cream,
      backgroundImage: "url('../../assets/texture-cream.jpg')",
      backgroundSize: 'cover', padding: '20px 22px 24px', overflow: 'auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div style={{ fontFamily: FONT.serif, fontSize: 30, color: C.ink }}>History</div>
        <GlaucLogo size={26} color="sage" />
      </div>

      <div style={{
        background: C.white, borderRadius: 20, padding: 18, marginBottom: 18,
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <div style={{
          fontFamily: FONT.sans, fontSize: 11, fontWeight: 500,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: C.stone, marginBottom: 4,
        }}>Biological age trend</div>
        <div style={{ fontFamily: FONT.serif, fontSize: 26, color: C.ink, marginBottom: 12 }}>
          12 weeks · <em style={{ color: '#1F6B43' }}>−3.6 yr</em>
        </div>
        <svg width={W} height={H} style={{ display: 'block' }}>
          {/* chronological reference */}
          <line x1={16} x2={W-16} y1={20} y2={20} stroke={C.stone} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
          <text x={W-16} y={14} fontFamily={FONT.sans} fontSize="9" fill={C.stone} textAnchor="end">CHRONO 36</text>
          {/* line */}
          <polyline points={pts} fill="none" stroke={C.mint} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* points */}
          {xs.map((x, i) => (
            <circle key={i} cx={x} cy={ys[i]} r="4" fill={C.forest} />
          ))}
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, fontFamily: FONT.mono, fontSize: 10, color: C.stone }}>
          <span>Mar 02</span><span>May 24</span>
        </div>
      </div>

      {/* timeline list */}
      <div style={{
        fontFamily: FONT.sans, fontSize: 11, fontWeight: 500,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: C.stone, marginBottom: 8,
      }}>All scans · {data.length}</div>

      <div style={{ background: C.white, borderRadius: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
        {data.map((d, i) => (
          <div key={d.date} style={{
            padding: '14px 16px',
            borderTop: i ? `1px solid ${C.border}` : 'none',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer',
          }}>
            <div>
              <div style={{ fontFamily: FONT.sans, fontWeight: 500, fontSize: 14, color: C.ink }}>{d.date}, 2026</div>
              <div style={{ fontFamily: FONT.sans, fontSize: 12, color: C.stone, marginTop: 1 }}>
                <span style={{ fontFamily: FONT.mono }}>{d.bio.toFixed(1)}</span> bio yr · {d.delta < 0 ? 'younger' : 'older'}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 2,
                background: d.delta < 0 ? C.mist : C.amberLight,
                color: d.delta < 0 ? '#1F6B43' : C.amber,
                padding: '3px 8px', borderRadius: 999,
                fontFamily: FONT.mono, fontSize: 11, fontWeight: 500,
              }}>
                {d.delta > 0 ? '↑' : '↓'} {Math.abs(d.delta).toFixed(1)}
              </span>
              <Icon name="chevron" size={16} color={C.stone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────── ProfileScreen
function ProfileScreen() {
  return (
    <div style={{
      flex: 1, background: C.cream,
      backgroundImage: "url('../../assets/texture-cream.jpg')",
      backgroundSize: 'cover', padding: '20px 22px 24px', overflow: 'auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
        <div style={{ fontFamily: FONT.serif, fontSize: 30, color: C.ink }}>Profile</div>
        <GlaucLogo size={26} color="sage" />
      </div>

      {/* avatar block */}
      <div style={{
        background: C.white, borderRadius: 20, padding: '22px',
        textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        marginBottom: 18,
      }}>
        <div style={{
          width: 88, height: 88, borderRadius: '50%', margin: '0 auto 12px',
          background: `linear-gradient(135deg, ${C.mint} 0%, ${C.sage} 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontFamily: FONT.serif, fontSize: 36,
        }}>S</div>
        <div style={{ fontFamily: FONT.serif, fontSize: 24, color: C.ink }}>Sarvesh Ramakrishnan</div>
        <div style={{ fontFamily: FONT.sans, fontSize: 13, color: C.stone, marginTop: 2 }}>32 · sarvesh@glauc.co</div>
      </div>

      {/* sections */}
      {[
        { ttl: 'Personal', items: [['Date of birth', 'Mar 14, 1993'], ['Sex assigned at birth', 'Male'], ['Ethnicity', 'South Asian']] },
        { ttl: 'Care team', items: [['Primary clinician', 'Dr. Lucas Trigler'], ['Plan', 'Glauc Pro · annual'], ['Pharmacy', 'Walgreens · Cambridge']] },
        { ttl: 'Settings', items: [['Notifications', 'Weekly'], ['Share anonymized data', 'On'], ['Sign out', '']] },
      ].map(sec => (
        <div key={sec.ttl} style={{ marginBottom: 14 }}>
          <div style={{
            fontFamily: FONT.sans, fontSize: 11, fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: C.stone, margin: '0 4px 8px',
          }}>{sec.ttl}</div>
          <div style={{ background: C.white, borderRadius: 20, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            {sec.items.map((it, i) => (
              <div key={it[0]} style={{
                padding: '14px 16px',
                borderTop: i ? `1px solid ${C.border}` : 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontFamily: FONT.sans, fontSize: 14, color: C.ink }}>{it[0]}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontFamily: FONT.sans, fontSize: 13, color: C.slate }}>{it[1]}</span>
                  <Icon name="chevron" size={14} color={C.stone} />
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ height: 8 }} />
      <div style={{ fontFamily: FONT.sans, fontSize: 11, color: C.stone, textAlign: 'center', lineHeight: 1.55 }}>
        Glauc v1.2.0 · FDA Class I General Wellness Device.<br/>
        Not a diagnostic tool.
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, CaptureScreen, ResultsScreen, HistoryScreen, ProfileScreen });
