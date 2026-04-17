const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export function IconSymbol({ name, className = "h-5 w-5" }) {
  const shared = { ...iconProps, className };

  switch (name) {
    case "solar":
      return (
        <svg {...shared}>
          <path d="M4 15h16l-2 5H6l-2-5Z" />
          <path d="M7 15l1.2-5h7.6l1.2 5" />
          <path d="M12 3v4" />
          <path d="m5.6 5.6 2.8 2.8" />
          <path d="m18.4 5.6-2.8 2.8" />
        </svg>
      );
    case "battery":
      return (
        <svg {...shared}>
          <rect x="3" y="7" width="16" height="10" rx="2" />
          <path d="M19 10h2v4h-2" />
          <path d="M7 12h4" />
          <path d="M9 10v4" />
        </svg>
      );
    case "charging":
      return (
        <svg {...shared}>
          <path d="M9 4h5a2 2 0 0 1 2 2v14H7V6a2 2 0 0 1 2-2Z" />
          <path d="M10 9h4" />
          <path d="M12 9v3" />
          <path d="M16 8h1a2 2 0 0 1 2 2v4" />
        </svg>
      );
    case "grid":
      return (
        <svg {...shared}>
          <path d="M4 20h16" />
          <path d="M7 20V8l5-4 5 4v12" />
          <path d="M12 4v16" />
          <path d="M7 9h10" />
          <path d="M7 14h10" />
        </svg>
      );
    case "supply":
      return (
        <svg {...shared}>
          <path d="M4 7h11l5 5v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
          <path d="M15 7v5h5" />
          <path d="M8 12h4" />
          <path d="M8 16h7" />
        </svg>
      );
    case "location":
      return (
        <svg {...shared}>
          <path d="M12 21s6-4.6 6-10a6 6 0 1 0-12 0c0 5.4 6 10 6 10Z" />
          <circle cx="12" cy="11" r="2.2" />
        </svg>
      );
    case "mail":
      return (
        <svg {...shared}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...shared}>
          <path d="M12 3 5 6v5c0 5 3.4 8.1 7 10 3.6-1.9 7-5 7-10V6l-7-3Z" />
          <path d="m9.2 11.6 1.9 1.9 3.7-4.1" />
        </svg>
      );
    case "globe":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    case "layers":
      return (
        <svg {...shared}>
          <path d="m12 4 8 4-8 4-8-4 8-4Z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 16 8 4 8-4" />
        </svg>
      );
    case "box":
      return (
        <svg {...shared}>
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
          <path d="m12 12 8-4.5" />
          <path d="M12 12v9" />
          <path d="M12 12 4 7.5" />
        </svg>
      );
    case "factory":
      return (
        <svg {...shared}>
          <path d="M3 20V8l6 3V8l6 3V4h6v16H3Z" />
          <path d="M7 20v-4" />
          <path d="M17 8h2" />
        </svg>
      );
    case "building":
      return (
        <svg {...shared}>
          <path d="M4 20V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
          <path d="M16 20V10h2a2 2 0 0 1 2 2v8" />
          <path d="M8 8h4" />
          <path d="M8 12h4" />
          <path d="M8 16h4" />
        </svg>
      );
    case "chart":
      return (
        <svg {...shared}>
          <path d="M4 20h16" />
          <path d="M7 16v-4" />
          <path d="M12 16V8" />
          <path d="M17 16v-7" />
        </svg>
      );
    case "checklist":
      return (
        <svg {...shared}>
          <path d="M9 6h10" />
          <path d="M9 12h10" />
          <path d="M9 18h10" />
          <path d="m4.5 6 1.2 1.2L7.8 5" />
          <path d="m4.5 12 1.2 1.2L7.8 11" />
          <path d="m4.5 18 1.2 1.2L7.8 17" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...shared}>
          <rect x="3" y="4" width="6" height="6" rx="1.2" />
          <rect x="15" y="4" width="6" height="6" rx="1.2" />
          <rect x="9" y="14" width="6" height="6" rx="1.2" />
          <path d="M9 7h6" />
          <path d="M12 10v4" />
        </svg>
      );
    default:
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 3" />
        </svg>
      );
  }
}
