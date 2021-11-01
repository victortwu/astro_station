import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import AstroCard from '../components/AstroCard'
import style from '../cssModules/astronauts.module.css'
import avatar1 from '../assets/astro_avatar_1.jpg'
import avatar2 from '../assets/astro_avatar_2.jpg'
import avatar3 from '../assets/astro_avatar_3.jpg'

const Astronauts = (props) => {

  if (!props.isLoggedIn) {
    return <Redirect to='/'/>
  }

  return(
    <div>
        <div className={style.title}><h1>Astronuats in space</h1></div>

        <div className={style.cards}>

          {props.astronauts.map((astro, i) => {
            let avatar
            if ( i % 3 === 0 ) {
              avatar = avatar1
            } else if ( i % 2 === 0 ) {
              avatar = avatar2
            } else {
              avatar = avatar3
            }
           
            return(
              <div key={i + astro.name}>
              <AstroCard name={astro.name} craft={astro.craft} image={avatar}/>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Astronauts
