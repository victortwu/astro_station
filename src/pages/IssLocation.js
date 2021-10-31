import { Redirect } from 'react-router-dom'
import MapComponent from '../components/MapComponent'

const IssLocation = (props) => {

  if (!props.isLoggedIn) {
    return <Redirect to='/'/>
  }

  return(
    <div>
      <MapComponent/>
    </div>
  )
}

export default IssLocation
