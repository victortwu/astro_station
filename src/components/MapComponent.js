import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import '../App.css'

const MapComponent = () => {

const [mapState, setMapState] = useState(null)

const icon = new Icon({
  iconUrl: '/pikachu.png',
  iconSize: [45, 45]
})


useEffect(async()=> {
  try {
    const res = await fetch('http://api.open-notify.org/iss-now.json')
    const data = await res.json()

    const lat = parseFloat(data.iss_position.latitude)
    const long = parseFloat(data.iss_position.longitude)

    setMapState(
    <Map center={[lat, long]} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[parseInt(data.iss_position.latitude), parseInt(data.iss_position.longitude)]} icon={icon}/>
    </Map>
    )

  }
  catch(err) {
    console.error(err.message)
  }

}, [])



  return(
    <>
        {mapState}
    </>
  )
}

export default MapComponent
