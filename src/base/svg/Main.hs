{-# LANGUAGE OverloadedStrings #-}


module Main where

import Control.Arrow (second)
import SvgIcons.Core.Geometry
import SvgIcons.Core.Render
import SvgIcons.Core.Style
import SvgIcons.Core.Utils
import SvgIcons.Icons
import SvgIcons.Images
import           Text.Blaze.Svg11 ((!))
import           Text.Blaze.Svg11 as S
import           Text.Blaze.Svg11.Attributes as A



main :: IO ()
main = do
  renderMosaics
  renderToCv
  renderToReact
  renderFavicon
  renderIcons



renderMosaics :: IO ()
renderMosaics =
  renderSvgFiles 
    "./src/assets/mosaics/"
    [ (,) "nazariMosaic"       (nazariMosaic "orange" "purple")
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
    , (,) "myLogo"  myLogo
    ]


renderFavicon :: IO ()
renderFavicon =
  renderSvgFiles
    "./public/assets/img/"
    [ (,) "favicon" myLogo
    ]


renderIcons :: IO ()
renderIcons =
  renderSvgReact 
    "./src/assets/svg/"
    $ map 
      ( ( stdDims . strkStyle) `second` )
      [ (,) "briefcase" briefcase
      , (,) "document"  document
      , (,) "haskell"   haskell
      ]



  
myLogo :: Svg
myLogo =
    svg
      ! A.viewbox "-1 -1 2 2"
      ! A.height "100px"
      ! A.width  "100px"
      $ do
        regularPolygon 5 0.98 (0,0)
          ! A.strokeWidth "0.05"
          ! A.stroke      "black"
          ! A.fill        "none"
          ! A.transform (translate 0 (-0.1) <> rotateAround 180 0 0)
        S.g
          ! A.strokeWidth   "0.05"
          ! A.stroke        "black"
          ! A.strokeLinecap "round"
          ! A.fill          "none"
          ! A.transform (translate 0 (-0.05))
          $ do
            S.path
              ! A.d dirs1
            S.path 
              ! A.d dirs2
            S.path
              ! A.d dirs2
              ! A.transform horizontalMirrorMatrix
            S.path
              ! A.d dirs3
            S.path
              ! A.d dirs3
              ! A.transform horizontalMirrorMatrix
            S.path
              ! A.d dirs4
            S.path
              ! A.d dirs4
              ! A.transform horizontalMirrorMatrix
        S.path
          ! A.strokeWidth "0.05"
          ! A.stroke      "black"
          ! A.fill        "none"
          ! A.d dirs5
  where
    x1 =  0.17
    x2 =  0.29
    y1 =  0
    y2 = -0.2
    y3 = -0.4
    r1 =  x2
    dirs1 = mkPath $ do
      m   ( x1)  y1
      c   ( x1)  y2  ( x2)  y2  ( x2)  y3
      aa    r1   r1  0  True  False (-x2)  y3
      c   (-x2)  y2  (-x1)  y2  (-x1)  y1
      S.z
    x4 =  0.45
    y5 = -0.14
    r2 =  0.17
    x5 =  0.60
    y6 = -0.25
    r3 =  0.5 * distance (x4,y5) (x5,y6)
    dirs2 = mkPath $ do
      m   ( x1)  y1
      aa    r2   r2  0  True  False ( x4)  y5
      aa    r3   r3  0  True  True  ( x5)  y6
    x6  =  0.12
    x7  =  0.06
    x8  =  0.2
    x9  =  0.39
    x10 =  0.66
    x11 =  0.75
    y7  =  0.24
    y8  =  0.55
    y9  =  0.36
    y10 =  0.06
    y11 =  0.15
    dirs3 = mkPath $ do
      m   x6   y1
      c   x7   y7   x8   y8   x9  y9
      s   x10  y10  x11  y11
    x12 =  0.045
    x13 =  0.01
    x14 =  0.14
    x15 =  0.33
    x16 =  0.09
    y13 =  0.33
    y14 =  0.5
    y15 =  0.66
    y16 =  0.6
    dirs4 = mkPath $ do
      m   x12  y1
      q   x13  y13  x14  y14
      s   x15  y15  x16  y16
    x17 =  0.15
    x18 =  0.03
    y17 =  y18 - 0.1
    y18 = -0.42
    y19 =  y18 + 0.1
    dirs5 = mkPath $ do
      m   (-x17)  y17
      l   (-x18)  y17
      m   ( x18)  y17
      l   ( x17)  y17
      m   (-x17)  y18
      l   ( x17)  y18
      m   (-x17)  y19
      l   (-x18)  y19
      m   ( x18)  y19
      l   ( x17)  y19

