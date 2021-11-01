import React, { useState } from 'react'
import style from '../cssModules/astroCard.module.css'



const AstroCard = (props) => {

  const [expanded, setExpanded] = useState(false)

  const expandDiv = expanded ? style.craftDown : style.craftUp

  const btnVisibility = expanded ? style.hide : ''

  console.log(expandDiv)
  return(
    <div className={style.container}>
      <div className={style.name}>
        <h3>Name: {props.name}</h3>
        <button onClick={()=> setExpanded(true)} className={`${style.dnBtn} ${btnVisibility}`}>V</button>
      </div>
      <div className={`${style.craft} ${expandDiv}`}>
        <h5>Craft: {props.craft}</h5>
        <button onClick={()=> setExpanded(false)} className={style.upBtn}>V</button>
      </div>
    </div>
  )
}

export default AstroCard
