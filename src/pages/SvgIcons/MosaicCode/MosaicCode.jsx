import React from "react";

import { haskell } from "assets/svg/haskell";
import { sass    } from "assets/svg/sass";



export function MosaicCode(props) {

  const mosaicName  = props.mosaicName;
  const haskellCode = props.haskell;
  const sassCode    = props.children;


  return(
    <div className="MosaicCode">
      <h3>
        {mosaicName}
      </h3>
      <div className="MosaicCode__section">
        <div className="MosaicCode__sectionHeader">
          {haskell}
          <span>Haskell:</span>
        </div>
        <code className="MosaicCode__code">
          {haskellCode}
        </code>
      </div>
      <div className="MosaicCode__section">
        <div className="MosaicCode__sectionHeader">
          {sass}
          <span>Sass:</span>
        </div>
        <code className="MosaicCode__code">
          {sassCode}
        </code>
      </div>
    </div>
  )
}