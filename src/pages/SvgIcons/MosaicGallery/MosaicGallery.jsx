import React from "react";

import { MosaicCode } from "../MosaicCode/MosaicCode";



export function MosaicGallery(props) {


  return(
    <div className="MosaicGallery">

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--nazari">
          <MosaicCode
            mosaicName="nazari"
            haskell='nazariMosaic "orange" "purple"'
          >{`
&__mosaic--nazari {
  $x: 4.9rem;
  background-image: url("../../../assets/mosaics/nazariMosaic.svg");
  background-size: $x ($x * math.sqrt(3));
}
          `}
          </MosaicCode>
      </div>

      <div className="MosaicGallery__mosaicWrapper MosaicGallery__mosaicWrapper--triReligious">
        <div className="MosaicGallery__mosaic MosaicGallery__mosaic--triReligious">
          <MosaicCode
            mosaicName="triReligious"
            haskell='triReligiousMosaic "transparent" "orange" "green"'
          >{`
&__mosaicWrapper--triReligious {
  $gW: 0.5 * math.sqrt(3) * 6rem;
  $color1: rgba(blue, 0.9);
  $color2: rgba(darkorange, 0.9);
  $color3: rgba(indigo, 0.9);
  $color4: rgba(0, 163, 0, 0.9);
  background-image: repeating-linear-gradient(
    120deg,
    $color4 0.9 * $gW,
    $color1 1.1 * $gW,
    $color1 1.9 * $gW,
    $color2 2.1 * $gW,
    $color2 2.9 * $gW,
    $color3 3.1 * $gW,
    $color3 3.9 * $gW,
    $color4 4.1 * $gW,
    $color4 4.9 * $gW
  );
}
&__mosaic--triReligious {
  $x: 6rem;
  background-image: url("../../../assets/mosaics/triReligiousMosaic.svg");
  background-size: $x ($x * math.sqrt(3));
  background-position: (-0.5 * $x) 0;
}
          `}
          </MosaicCode>
        </div>
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--hexagons">
          <MosaicCode
            mosaicName="hexagons"
            haskell='hexagonsMosaic "navy" "none"'
          >{`
&__mosaic--hexagons {
  $x: 6rem;
  background-image: url("../../../assets/mosaics/hexagonsMosaic.svg");
  background-size: $x ($x * math.sqrt(3));
}
          `}
          </MosaicCode>
      </div>

      <div className="MosaicGallery__mosaicWrapper MosaicGallery__mosaicWrapper--beehive">
        <div className="MosaicGallery__mosaic MosaicGallery__mosaic--beehive">
          <MosaicCode
            mosaicName="beehive"
            haskell='beehiveMosaic'
          >{`
&__mosaicWrapper--beehive {
  background: linear-gradient(
    60deg,
    rgba(255, 255, 0, 0.5),
    rgba(255, 215, 0, 0.6),
    rgba(255, 165, 0, 0.7),
    rgba(255, 140, 0, 0.8),
    rgba(178, 34, 34, 0.7)
  ),
  linear-gradient(
    -60deg,
    rgba(255, 140, 000, 0.8),
    rgba(255, 215, 000, 0.7),
    rgba(255, 255, 100, 0.6),
    rgba(255, 140, 000, 0.5)
  );
}
&__mosaic--beehive {
  $x: 6rem;
  background-image: url("../../../assets/mosaics/beehiveMosaic.svg");
  background-size: $x ($x * math.sqrt(3));
}
            `}
          </MosaicCode>
        </div>
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--lemons">
          <MosaicCode
            mosaicName="lemons"
            haskell='lemonsMosaic "gold"'
          >{`
&__mosaic--lemons {
  $x: 7rem;
  background-image: url("../../../assets/mosaics/lemonsMosaic.svg");
  background-size: (0.85 * $x) $x;
}
          `}
          </MosaicCode>
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--arabic">
          <MosaicCode
            mosaicName="arabic"
            haskell='arabicMosaic "blue" "brown"'
          >{`
&__mosaic--arabic {
  $x: 10rem;
  background-image: url("../../../assets/mosaics/arabicMosaic.svg");
  background-size: $x;
}
          `}
          </MosaicCode>
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--people">
          <MosaicCode
            mosaicName="people"
            haskell='peopleMosaic "silver" "white"'
          >{`
&__mosaic--people {
  $x: 5rem;
  background-image: url("../../../assets/mosaics/peopleMosaic.svg");
  background-size: $x;
}
          `}
          </MosaicCode>
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--hex">
          <MosaicCode
            mosaicName="hex"
            haskell='hexMosaic "limegreen"'
          >{`
&__mosaic--hex {
  $x: 12rem;
  background-image: url("../../../assets/mosaics/hexMosaic.svg");
  background-size: ($x * math.sqrt(3)) $x;
}
          `}
          </MosaicCode>
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--arrows">
          <MosaicCode
            mosaicName="arrows"
            haskell='arrowsMosaic "orange"'
          >{`
&__mosaic--arrows {
  $x: 6rem;
  background-image: url("../../../assets/mosaics/arrowsMosaic.svg");
  background-size: $x ($x * math.sqrt(3));
}
          `}
          </MosaicCode>
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--wires">
          <MosaicCode
            mosaicName="wires"
            haskell='wiresMosaic "gray"'
          >{`
&__mosaic--wires {
  $x: 30rem;
  background-image: url("../../../assets/mosaics/wiresMosaic.svg");
  background-size: $x;
}
          `}
          </MosaicCode>
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--curves">
          <MosaicCode
            mosaicName="curves"
            haskell='curvesMosaic'
          >{`
&__mosaic--curves {
  $x: 9rem;
  background-image: url("../../../assets/mosaics/curvesMosaic.svg");
  background-size: $x;
}
            `}
          </MosaicCode>
      </div>

      <div className="MosaicGallery__mosaic MosaicGallery__mosaic--airplane">
          <MosaicCode
            mosaicName="airplane"
            haskell='airplaneMosaic "deepskyblue"'
          >{`
&--airplane {
  $x: 8rem;
  background-image: url("../../../assets/mosaics/airplaneMosaic.svg");
  background-size: $x;
}
          `}
          </MosaicCode>
      </div>

    </div>
  )
}