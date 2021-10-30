import React from 'react'
import Nav from './components/Nav'
import Astronauts from './pages/Astronauts'
import IssLocation from './pages/IssLocation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>

      <div className="App">

      <Nav/>

        <Switch>

            <Route exact path='/'>
            <div className='mainWrapper'>
                home
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
