/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from "react";

import { RegularPolygon } from "base/svg/RegularPolygon";



export function Hero(props){

  const [wanderers, setWanderers] = useState([]);
  const wanderersRef = useRef(wanderers);
  wanderersRef.current = wanderers;

  const [render, setRender] = useState(0);


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color+"90";
  }


  useEffect(() => {

    const mkWanderer = () => {

      let x0 = 50;
      let y0 = 50;

      let n  = Math.floor(Math.random() * 7 + 3);

      let color = getRandomColor();

      let a1 = 0;
      let a  = 0;
      let as = [];

      for (let i = 0; i < 10000; i++) {
        const a2 = 0.07 * (Math.random() * 10 - 5);
        a1 = a1 + a2;
        a  = a + a1;
        as.push(a * Math.PI / 360);
      }


      return(
        { n   : n
        , x0  : x0
        , y0  : y0
        , r   : 40
        , as  : as
        , w   : 6
        , col : color
        }
      )
    }

    if (wanderers.length < 15) {
      setWanderers([...wanderers, mkWanderer()])
      setRender(render + 1);
    }
  }, [render])



  useEffect(() => {
    const timer = setTimeout(() => {
      if (render >= 10000) {
        setRender(0)
      } else {
        setRender(render + 1);
      }
    }, 40);
    return () => clearTimeout(timer);
  }, [render]);




  function calculatePosition(b) {

    const x = b.x0 + b.r * (Math.cos(b.as[render]))
    const y = b.y0 + b.r * (Math.sin(b.as[render]))


    return(
      { x: x
      , y: y
      , w: b.w
      })
  }


  const renderWanderer = (b,i) => {
    
    const {x,y,w} = calculatePosition(b);

    return(
    <div
      key={i}
      className="Hero__wanderer"
      style={{"--x": `${x}%`, "--y": `${y}%`, "--w": `${w}vmin`}}
    >
      <RegularPolygon
        n={b.n}
        x0={0}
        y0={0}
        r0={0.9}
        color={b.col}
      />
    </div>
  )
  }



  return(
    <div className="Hero">
      {wanderers.map(renderWanderer)}
    </div>
  )
}