import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './Home.js'

import {NoMatch} from './NoMatch.js'
import {Layout} from './components/Layout.js'
// import {NavigationBar} from './Home.js'
// const resume = require('./assets/chamod-resume.pdf')

const App = () => {
  const [selected, setSelected] = useState(0)
    return (
      <React.Fragment>
        <Router>
          <Route exact path = "/" component = {Home}/>
        </Router>
        {/* <NavigationBar setSelected = {setSelected}/>
          <Router>
            <Layout>
              <Switch>
                <Route exact path = "/about" component = {About} />
                <Route exact path = "/contact" component = {Contact} />
                <Route exact path = "/services" component = {Services} />
                <Route exact path = "/resume" component = {resume}></Route>
              </Switch>
            </Layout>
            <Switch>
              <Route exact path= "/" component = {Home}/>
            </Switch>
          </Router> */}
        
      </React.Fragment>
    );
  
}

export default App;
