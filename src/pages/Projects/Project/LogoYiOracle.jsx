import React from "react";



export function LogoYiOracle(props) {

  const t = props.t;

  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 6 1"
      // className="Logo__img"
    >
      <defs>
        <linearGradient 
          id="logoGrad1"
          x1="0%" y1="20%" x2="100%" y2="80%"
        >
          <stop offset="0.0" stopColor="crimson"/>
          <stop offset="0.5" stopColor="deeppink"/>
          <stop offset="1.0" stopColor="darkviolet"/>
        </linearGradient>
        <linearGradient 
          id="logoGrad2"
          x1="0%" y1="0%" x2="100%" y2="0%"
        >
          <stop offset="0.0" stopColor="yellow"/>
          <stop offset="0.4" stopColor="orange"/>
          <stop offset="0.7" stopColor="gold"/>
          <stop offset="1.0" stopColor="coral"/>
        </linearGradient>
      </defs>
      <text
        textAnchor="middle" 
        alignmentBaseline="middle"
        dominantBaseline="central"
        fontFamily="ChineseSerif"
        fontSize="0.8"
        fill="gold"
        stroke="red"
        strokeWidth="0.01"
      >
        <tspan x="0.5"  y="0.45">周</tspan>
        <tspan x="1.35" y="0.45">易</tspan>
      </text>

      <text
        alignmentBaseline="middle"
        dominantBaseline="central"
        fontFamily="Shojumaru" 
        x="2"  
        y="0.27"
        fontSize="0.3"
        fill="url(#logoGrad1)"
      >
        {t("oracle").toUpperCase()}
      </text>
      <text
        alignmentBaseline="middle"
        dominantBaseline="central"
        fontFamily="Shojumaru"
        x="2"
        y="0.65"
        fontSize="0.21"
        fill="silver"
      >
        {t("of")}
      </text>
      <text
        alignmentBaseline="middle"
        dominantBaseline="central"
        fontFamily="Shojumaru"
        x="2.6"
        y="0.68"
        fontSize="0.47"
        fill="url(#logoGrad2)"
        stroke="black"
        strokeWidth="0.015"
      >
        {t("yiChing")}
      </text>

    </svg>
  )
}