import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/ISSicon.svg'
import '../styleSheets/nav.css'


const Nav = props => {

  const [dropLinks, setDropLinks] = useState(false)
  const hamburgerButton = useRef(null)
  const menuBodyRef = useRef(null)

  const spinHamburger =()=> {
    hamburgerButton.current.style = dropLinks ? 'animation: spinX .3s' : 'animation: spinE .3s'
  }

  const toggleDropDown = () => {
      if ( dropLinks ) {
        menuBodyRef.current.style = 'animation: retractMenu .3s'
        setTimeout(() => {setDropLinks(false)}, 300)
      } else {
        setDropLinks(true)
        menuBodyRef.current.style = 'animation: dropMenu .3s'
      }
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


  return(

    <>
    <nav className='navBar'>

      <Link to='/'>
          <div className='logoDiv'><Logo/></div>
      </Link>

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

    <div onClick={()=> {toggleDropDown()
                        spinHamburger()}} className={toggleNavClass}>

        <div ref={menuBodyRef} onClick={(e)=> e.stopPropagation()} className='menuBody'>
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
