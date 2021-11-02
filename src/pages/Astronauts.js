import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import AstroCard from '../components/AstroCard'
import style from '../cssModules/astronauts.module.css'
import avatar1 from '../assets/astro_avatar_1.jpg'
import avatar2 from '../assets/astro_avatar_2.jpg'
import avatar3 from '../assets/astro_avatar_3.jpg'
import issImg from '../assets/imageISS.jpg'
import sheng13 from '../assets/Shengzhou13.jpg'

const Astronauts = (props) => {

  if (!props.isLoggedIn) {
    return <Redirect to='/'/>
  }

  return(
    <div className={style.container}>
        <div className={style.title}><h1>Astronuats in <span>Space</span></h1></div>

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

            const craftImg = (astro.craft === 'ISS') ? issImg : sheng13

            return(
              <div key={i + astro.name}>
              <AstroCard
                name={astro.name}
                craft={astro.craft}
                avatar={avatar}
                craftImg={craftImg}
              />
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Astronauts
