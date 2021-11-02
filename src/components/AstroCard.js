import React, { useState } from 'react'
import style from '../cssModules/astroCard.module.css'

const AstroCard = (props) => {

  const [expanded, setExpanded] = useState(false)

  const expandDiv = expanded ? style.craftDown : style.craftUp

  const btnVisibility = expanded ? style.hide : ''


  return(
    <div className={style.container}>

      <div className={style.nameCnt}/>
        <div className={style.name}>
          <div className={style.content}>
            <img src={props.avatar} alt={props.name} className={style.avatar}/>
            <h4>{props.name}</h4>
          </div>
          <button onClick={()=> setExpanded(true)} className={`${style.dnBtn} ${btnVisibility}`}>V</button>
        </div>


      <div className={`${style.craftCnt} ${expandDiv}`}/>
        <div className={`${style.craft} ${expandDiv}`}>
          <div className={style.content}>
            <h5>Craft: {props.craft}</h5>
            <img src={props.craftImg} alt={props.craft} className={style.satellite}/>
            <button onClick={()=> setExpanded(false)} className={style.upBtn}>V</button>
          </div>
        </div>


    </div>
  )
}

export default AstroCard
