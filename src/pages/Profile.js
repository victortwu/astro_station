import { Redirect } from 'react-router-dom'
import styles from '../styleSheets/profile.module.css'


const Profile = props => {

  if (!props.isLoggedIn) {
    return <Redirect to='/'/>
  }


  return(
    <div className={styles.container}>
      <div className={styles.card}>
      <img src={props.userProfile?.imageUrl}/>
      <h5>Name: </h5><span>{props.userProfile?.name}</span>
      <h5>email: </h5><span>{props.userProfile?.email}</span>
      </div>
    </div>
  )
}

export default Profile
