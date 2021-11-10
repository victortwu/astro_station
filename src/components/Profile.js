import style from '../cssModules/profileCard.module.css'

const Profile = props => {

return(

    <div className={style.card}>

      <img className={style.profileImg} src={props.userProfile?.imageUrl} alt='no photo'/>
      <h5>Name: </h5><span>{props.userProfile?.name}</span>
      <h5>email: </h5><span>{props.userProfile?.email}</span>

    </div>

  )
}

export default Profile
