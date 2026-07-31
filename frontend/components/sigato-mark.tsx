export function SigatoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden="true">
      <path
        d="M18 18h40a16 16 0 0 1 16 16v28a16 16 0 0 1-16 16H34a16 16 0 0 0-16 16V18Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M78 18H38a16 16 0 0 0-16 16v28a16 16 0 0 0 16 16h24a16 16 0 0 1 16 16V18Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}
