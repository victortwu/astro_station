import { Redirect } from 'react-router-dom'

const IssLocation = (props) => {

  if (!props.isLoggedIn) {
    return <Redirect to='/'/>
  }

  return(
    <div>
      Iss Location
    </div>
  )
}

export default IssLocation
