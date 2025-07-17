import React from "react";



export function LogoLolRaffle(props) {

  const lang = props.lang;

  const logo_es =
    <div className="LogoLolRaffle__title">
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--1" >S</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--2" >E</span>
      <span> </span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--3" >R</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--4" >I</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--5" >F</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--6" >A</span>
      <br/>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--7" >C</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--8" >U</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--9" >E</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--10">N</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--11">T</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--12">A</span>
    </div>

  const logo_en =
    <div className="LogoLolRaffle__title">
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--0" >A</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--1" >C</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--2" >C</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--3" >O</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--4" >U</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--5" >N</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--6" >T</span>
      <br/>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--7" >R</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--8" >A</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--9" >F</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--10">F</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--11">L</span>
      <span className="LogoLolRaffle__letter LogoLolRaffle__letter--12">E</span>
    </div>

  return(
    <>{lang === "es" ? logo_es : logo_en}</>
  )
}
