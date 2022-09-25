{-# LANGUAGE OverloadedStrings #-}


module Main where

import SvgIcons.Core.Render
import SvgIcons.Images
import           Text.Blaze.Svg11 ((!))
import           Text.Blaze.Svg11 as S
import           Text.Blaze.Svg11.Attributes as A



main :: IO ()
main = do
  renderMosaics
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


renderToReact :: IO ()
renderToReact =
  renderSvgReact
    "./src/assets/svg/"
    [ (,) "flagES" (es ! A.preserveaspectratio "xMidYMid slice")
    , (,) "flagUK" (uk ! A.preserveaspectratio "xMidYMid slice")
    ]