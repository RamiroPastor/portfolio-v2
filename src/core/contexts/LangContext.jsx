import React from "react";

import { setCookieForever } from "base/cookies";




export const LangContext = React.createContext(null);


export function LangContextProvider(props) {

  const children = props.children;
  const i18n     = props.i18n;
  const t        = props.t;

  const saveLang = langCode => {
    setCookieForever("RPportfolio-language", langCode);
    i18n.changeLanguage(langCode);
  }

  return (
    <LangContext.Provider
      value={
        { lang: i18n ? i18n.language : ""
        , t
        , saveLang
        }
      }
    >
      {children}
    </LangContext.Provider>
  )
}