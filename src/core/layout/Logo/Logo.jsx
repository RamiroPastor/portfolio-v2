import React from "react";

import { myLogo } from "assets/svg/myLogo";



export function Logo(props) {

  return(
    <a className="Logo" href="/">
      {myLogo}
      <strong>RPM</strong>
    </a>
  )
}