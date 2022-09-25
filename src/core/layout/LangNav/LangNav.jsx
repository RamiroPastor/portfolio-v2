import React, { useContext } from "react";

import { flagES } from "assets/svg/flagES";
import { flagUK } from "assets/svg/flagUK";
import { LangContext } from "core/contexts/LangContext";



export function LangNav(){

  const saveLang = useContext(LangContext).saveLang;

  return(
    <div className="LangNav">
      <div className="LangNav__inner">
        <button type="button" title="es" onClick={() => saveLang("es")}>
          { flagES }
        </button>
        <button type="button" title="en" onClick={() => saveLang("en")}>
          { flagUK }
        </button>
      </div>
    </div>
  )
}


