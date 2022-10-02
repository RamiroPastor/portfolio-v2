import React from "react";



export function RegularPolygon(props) {

  const n = props.n;
  const x0 = props.x0;
  const y0 = props.y0;
  const r0 = props.r0;
  const color = props.color;

  const mkDirs = () =>  {
    const a = 2 * Math.PI / n;
    let dirs = `M 0 ${-r0}`;
    for (let i = 1; i <= n; i++) {
      dirs = dirs + ` L ${x0 + r0 * Math.sin(i * a)} ${y0 - r0 * Math.cos(i * a)}`;
    }
    dirs = dirs + " Z"
    return dirs
  }

  return(
    <svg
      viewBox="-1 -1 2 2"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        fill="none"
        strokeWidth={0.1}
        stroke={color}
        d={mkDirs()}
      />
    </svg>
  )
}