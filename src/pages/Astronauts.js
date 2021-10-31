import { Redirect } from 'react-router-dom'

const Astronauts = (props) => {

  if (!props.isLoggedIn) {
    return <Redirect to='/'/>
  }

  return(
    <div>
      astronauts
    </div>
  )
}

export default Astronauts
