import React from 'react'
import "../../Styling/welcome.css"

export default function Welcome(props) {
  return (
    <div className="welcome">
        <div className={props.clasatext}>
            <h1 className='descriptie-welcome'>Construim viitorul <br/>portar imrepuna.</h1>
            <button className='welcome-button'>Planurile de antrenament</button>
        </div>
        <div className={props.clasa}></div>
    </div>
  )
}
