import React from "react";



export function LogoCloister(props) {

  const t = props.t;

  const k = 0.25 * Math.sqrt(2);

  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      viewBox="-1 -1 6 2"
    >
      <g
        stroke="black"
        fill="none"
      >
        <path
          strokeWidth={0.1}
          d={`
            M  0.15 -0.95 H  0.95 V -0.15
            M -0.15 -0.95 H -0.95 V -0.15
            M  0.15  0.95 H  0.95 V  0.15
            M -0.15  0.95 H -0.95 V  0.15
          `}
        />

        <path
          strokeWidth={0.05}
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray="0 0.2"
          d="M 0.7 0.7 V -0.7 H -0.7 V 0.7 Z"
        />

        <path
          strokeWidth={0.02}
          d="M 0 0.5 L 0.5 0 L 0 -0.5 L -0.5 0 Z"
        />

        <path
          strokeWidth={0.02}
          d={`M ${k} ${k} H ${-k} V ${-k} H ${k} Z`}
        />

        <path
        />
      </g>

      <text
        textAnchor="middle"
        alignmentBaseline="middle"
        dominantBaseline="central"
        fontFamily="Cloister"
        fontVariant="small-caps"
        x="3"
        y="0"
        fontSize="0.8"
        fill="black"
      >
        {t("cloister_name")}
      </text>

    </svg>
  )
}