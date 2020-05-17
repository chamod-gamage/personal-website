import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './Home.js'
import {Contact} from './Contact.js'
import {About} from './About.js'
import {Services} from './Services.js'
import {NoMatch} from './NoMatch.js'
import {Layout} from './components/Layout.js'
import {NavigationBar} from './components/NavigationBar.js'
const resume = require('./assets/chamod-resume.pdf')

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
          <Router>
            <Layout>
              <Switch>
                <Route exact path = "/about" component = {About} />
                <Route exact path = "/contact" component = {Contact} />
                <Route exact path = "/services" component = {Services} />
                {/* <Route exact path = "/resume" component = {resume}></Route> */}
              </Switch>
            </Layout>
            <Switch>
              <Route exact path= "/" component = {Home}/>
            </Switch>
          </Router>
        
      </React.Fragment>
    );
  }
}

export default App;
