import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styleSheets/nav.css'
import style from '../cssModules/nav.module.css'

const Nav = props => {

  const [dropLinks, setDropLinks] = useState(false)
  const hamburgerButton = useRef(null)

  const spinHamburger =()=> {
    hamburgerButton.current.style = dropLinks ? 'animation: spinX .5s' : 'animation: spinE .5s'
  }

  const toggleDropDown = () => {
      setDropLinks(!dropLinks)
  }

  const toggleNavClass = dropLinks ? style.showMenu : style.hideMenu

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
    <nav className={style.navBar}>

      <h4 className={style.welcomeName}>Welcome {props.userProfile?.givenName}</h4>

      <div ref={hamburgerButton} className={style.hamburger} onClick={()=> {
        toggleDropDown()
        spinHamburger()
      }}>
          {
            dropLinks ?
              <div id={style.xBurger}>
                <div id={style.xLine1}/>
                <div id={style.xLine2}/>
              </div>
            :  <>
              <div id={style.hamburgerLine}/>
              <div id={style.hamburgerLine}/>
              <div id={style.hamburgerLine}/>
              </>
          }
      </div>
    </nav>

    <div onClick={()=> {setDropLinks(false)
                        spinHamburger()}} className={toggleNavClass}>

        <div onClick={(e)=> e.stopPropagation()} className={style.menuBody}>
          <ul className={style.links}>

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
