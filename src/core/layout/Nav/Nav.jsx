import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { briefcase } from "assets/svg/briefcase";
import { document  } from "assets/svg/document";
import { haskell   } from "assets/svg/haskell";
import { LangContext } from "core/contexts/LangContext";


export function Nav(props) {

  const t = useContext(LangContext).t;

  return(
    <nav className="Nav">
      <NavLink className="Nav__link" to="/">
        { briefcase }
        <strong>{t("projects")}</strong>
      </NavLink>
      <NavLink className="Nav__link" to="/svg-icons">
        { haskell }
        <strong>{t("svgIcons")}</strong>
      </NavLink>
      <NavLink className="Nav__link" to="/cv">
        { document }
        <strong>{t("curriculum")}</strong>
      </NavLink>
    </nav>
  )
}