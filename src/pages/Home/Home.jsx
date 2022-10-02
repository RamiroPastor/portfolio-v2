import React, { useContext } from "react";

import { LangContext } from "core/contexts/LangContext";
import { Projects } from "pages/Projects/Projects";
import { Hero } from "./Hero/Hero";



export function Home(props){

  const t = useContext(LangContext).t;

  return(
    <div className="Home">
      <div className="Home__intro">
        <Hero/>
        <h1>
          {t("welcome")}
        </h1>
      </div>

      <Projects/>
    </div>
  )
}