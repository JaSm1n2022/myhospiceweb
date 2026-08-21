/**
 * Service icons — a single stroke weight and a shared 24-unit box so the
 * eight of them read as one family rather than eight borrowed glyphs.
 */
const paths = {
  staff: (
    <>
      <circle cx="10.3" cy="6.6" r="3.4" />
      <path d="M3.5 20.4a6.9 6.9 0 0 1 11.4-5.2" />
      <circle cx="17.3" cy="16.8" r="4.5" />
      <path d="M15.3 16.9l1.5 1.5 2.7-3" />
    </>
  ),
  plan: (
    <>
      <rect x="4.4" y="4.2" width="15.2" height="16.6" rx="2.7" />
      <path d="M9.2 4.2v-.8a1.5 1.5 0 0 1 1.5-1.5h2.6a1.5 1.5 0 0 1 1.5 1.5v.8z" />
      <path d="M12 17.2s-3.1-2-3.1-4a1.85 1.85 0 0 1 3.1-1.35A1.85 1.85 0 0 1 15.1 13.2c0 2-3.1 4-3.1 4z" />
    </>
  ),
  clock: (
    <>
      <path d="M20.6 12a8.6 8.6 0 1 1-2.7-6.2" />
      <path d="M18.6 2.2v3.8h-3.8" />
      <text
        x="11.6"
        y="14.7"
        textAnchor="middle"
        fontSize="6.6"
        fontWeight="600"
        fill="currentColor"
        stroke="none"
      >
        24/7
      </text>
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5l7.6 3v6.2c0 4.6-3.1 8.3-7.6 9.8-4.5-1.5-7.6-5.2-7.6-9.8V5.5z" />
      <path d="M8.6 11.9l2.5 2.6 4.4-4.7" />
    </>
  ),
  community: (
    <>
      <path d="M12 8.7s-2.9-1.8-2.9-3.6A1.75 1.75 0 0 1 12 3.8a1.75 1.75 0 0 1 2.9 1.3c0 1.8-2.9 3.6-2.9 3.6z" />
      <circle cx="12" cy="13.6" r="2.3" />
      <circle cx="5.5" cy="14.8" r="2" />
      <circle cx="18.5" cy="14.8" r="2" />
      <path d="M8.3 21.2a4 4 0 0 1 7.4 0" />
      <path d="M2 21.2a3.7 3.7 0 0 1 4.9-2.6M22 21.2a3.7 3.7 0 0 0-4.9-2.6" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9.1" r="5.9" />
      <path d="M12 5.7l1.2 2.4 2.6.4-1.9 1.8.45 2.6L12 11.7l-2.35 1.2.45-2.6L8.2 8.5l2.6-.4z" />
      <path d="M8.5 14.2L6.7 21.4 12 18.6l5.3 2.8-1.8-7.2" />
    </>
  ),
  physician: (
    <>
      <path d="M7 3v5a4 4 0 0 0 8 0V3" />
      <path d="M5.4 3h3.2M13.4 3h3.2" />
      <path d="M11 12v1.6a5.4 5.4 0 0 0 5.3 5.4" />
      <circle cx="18.9" cy="17.6" r="2.6" />
    </>
  ),
  nursing: (
    <>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5.2" />
      <path d="M12 8.4v7.2M8.4 12h7.2" />
    </>
  ),
  equipment: (
    <>
      <circle cx="13.2" cy="3.9" r="1.9" />
      <path d="M11.1 8.3h3.5v5.2h5" />
      <circle cx="11.4" cy="16" r="5.6" />
      <path d="M18.7 13.6l1.9 5.1" />
    </>
  ),
  aide: (
    <>
      <path d="M8.6 13.4V5.9a1.75 1.75 0 1 1 3.5 0v5.7" />
      <path d="M12.1 11.6V4.7a1.75 1.75 0 1 1 3.5 0v7" />
      <path d="M15.6 11.7V7.8a1.75 1.75 0 1 1 3.5 0V15a6.2 6.2 0 0 1-6.2 6.2h-1.1a6.2 6.2 0 0 1-4.5-1.9l-2.6-3.5a1.8 1.8 0 0 1 2.7-2.4l1.2 1.3" />
    </>
  ),
  social: (
    <>
      <circle cx="8.6" cy="8.1" r="3.1" />
      <circle cx="16.4" cy="9.6" r="2.4" />
      <path d="M2.9 19.6a5.7 5.7 0 0 1 11.4 0" />
      <path d="M15.4 14.7a4.7 4.7 0 0 1 5.7 4.9" />
    </>
  ),
  spiritual: (
    <>
      <path d="M12 21c-3.9 0-6.4-2.7-6.4-6.4C5.6 9.7 12 3 12 3s6.4 6.7 6.4 11.6c0 3.7-2.5 6.4-6.4 6.4z" />
      <path d="M12 21c-1.9 0-3.1-1.4-3.1-3.2 0-2.4 3.1-5.6 3.1-5.6s3.1 3.2 3.1 5.6c0 1.8-1.2 3.2-3.1 3.2z" />
    </>
  ),
  bereavement: (
    <path d="M12 20.4S3.4 15.1 3.4 9.1a4.7 4.7 0 0 1 8.6-2.7 4.7 4.7 0 0 1 8.6 2.7c0 6-8.6 11.3-8.6 11.3z" />
  ),
  volunteer: (
    <>
      <path d="M12 11.9s-3.3-2-3.3-4.2a2 2 0 0 1 3.3-1.4 2 2 0 0 1 3.3 1.4c0 2.2-3.3 4.2-3.3 4.2z" />
      <path d="M5.2 13.4V16a6.8 6.8 0 0 0 6.8 6.8h0A6.8 6.8 0 0 0 18.8 16v-2.6" />
      <path d="M5.2 13.4a2 2 0 0 0-2.1 2v1.4M18.8 13.4a2 2 0 0 1 2.1 2v1.4" />
    </>
  ),
}

export default function ServiceIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] ?? null}
    </svg>
  )
}
