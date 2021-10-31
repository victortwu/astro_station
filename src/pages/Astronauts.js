import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const Astronauts = (props) => {

console.log(props.astronauts)

  if (!props.isLoggedIn) {
    return <Redirect to='/'/>
  }

  return(
    <div>
      {props.astronauts.map((astro, i) => {
        return(
          <p key={i + astro.name}>Name: {astro.name} - Craft: {astro.craft}</p>
        )
      })}
    </div>
  )
}

export default Astronauts
