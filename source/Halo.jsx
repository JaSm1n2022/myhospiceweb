import { useId } from 'react'

/**
 * The halo: an open ring of woven rays, drawn from the agency's logo mark.
 *
 * variant="ring" — the hero corona. Centre stays clear so the headline sits
 *   inside it. Rays fade in and out through a radial mask so the edge is soft
 *   rather than spiked. On load they draw outward from the top in both
 *   directions, then hold. This is the only orchestrated motion on the page.
 * variant="mark" — a small, high-contrast version for the logo lockup.
 */
export default function Halo({ variant = 'ring', animate = false, className = '' }) {
  const uid = useId().replace(/:/g, '')
  const C = 200

  if (variant === 'mark') {
    const rays = Array.from({ length: 16 }, (_, i) => {
      const theta = (i / 16) * Math.PI * 2 - Math.PI / 2
      const long = i % 4 === 0
      const r1 = long ? 186 : 132
      return {
        x1: C + Math.cos(theta) * 44,
        y1: C + Math.sin(theta) * 44,
        x2: C + Math.cos(theta) * r1,
        y2: C + Math.sin(theta) * r1,
        w: long ? 22 : 13,
        o: long ? 1 : 0.62,
      }
    })
    return (
      <svg className={`halo ${className}`} viewBox="0 0 400 400" aria-hidden="true" focusable="false">
        <g stroke="var(--gold)" fill="none" strokeLinecap="round">
          {rays.map((r, i) => (
            <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} strokeWidth={r.w} opacity={r.o} />
          ))}
        </g>
      </svg>
    )
  }

  const count = 84
  const inner = 106
  const rays = Array.from({ length: count }, (_, i) => {
    const t = i / count
    const theta = t * Math.PI * 2 - Math.PI / 2
    // Four soft lobes, echoing the cross woven into the mark.
    const lobe = Math.pow(Math.abs(Math.cos(2 * theta)), 2)
    const r1 = inner + 34 + 52 * lobe
    // Brightest at the crown, dissolving toward the base — light falling.
    const fall = 1 - 0.82 * Math.pow(Math.max(0, Math.sin(theta)), 1.1)
    return {
      x1: C + Math.cos(theta) * inner,
      y1: C + Math.sin(theta) * inner,
      x2: C + Math.cos(theta) * (inner + (r1 - inner) * (0.45 + 0.55 * fall)),
      y2: C + Math.sin(theta) * (inner + (r1 - inner) * (0.45 + 0.55 * fall)),
      w: i % 3 === 0 ? 1.6 : 0.9,
      o: (i % 3 === 0 ? 0.95 : 0.45) * fall,
      // The sweep starts at the top and travels both ways at once.
      delay: Math.min(t, 1 - t) * 2 * 0.9,
    }
  })

  return (
    <svg
      className={`halo ${animate ? 'halo--draw' : ''} ${className}`}
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`fade-${uid}`}>
          <stop offset="0.24" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.36" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="0.62" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id={`mask-${uid}`}>
          <rect x="0" y="0" width="400" height="400" fill={`url(#fade-${uid})`} />
        </mask>
      </defs>
      <g stroke="var(--gold)" fill="none" strokeLinecap="round" mask={`url(#mask-${uid})`}>
        {rays.map((r, i) => (
          <line
            key={i}
            x1={r.x1}
            y1={r.y1}
            x2={r.x2}
            y2={r.y2}
            strokeWidth={r.w}
            opacity={r.o}
            pathLength="1"
            style={{ animationDelay: `${r.delay}s` }}
          />
        ))}
        <circle cx={C} cy={C} r={inner - 14} strokeWidth="0.9" opacity="0.3" pathLength="1" />
        <circle cx={C} cy={C} r={196} strokeWidth="0.7" opacity="0.18" pathLength="1" />
      </g>
    </svg>
  )
}
