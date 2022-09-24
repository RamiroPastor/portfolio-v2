import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "assets/i18n/en";
import { es } from "assets/i18n/es";
import { getCookie } from "base/cookies";



const resources =
  { en:
    { translation: en
    }
  , es:
    { translation: es
    }
  }


const defaultLang = "es";

const langCookie = getCookie("RPportfolio-language");


i18n
  .use(initReactI18next)
  .init(
    { resources
    , lng: langCookie === "" ? defaultLang : langCookie
    }
  )

export default i18n;