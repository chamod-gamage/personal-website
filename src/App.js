import React, {Component, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './Home.js'
import ReactGA from 'react-ga'


const App = () => {
  
  useEffect(() => {
    ReactGA.initialize('UA-170137058-1');
    ReactGA.pageview('/homepage');
  }, [])
  
  const [selected, setSelected] = useState(0)
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = '*' component = {Home}/>
          </Switch>
        </Router>
        
      </React.Fragment>
    );
  
}

export default App;
