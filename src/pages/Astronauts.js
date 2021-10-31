import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import AstroCard from '../components/AstroCard'

const Astronauts = (props) => {

console.log(props.astronauts)

  if (!props.isLoggedIn) {
    return <Redirect to='/'/>
  }

  return(
    <div>
      <h1>Astronuats in space</h1>
      {props.astronauts.map((astro, i) => {
        return(
          <div key={i + astro.name}>
          <AstroCard name={astro.name} craft={astro.craft} />
          </div>
        )
      })}
    </div>
  )
}

export default Astronauts
