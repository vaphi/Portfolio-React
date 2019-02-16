import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Home from './Home'
import ParticlesHome from './ParticlesHome'
import AboutMe from './AboutMe'



class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
        <Redirect from="/" exact to="/Home" />

          <Route exact={true} path='/Home' render={() => (
            <div className="App">
            <ParticlesHome/>
              <Home/>
              <AboutMe/>
            </div>
          )}/>
          <Route exact={true} path='/Projects' render={() => (
            <div className="App">
            <ParticlesHome/>
              
            </div>
          )}/>
          <Route exact={true} path='/AboutMe' render={() => (
            <div className="App">
            <ParticlesHome/>
            </div>
          )}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
