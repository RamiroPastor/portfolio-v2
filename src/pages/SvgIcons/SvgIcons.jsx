import React, { useContext } from "react";

import haskellLogo from "assets/img/haskell-logo.svg";
import { LangContext } from "core/contexts/LangContext";
import { MosaicGallery } from "./MosaicGallery/MosaicGallery";



export function SvgIcons() {

  const t = useContext(LangContext).t;

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

      <MosaicGallery/>

    </div>
  )
}