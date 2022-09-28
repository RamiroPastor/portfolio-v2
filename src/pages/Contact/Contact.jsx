import React from "react";


export function Contact(props){

  return(
    <div className="Contact">
      <div className="Contact__info">
        <h3>
          Ramiro Pastor Martín
        </h3>
        <p>
          {process.env.REACT_APP_MYADDRESS1}
          <br/>
          {process.env.REACT_APP_MYADDRESS2}
          <br/>
          {process.env.REACT_APP_MYADDRESS3}
        </p>
        <p>
          {process.env.REACT_APP_MYPHONE}
        </p>
        <p>
          {process.env.REACT_APP_MYEMAIL}
        </p>
      </div>
    </div>
  )
}