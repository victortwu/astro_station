import style from '../cssModules/home.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as AstroIcon } from '../assets/astroIcon.svg'
import { ReactComponent as IssIcon } from '../assets/ISSicon.svg'
import { ReactComponent as ProfileIcon } from '../assets/profileIcon.svg'

const Home = () => {
  return(
    <>
    <div className={style.title}><h1>astro<span>Space</span></h1></div>
    <div className={style.container}>
      <div className={style.wrapper1}>
        <Link to='/astronauts'>
        <div className={style.toAstro}>
            <h4 className={style.cardTitle}>See Astronauts</h4>
            <div className={style.icon}><AstroIcon/></div>
        </div>
        </Link>
      </div>
      <div className={style.wrapper2}>
        <Link to='/isslocation'>
        <div className={style.toIss}>
            <h5 className={style.cardTitle}>See International Space <br/>Station Location</h5>
            <div className={style.icon}><IssIcon/></div>
        </div>
        </Link>
      </div>
      <div className={style.wrapper3}>
        <Link to='/profile'>
        <div className={style.toProfile}>
            <h4 className={style.cardTitle}>See Profile</h4>
            <div className={style.icon}><ProfileIcon/></div>
        </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Home
