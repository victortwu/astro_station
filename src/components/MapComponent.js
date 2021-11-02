import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import '../App.css'

const issUrl = process.env.REACT_APP_ISSURL

const MapComponent = (props) => {

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const icon = new Icon({
    iconUrl: '/ISSicon copy 2.svg',
    iconSize: [55, 55]
  })

    const getLocation = async(quit) => {

      try {
        if ( quit === true ) return
        const res = await fetch(issUrl)
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
        console.error(err.message)
      }
    }

    const moveIss = () => {
      setTimeout(()=> {
        getLocation()
    }, 5000)}


    useEffect(()=> {

      let stopFetching = false

      getLocation(stopFetching)

      // not sure if this cleanup is best practice or not
      // AbortController was either stopping when I didn't want to or
      // it would hit the catch and throw an error
      // BUT this does stop the memory leakage warning

      return ()=> {
        console.log('CLEAN UP CALLED')
        stopFetching = true
      }
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

      <div >
          <h3 style={{margin: '.5rem', color: 'var(--moonLavender)'}}>International Space Station</h3>
          <p style={{margin: '.5rem'}}>Live location feed</p>
          <p style={{margin: '.5rem'}}>latitude: <span style={{color: 'var(--burntOrange)'}}>{latitude}</span></p>
          <p style={{margin: '.5rem'}}>longitude: <span style={{color: 'var(--burntOrange)'}}>{longitude}</span></p>
      </div>
    </>
  )
}

export default MapComponent
