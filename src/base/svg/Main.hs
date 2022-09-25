{-# LANGUAGE OverloadedStrings #-}


module Main where

import SvgIcons.Core.Geometry
import SvgIcons.Core.Render
import SvgIcons.Core.Utils
import SvgIcons.Images
import           Text.Blaze.Svg11 ((!))
import           Text.Blaze.Svg11 as S
import           Text.Blaze.Svg11.Attributes as A



main :: IO ()
main = do
  renderMosaics
  renderToCv
  renderToReact




renderMosaics :: IO ()
renderMosaics =
  renderSvgFiles 
    "./src/assets/mosaics/"
    [ (,) "nazariMosaic"       (nazariMosaic "mistyrose" "gainsboro")
    , (,) "mosaicPajarita"     (nazariMosaic "white"     "transparent")
    , (,) "triReligiousMosaic" (triReligiousMosaic "transparent" "orange" "green")
    , (,) "hexagonsMosaic"     (hexagonsMosaic "navy" "none")
    , (,) "beehiveMosaic"       beehiveMosaic
    , (,) "lemonsMosaic"       (lemonsMosaic "gold")
    , (,) "arabicMosaic"       (arabicMosaic "blue" "brown")
    , (,) "peopleMosaic"       (peopleMosaic "silver" "white")
    , (,) "hexMosaic"          (hexMosaic    "limegreen")
    , (,) "arrowsMosaic"       (arrowsMosaic "orange")
    , (,) "wiresMosaic"        (wiresMosaic  "gray")
    , (,) "curvesMosaic"        curvesMosaic
    , (,) "airplaneMosaic"     (airplaneMosaic "deepskyblue")
    ]


renderToCv :: IO ()
renderToCv =
  renderSvgFiles
    "./src/assets/cv/"
    [ (,) "langFR" fr
    , (,) "langES" es
    , (,) "langEN" uk
    ]


renderToReact :: IO ()
renderToReact =
  renderSvgReact
    "./src/assets/svg/"
    [ (,) "flagES" (es ! A.preserveaspectratio "xMidYMid slice")
    , (,) "flagUK" (uk ! A.preserveaspectratio "xMidYMid slice")
    ]


  
logo :: Svg
logo =
    svg
      ! A.viewbox "-1 -1 2 2"
      ! A.height "100px"
      ! A.width  "100px"
      $ do
        regularPolygon 5 1.9 (0,0)
          ! A.stroke "deeppink"
          ! (A.strokeWidth "0.05")
