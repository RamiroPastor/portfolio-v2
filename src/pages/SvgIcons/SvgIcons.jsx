import React, { useContext, useEffect, useState } from "react";

import haskellLogo from "assets/img/haskell-logo.svg";
import { haskell } from "assets/svg/haskell";
import { sass    } from "assets/svg/sass";
import rawHaskellCode from "base/svg/Main.hs";
import { LangContext } from "core/contexts/LangContext";
import { MosaicGallery } from "./MosaicGallery/MosaicGallery";



export function SvgIcons() {

  const t = useContext(LangContext).t;

  const [haskellCode, setHaskellCode] = useState("");

  useEffect(() => {
    fetch(rawHaskellCode)
      .then(r => r.text())
      .then(text => {
        setHaskellCode(text)
      });
  }, [])

  return(
    <div className="SvgIcons">

      <div className="SvgIcons__intro">
        <div className="SvgIcons__header">
          <h1>
            {t("svgDoneWith")}
          </h1>
          <img alt="Haskell" src={haskellLogo}/>
        </div>
      </div>

      <div className="SvgIcons__info">
        <p>
          {t("svgIcons_t1")}
          <a 
            target="_blank" 
            rel="noreferrer" 
            href="https://hackage.haskell.org/package/blaze-svg"
          >blaze-svg</a>
          {t("svgIcons_t2")}
          {t("svgIcons_t3")}
          <a 
            target="_blank" 
            rel="noreferrer"
            href="https://hackage.haskell.org/package/svg-icons"
          >svg-icons</a>
        </p>
        <p>
          {t("svgIcons_t4")}
          {t("svgIcons_t5")}
        </p>
        <p>
          {t("svgIcons_t6")}
          {t("svgIcons_t7")}
          <a 
            target="_blank" 
            rel="noreferrer"
            href="https://hackage.haskell.org/package/svg-icons"
          >svg-icons</a>
        </p>
      </div>

      <div className="SvgIcons__source">
        <div className="SvgIcons__sourceHeader">
          {haskell}
          <span>Haskell</span>
        </div>
        <code>
          {haskellCode}
        </code>
        <div className="SvgIcons__sourceHeader">
          {sass}
          <span>Sass</span>
        </div>
        <code>{`
.MosaicGallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  &__mosaicWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  &__mosaic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 90vh;
    padding: 30rem 1rem;
    background-repeat: repeat;
    background-position: center;
  }
        `}
        </code>
      </div>

      <MosaicGallery/>

    </div>
  )
}