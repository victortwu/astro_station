import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styleSheets/nav.css'

const Nav = props => {

  const [dropLinks, setDropLinks] = useState(false)
  const hamburgerButton = useRef(null)

  const spinHamburger =()=> {
    hamburgerButton.current.style = dropLinks ? 'animation: spinX .5s' : 'animation: spinE .5s'
  }

  const toggleDropDown = () => {
      setDropLinks(!dropLinks)
  }

  const toggleNavClass = dropLinks ? 'showMenu' : 'hideMenu'

  const home = <Link to='/'>
                  <span onClick={
                    ()=> {
                      toggleDropDown()
                      spinHamburger()
                    }
                  }>
                  Home
                  </span>
                </Link>

  const astroLink = <Link to='/astronauts'>
                  <span onClick={
                    ()=> {
                      toggleDropDown()
                      spinHamburger()
                    }
                  }>
                  Astronauts
                  </span>
                </Link>

  const issLink = <Link to='/isslocation'>
                  <span onClick={
                    ()=> {
                      toggleDropDown()
                      spinHamburger()
                    }
                  }>
                  Iss Location
                  </span>
                </Link>

  const profile = <Link to='/profile'>
                  <span onClick={
                    ()=> {
                      toggleDropDown()
                      spinHamburger()
                    }
                  }>
                  Profile
                  </span>
                </Link>

console.log(props.userProfile?.givenName)
  return(

    <>
    <nav className='navBar'>

      <h4 className='welcomeName'>Welcome {props.userProfile?.givenName}</h4>

      <div ref={hamburgerButton} className='hamburger' onClick={()=> {
        toggleDropDown()
        spinHamburger()
      }}>
          {
            dropLinks ?
              <div id='xBurger'>
                <div id='xLine1'/>
                <div id='xLine2'/>
              </div>
            :  <>
              <div id='hamburgerLine'/>
              <div id='hamburgerLine'/>
              <div id='hamburgerLine'/>
              </>
          }
      </div>
    </nav>

    <div onClick={()=> {setDropLinks(false)
                        spinHamburger()}} className={toggleNavClass}>

        <div onClick={(e)=> e.stopPropagation()} className='menuBody'>
          <ul className='links'>

              <li>{home}</li>
              <li>{astroLink}</li>
              <li>{issLink}</li>
              <li>{profile}</li>

              {props.isLoggedIn ? <li><span onClick={()=> {
                                        props.logout()
                                        toggleDropDown()
                                        spinHamburger()
                                      }}>
                                        Logout
                                      </span></li> : ''}

          </ul>
        </div>

    </div>
    </>
  )
}

export default Nav
