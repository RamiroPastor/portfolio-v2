import React from "react";



export function MosaicCode(props) {

  const mosaicName = props.mosaicName


  return(
    <div className="MosaicCode">
      <h3>{mosaicName}</h3>
    </div>
  )
}