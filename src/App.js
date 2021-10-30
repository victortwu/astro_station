import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login'
//import {  } from 'gapi-script'
import { gapi, loadAuth2 } from 'gapi-script'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//-------- components and pages ---------------
import Nav from './components/Nav'
import Astronauts from './pages/Astronauts'
import IssLocation from './pages/IssLocation'
import LoginPage from './pages/LoginPage'

import './App.css';



const clientId = '187245118795-1getsroidb7817bb2b086kk1lu308umq.apps.googleusercontent.com'






function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false)
const [userProfile, setUserProfile] = useState(null)

  const responseGoogle = (res) => {
    console.log(res)
    console.log(res.profileObj.email)
    if (res.profileObj.email !== '') {
      setIsLoggedIn(true)
      setUserProfile(res.profileObj)
      console.log(`${res.profileObj.givenName} is logged in`)
    }
  }


  let auth2 = loadAuth2(gapi, clientId)
  // credit: jasmeet17 from github
  // https://github.com/anthonyjgrove/react-google-login/issues/130
  const logout = () => {
    auth2 = gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.signOut().then(
           auth2.disconnect().then(console.log('LOGOUT SUCCESSFUL'))
       )
       setIsLoggedIn(false)
       setUserProfile(null)
     }
  }

console.log(isLoggedIn)
console.log(userProfile)
  return (
    <Router>

      <div className="App">

      <Nav logout={logout} isLoggedIn={isLoggedIn}/>

        <Switch>

            <Route exact path='/'>
            <div className='mainWrapper'>
                {isLoggedIn ? 'HOME' : <LoginPage>
                                          <GoogleLogin
                                            buttonText="Login"
                                             onSuccess={responseGoogle}
                                             onFailure={responseGoogle}
                                             cookiePolicy={'single_host_origin'}
                                            />
                                          </LoginPage>}
            </div>
            </Route>

            <Route exact path='/astronauts'>
              <div className='mainWrapper'>
                  <Astronauts/>
              </div>
            </Route>

            <Route exact path='/isslocation'>
            <div className='mainWrapper'>
                <IssLocation/>
            </div>
            </Route>

        </Switch>

      </div>

    </Router>
  );
}

export default App;
