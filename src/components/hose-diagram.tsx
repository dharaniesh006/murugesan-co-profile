export function HoseDiagram() {
  return (
    <svg
      viewBox="0 0 520 520"
      className="h-full w-full"
      role="img"
      aria-labelledby="hoseDiagramTitle"
    >
      <title id="hoseDiagramTitle">
        Cross-section diagram of a braided hydraulic hose, showing tube, braid reinforcement and cover layers
      </title>

      {/* outer cover */}
      <circle cx="260" cy="260" r="220" fill="none" stroke="#1E3049" strokeWidth="2" />
      <circle
        cx="260"
        cy="260"
        r="220"
        fill="none"
        stroke="#B5762C"
        strokeWidth="1.5"
        strokeDasharray="4 7"
        opacity="0.6"
      />

      {/* braid reinforcement layer, drawn as a woven ring */}
      <circle cx="260" cy="260" r="178" fill="none" stroke="#5B6B7C" strokeWidth="14" opacity="0.25" />
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i / 36) * Math.PI * 2;
        const x1 = 260 + 164 * Math.cos(angle);
        const y1 = 260 + 164 * Math.sin(angle);
        const x2 = 260 + 192 * Math.cos(angle + 0.24);
        const y2 = 260 + 192 * Math.sin(angle + 0.24);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={i % 2 === 0 ? "#D99A4E" : "#93A2AF"}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
        );
      })}

      {/* inner tube */}
      <circle cx="260" cy="260" r="120" fill="#152436" stroke="#5B6B7C" strokeWidth="2" />
      <circle cx="260" cy="260" r="86" fill="#0A1522" stroke="#B5762C" strokeWidth="2" />

      {/* bore */}
      <circle cx="260" cy="260" r="86" fill="none" stroke="#0A1522" />
      <circle cx="260" cy="260" r="52" fill="#0A1522" />

      {/* leader lines + labels */}
      <g stroke="#93A2AF" strokeWidth="1">
        <line x1="260" y1="174" x2="260" y2="60" />
        <line x1="345" y1="260" x2="470" y2="260" />
        <line x1="260" y1="346" x2="260" y2="470" />
      </g>
      <g fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="0.05em" fill="#EFEDE5">
        <text x="260" y="50" textAnchor="middle">BORE — FLUID PATH</text>
        <text x="480" y="264" textAnchor="start">BRAID REINFORCEMENT</text>
        <text x="260" y="490" textAnchor="middle">OUTER COVER</text>
      </g>

      <circle cx="260" cy="174" r="3" fill="#B5762C" />
      <circle cx="345" cy="260" r="3" fill="#B5762C" />
      <circle cx="260" cy="346" r="3" fill="#B5762C" />
    </svg>
  );
}
