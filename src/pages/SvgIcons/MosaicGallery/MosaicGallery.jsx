import React from "react";

import { MosaicCode } from "../MosaicCode/MosaicCode";



export function MosaicGallery(props) {


  return(
    <div className="MosaicGallery">

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--nazari">
          <MosaicCode
            mosaicName="nazariMosaic"
          />
      </div>

      <div className="MosaicGallery__mosaicWrapper MosaicGallery__mosaicWrapper--triReligious">
        <div className="MosaicGallery__mosaic MosaicGallery__mosaic--triReligious">
          <MosaicCode
            mosaicName="triReligiousMosaic"
          />
        </div>
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--hexagons">
          <MosaicCode
            mosaicName="hexagonsMosaic"
          />
      </div>

      <div className="MosaicGallery__mosaicWrapper MosaicGallery__mosaicWrapper--beehive">
        <div className="MosaicGallery__mosaic MosaicGallery__mosaic--beehive">
          <MosaicCode
            mosaicName="beehiveMosaic"
          />
        </div>
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--lemons">
          <MosaicCode
            mosaicName="lemonsMosaic"
          />
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--arabic">
          <MosaicCode
            mosaicName="arabicMosaic"
          />
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--people">
          <MosaicCode
            mosaicName="peopleMosaic"
          />
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--hex">
          <MosaicCode
            mosaicName="hexMosaic"
          />
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--arrows">
          <MosaicCode
            mosaicName="arrowsMosaic"
          />
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--wires">
          <MosaicCode
            mosaicName="wiresMosaic"
          />
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--curves">
          <MosaicCode
            mosaicName="curvesMosaic"
          />
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--airplane">
          <MosaicCode
            mosaicName="airplaneMosaic"
          />
      </div>

    </div>
  )
}