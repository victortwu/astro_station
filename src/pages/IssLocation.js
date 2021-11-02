import { Redirect } from 'react-router-dom'
import MapComponent from '../components/MapComponent'
import { ReactComponent as IssIcon } from '../assets/ISSicon.svg'
import style from '../cssModules/issPage.module.css'

const IssLocation = (props) => {

  if (!props.isLoggedIn) {
    return <Redirect to='/'/>
  }

  return(
    <div className={style.container}>
    <h1>ISS Location</h1>
      <MapComponent/>
      <div className={style.icon}><IssIcon/></div>
    </div>
  )
}

export default IssLocation
