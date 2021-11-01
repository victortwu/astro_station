import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import '../App.css'


const MapComponent = () => {

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const icon = new Icon({
    iconUrl: '/ISSicon copy 2.svg',
    iconSize: [55, 55]
  })

    const getLocation = async() => {
      try {
        const res = await fetch('http://api.open-notify.org/iss-now.json')
        const data = await res.json()

        const latStr = await parseFloat(data.iss_position.latitude).toFixed(4)
        const longStr = await parseFloat(data.iss_position.longitude).toFixed(4)

        const lat = parseFloat(latStr)
        const long = parseFloat(longStr)

        setLatitude(lat)

        setLongitude(long)

        moveIss()
      }
      catch(err) {
        console.log('CATCH!!!')
        console.error(err.message)
      }

    }

    const moveIss = () => {
      setTimeout(()=> {
        getLocation()
    }, 5000)}


    useEffect(()=> {
      getLocation()

    }, [])


  return(
    <>
      <Map center={[latitude, longitude]} zoom={2}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]} icon={icon}/>
      </Map>
      <h3>International Space Station</h3>
      <p>Live location feed</p>
      <p>latitude: <span>{latitude}</span> longitude: <span>{longitude}</span></p>
    </>
  )
}

export default MapComponent
