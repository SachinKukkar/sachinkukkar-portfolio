import { motion } from 'framer-motion';
import type { Project } from '@/data/content';

/**
 * Generated cover art per project — no stock photography, no borrowed work.
 * Each one nods at what the project actually does.
 */

const VB = '0 0 480 300';

function Xray() {
  return (
    <svg viewBox={VB} className="size-full" role="img" aria-label="Radiograph with heatmap overlay">
      <defs>
        <linearGradient id="xr-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="1" stopColor="#16263d" />
        </linearGradient>
        <radialGradient id="xr-hot" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff4d4d" stopOpacity="0.85" />
          <stop offset="0.45" stopColor="#ffb020" stopOpacity="0.45" />
          <stop offset="1" stopColor="#ffb020" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="xr-bone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dbe9ff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#7f9dc4" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="url(#xr-bg)" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1={i * 40}
          y1="0"
          x2={i * 40}
          y2="300"
          stroke="#4a96ed"
          strokeOpacity="0.09"
        />
      ))}
      {/* forearm bones */}
      <path
        d="M186 34c-6 40-9 96-6 150 2 40 6 62 10 80h34c-5-30-8-64-8-104 0-46 3-90 8-126z"
        fill="url(#xr-bone)"
      />
      <path
        d="M246 36c8 42 12 98 10 152-1 40-4 60-8 76h32c4-28 7-62 7-102 0-48-5-92-13-126z"
        fill="url(#xr-bone)"
        opacity="0.88"
      />
      <ellipse cx="228" cy="252" rx="66" ry="22" fill="#cfe0f7" opacity="0.5" />
      {/* prediction heatmap */}
      <circle cx="252" cy="176" r="62" fill="url(#xr-hot)" />
      <rect
        x="206"
        y="132"
        width="94"
        height="90"
        rx="5"
        fill="none"
        stroke="#ff4d4d"
        strokeWidth="2.5"
        strokeDasharray="8 5"
      />
      <rect x="206" y="114" width="104" height="18" rx="3" fill="#ff4d4d" />
      <text x="212" y="127" fill="#fff" fontSize="11" fontFamily="monospace">
        abnormal 0.91
      </text>
      <g fontFamily="monospace" fontSize="10" fill="#8fb6e8">
        <text x="18" y="26">
          MURA · 58,412 studies
        </text>
        <text x="18" y="282">
          ROC-AUC 0.896 · TTA on
        </text>
      </g>
    </svg>
  );
}

function Roc() {
  const curve = 'M40 260 C 92 246, 96 120, 150 88 S 250 50, 330 44 L 430 40';
  const curve2 = 'M40 260 C 100 250, 118 150, 176 116 S 268 74, 340 66 L 430 60';
  return (
    <svg viewBox={VB} className="size-full" role="img" aria-label="ROC curves for two datasets">
      <defs>
        <linearGradient id="roc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6fbf7" />
          <stop offset="1" stopColor="#e4f3ea" />
        </linearGradient>
        <linearGradient id="roc-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#34c75a" stopOpacity="0.28" />
          <stop offset="1" stopColor="#34c75a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="url(#roc-bg)" />
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={i} stroke="#0d2e2e" strokeOpacity="0.09">
          <line x1="40" y1={40 + i * 44} x2="440" y2={40 + i * 44} />
          <line x1={40 + i * 80} y1="40" x2={40 + i * 80} y2="260" />
        </g>
      ))}
      <line x1="40" y1="260" x2="430" y2="40" stroke="#9bb0a6" strokeDasharray="6 6" />
      <path d={`${curve} L 430 260 L 40 260 Z`} fill="url(#roc-fill)" />
      <motion.path
        d={curve}
        fill="none"
        stroke="#34c75a"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />
      <motion.path
        d={curve2}
        fill="none"
        stroke="#8168fd"
        strokeWidth="2.5"
        strokeDasharray="7 5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.25, ease: 'easeOut' }}
      />
      <g fontFamily="monospace" fontSize="11">
        <circle cx="300" cy="96" r="4" fill="#34c75a" />
        <text x="312" y="100" fill="#0d2e2e">
          NIH ChestX-ray14 · 0.877
        </text>
        <circle cx="300" cy="118" r="4" fill="#8168fd" />
        <text x="312" y="122" fill="#0d2e2e">
          CheXpert · 0.822
        </text>
        <text x="40" y="284" fill="#5c7a6c" fontSize="10">
          false positive rate
        </text>
      </g>
    </svg>
  );
}

function Bbox() {
  return (
    <svg viewBox={VB} className="size-full" role="img" aria-label="Detected fracture bounding boxes">
      <defs>
        <linearGradient id="bb-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1b1a0e" />
          <stop offset="1" stopColor="#2c2a12" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="url(#bb-bg)" />
      <g stroke="#e8d210" strokeOpacity="0.1">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 32} x2="480" y2={i * 32} />
        ))}
      </g>
      {/* hand / finger bones */}
      <g fill="#f2ead0" opacity="0.92">
        <rect x="150" y="70" width="18" height="86" rx="9" />
        <rect x="182" y="52" width="19" height="104" rx="9.5" />
        <rect x="215" y="46" width="19" height="110" rx="9.5" />
        <rect x="248" y="58" width="18" height="98" rx="9" />
        <rect x="282" y="86" width="17" height="70" rx="8.5" transform="rotate(14 290 120)" />
        <path d="M148 158h156c6 44 2 74-6 92H158c-12-22-16-52-10-92Z" />
      </g>
      {[
        { x: 176, y: 44, w: 62, h: 62, s: '0.98' },
        { x: 268, y: 74, w: 48, h: 54, s: '0.94' },
      ].map((b, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.86 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.22, type: 'spring', stiffness: 180, damping: 14 }}
          style={{ transformOrigin: `${b.x + b.w / 2}px ${b.y + b.h / 2}px` }}
        >
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            fill="none"
            stroke="#e8d210"
            strokeWidth="3"
          />
          <rect x={b.x} y={b.y - 17} width="74" height="17" fill="#e8d210" />
          <text x={b.x + 5} y={b.y - 5} fontSize="11" fontFamily="monospace" fill="#1b1a0e">
            fx {b.s}
          </text>
        </motion.g>
      ))}
      <g fontFamily="monospace" fontSize="10" fill="#cbc287">
        <text x="18" y="26">
          Detectron2 · Faster R-CNN R101-FPN
        </text>
        <text x="18" y="282">
          F1 98.23 · P 97.57 · R 98.90
        </text>
      </g>
    </svg>
  );
}

function Quantum() {
  return (
    <svg viewBox={VB} className="size-full" role="img" aria-label="Quantum circuit diagram">
      <defs>
        <linearGradient id="q-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14102b" />
          <stop offset="1" stopColor="#241b4d" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="url(#q-bg)" />
      {[0, 1, 2].map((q) => {
        const y = 92 + q * 58;
        return (
          <g key={q}>
            <text x="24" y={y + 4} fontFamily="monospace" fontSize="12" fill="#b9a9ff">
              |q{q}⟩
            </text>
            <line x1="60" y1={y} x2="432" y2={y} stroke="#8168fd" strokeOpacity="0.45" />
            {[104, 186, 268].map((x, i) => (
              <g key={x}>
                <rect
                  x={x}
                  y={y - 17}
                  width="34"
                  height="34"
                  rx="7"
                  fill="#8168fd"
                  fillOpacity={0.16 + i * 0.1}
                  stroke="#8168fd"
                />
                <text
                  x={x + 17}
                  y={y + 5}
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize="13"
                  fill="#dcd4ff"
                >
                  {['H', 'X', 'H'][(i + q) % 3]}
                </text>
              </g>
            ))}
          </g>
        );
      })}
      {/* entangling links */}
      <g stroke="#ec68fd" strokeWidth="2">
        <line x1="352" y1="92" x2="352" y2="208" />
        <circle cx="352" cy="92" r="5" fill="#ec68fd" />
        <circle cx="352" cy="150" r="10" fill="none" />
        <line x1="342" y1="150" x2="362" y2="150" />
        <circle cx="352" cy="208" r="5" fill="#ec68fd" />
      </g>
      <g>
        <rect x="396" y="75" width="34" height="34" rx="7" fill="#fff" fillOpacity="0.9" />
        <path
          d="M404 99a9 9 0 0 1 18 0"
          fill="none"
          stroke="#241b4d"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line x1="413" y1="99" x2="421" y2="87" stroke="#241b4d" strokeWidth="2" />
      </g>
      <g fontFamily="monospace" fontSize="10" fill="#a394e6">
        <text x="24" y="28">
          Grover · Deutsch–Jozsa · QFT
        </text>
        <text x="24" y="278">
          pure NumPy — no Qiskit Aer
        </text>
      </g>
    </svg>
  );
}

function Wearable() {
  return (
    <svg viewBox={VB} className="size-full" role="img" aria-label="TENS wearable device and pulse">
      <defs>
        <linearGradient id="w-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fdf2fb" />
          <stop offset="1" stopColor="#f7dcf3" />
        </linearGradient>
        <linearGradient id="w-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f0d7f2" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="url(#w-bg)" />
      <circle cx="240" cy="150" r="104" fill="#ec68fd" opacity="0.08" />
      <circle cx="240" cy="150" r="74" fill="#ec68fd" opacity="0.08" />
      {/* device */}
      <rect
        x="150"
        y="92"
        width="180"
        height="116"
        rx="34"
        fill="url(#w-body)"
        stroke="#e2b8e4"
        strokeWidth="2"
      />
      <rect x="170" y="112" width="140" height="62" rx="12" fill="#221024" />
      <motion.path
        d="M180 146h20l8-20 12 40 11-28 9 16h60"
        fill="none"
        stroke="#ec68fd"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      <circle cx="240" cy="190" r="8" fill="#ec68fd" />
      <g stroke="#c98fce" strokeWidth="2" strokeLinecap="round">
        <path d="M150 128c-26 0-38 10-38 22s12 22 38 22" fill="none" />
        <path d="M330 128c26 0 38 10 38 22s-12 22-38 22" fill="none" />
      </g>
      <g fontFamily="monospace" fontSize="10" fill="#9c5aa2">
        <text x="20" y="28">
          TENS · transcutaneous nerve stimulation
        </text>
        <text x="20" y="280">
          MSME grant ₹15,00,000 · prototype v3
        </text>
      </g>
    </svg>
  );
}

function Nlp() {
  const tokens = ['theft', 'of', 'vehicle', 'at', 'night'];
  return (
    <svg viewBox={VB} className="size-full" role="img" aria-label="Text tokens mapped to IPC sections">
      <defs>
        <linearGradient id="n-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2f8ff" />
          <stop offset="1" stopColor="#dcebfb" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="url(#n-bg)" />
      {tokens.map((t, i) => (
        <g key={t}>
          <rect
            x="30"
            y={44 + i * 42}
            width={78}
            height="30"
            rx="8"
            fill="#fff"
            stroke="#a9cdf2"
          />
          <text x="69" y={63 + i * 42} textAnchor="middle" fontSize="12" fill="#1d4e79">
            {t}
          </text>
          <path
            d={`M112 ${59 + i * 42} C 160 ${59 + i * 42}, 172 150, 214 150`}
            fill="none"
            stroke="#039cfb"
            strokeOpacity="0.4"
          />
        </g>
      ))}
      <rect x="214" y="112" width="80" height="76" rx="14" fill="#039cfb" />
      <text x="254" y="146" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="monospace">
        TF-IDF
      </text>
      <text x="254" y="164" textAnchor="middle" fontSize="11" fill="#cbe8ff" fontFamily="monospace">
        + LogReg
      </text>
      {[
        { s: '379', p: '0.91', y: 78 },
        { s: '380', p: '0.74', y: 138 },
        { s: '457', p: '0.52', y: 198 },
      ].map((r, i) => (
        <g key={r.s}>
          <path
            d={`M296 150 C 330 150, 336 ${r.y + 17}, 362 ${r.y + 17}`}
            fill="none"
            stroke="#039cfb"
            strokeOpacity="0.55"
          />
          <rect
            x="362"
            y={r.y}
            width="92"
            height="34"
            rx="8"
            fill={i === 0 ? '#039cfb' : '#fff'}
            stroke="#039cfb"
          />
          <text
            x="374"
            y={r.y + 22}
            fontSize="12"
            fontFamily="monospace"
            fill={i === 0 ? '#fff' : '#1d4e79'}
          >
            IPC {r.s} · {r.p}
          </text>
        </g>
      ))}
      <text x="30" y="282" fontSize="10" fontFamily="monospace" fill="#5a86ad">
        87% accuracy · F1 0.85
      </text>
    </svg>
  );
}

const ART: Record<Project['art'], () => JSX.Element> = {
  xray: Xray,
  roc: Roc,
  bbox: Bbox,
  quantum: Quantum,
  wearable: Wearable,
  nlp: Nlp,
};

export function ProjectArt({ kind }: { kind: Project['art'] }) {
  const Art = ART[kind];
  return <Art />;
}
