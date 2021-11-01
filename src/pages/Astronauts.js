import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import AstroCard from '../components/AstroCard'
import style from '../cssModules/astronauts.module.css'

const Astronauts = (props) => {

console.log(props.astronauts)

  if (!props.isLoggedIn) {
    return <Redirect to='/'/>
  }

  return(
    <div>
          <div className={style.title}><h1>Astronuats in space</h1></div>

        <div className={style.cards}>

          {props.astronauts.map((astro, i) => {
            return(
              <div key={i + astro.name}>
              <AstroCard name={astro.name} craft={astro.craft} />
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Astronauts
