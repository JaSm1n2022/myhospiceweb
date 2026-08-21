/**
 * Service icons — a single stroke weight and a shared 24-unit box so the
 * eight of them read as one family rather than eight borrowed glyphs.
 */
const paths = {
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
