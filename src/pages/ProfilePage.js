import { Redirect } from 'react-router-dom'
import style from '../cssModules/profilePage.module.css'


const ProfilePage = ({children, isLoggedIn}) => {

  if (!isLoggedIn) {
    return <Redirect to='/'/>
  }

  return(
    <>
    <div className={style.title}><h1>Profile</h1></div>
    <div className={style.container}>
        {children}
    </div>
    </>
  )
}

export default ProfilePage
