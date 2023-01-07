import React, { useContext} from "react";


// import ehv        from "assets/img/ehv-logo.webp";
import haskell    from "assets/img/haskell-logo.svg";
import { LangContext } from "core/contexts/LangContext";
import { Project      } from "./Project/Project";
import { LogoCloister } from "./Project/LogoCloister";
import { LogoYiOracle } from "./Project/LogoYiOracle";



export function Projects(props) {

  const t = useContext(LangContext).t;


  // const ehvImg     = <img alt="" src={ehv}/>;
  const haskellImg = <img alt="" src={haskell}/>;



  return(
    <div className="Projects">
      <div className="Projects__inner">

        <h2 className="Projects__header">
          {t("projects")}
        </h2>

        <Project
          t={t}
          name         = {t("svgIcons_name")}
          url          = "https://hackage.haskell.org/package/svg-icons"
          image        = {haskellImg}
          date         = {2022}
          category     = {t("svgIcons_category")}
          technologies = "Haskell, SVG"
          repository   = "https://github.com/RamiroPastor/SvgIcons"
          synopsis     = {
            <>
              <p>{t("svgIcons_synopsis1")}</p>
              <p>{t("svgIcons_synopsis2")}</p>
            </>
          }
        />

        <Project
          t={t}
          name         = {t("cloister_name")}
          url          = "https://claustro.vercel.app"
          image        = {<LogoCloister t={t}/>}
          date         = {2022}
          category     = {t("cloister_category")}
          technologies = "Typescript, Nextjs, MongoDB"
          repository   = "https://github.com/RamiroPastor/Claustro"
          synopsis     = {
            <>
              <p>{t("cloister_synopsis1")}</p>
              <p>{t("cloister_synopsis2")}</p>
            </>
          }
        />

        <Project
          t={t}
          name         = {t("ioracle_name")}
          url          = "https://www.ioracle.es/"
          image        = {<LogoYiOracle t={t}/>}
          date         = {2022}
          category     = {t("ioracle_category")}
          technologies = "Nextjs"
          repository   = {null}
          synopsis     = {
            <>
             <p>{t("ioracle_synopsis")}</p>
            </>
          }
        />

        {/* <Project
          t={t}
          name         = {t("ehv_name")}
          url          = "https://home-5005749472.app-ionos.space"
          image        = {ehvImg}
          date         = {2021}
          category     = {t("ehv_category")}
          technologies = "Reactjs, Mongodb, Nodejs"
          repository   = {null}
          synopsis     = {t("ehv_synopsis")}
        /> */}
      </div>
    </div>
  )
}