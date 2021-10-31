import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import { gapi, loadAuth2 } from 'gapi-script'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

//-------- components and pages ---------------
import Nav from './components/Nav'
import Profile from './components/Profile'
import Astronauts from './pages/Astronauts'
import IssLocation from './pages/IssLocation'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

import './App.css';

const clientId = process.env.REACT_APP_CLIENTKEY






function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false)
const [userProfile, setUserProfile] = useState(null)

  const responseGoogle = (res) => {
    if (res.profileObj.email !== '') {
      setIsLoggedIn(true)
      setUserProfile(res.profileObj)
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


  return (
    <Router>

      <div className="App">
        <header>
          <Nav
            logout={logout}
            isLoggedIn={isLoggedIn}
            userProfile={userProfile}
          />
        </header>
        <Switch>

            <Route exact path='/'>

                {isLoggedIn ? <div className='mainWrapper'>HOME</div>

                :  <LoginPage>
                    <GoogleLogin
                          buttonText="Login"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={'single_host_origin'}
                        />
                    </LoginPage>}

            </Route>

            <Route exact path='/astronauts'>
                <div className='mainWrapper'>
                  <Astronauts isLoggedIn={isLoggedIn}/>
                </div>
            </Route>

            <Route exact path='/isslocation'>
                <div className='mainWrapper'>
                  <IssLocation isLoggedIn={isLoggedIn}/>
                </div>
            </Route>

            <Route exact path='/profile'>
              <div className='mainWrapper'>
                <ProfilePage isLoggedIn={isLoggedIn}>
                  <Profile isLoggedIn={isLoggedIn} userProfile={userProfile} />
                </ProfilePage>
              </div>
            </Route>

            <Route render={() => <Redirect to={{pathname: "/"}} />} />

        </Switch>

      </div>

    </Router>
  );
}

export default App;
