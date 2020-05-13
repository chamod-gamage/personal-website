import React, {useState, useEffect, Fragment} from 'react'
import {Layout} from "./components/Layout"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { Frame } from "framer";
// import Card from 'react-bootstrap/Card'
import "./App.css"

const panel = require("./assets/Saxo_Bank_HQ_building.jpg")
const logo = require("./assets/blueLogo.png")
const PEO = require("./assets/professional-engineers-ontario-logo.png")
const image1 = require("./assets/SystemDesign.jfif")
const image2 = require("./assets/Survey.jfif")
const image3 = require("./assets/NoiseMeter.jpg")
const image4 = require("./assets/Planning.jpg")
const image5 = require("./assets/Fire.jpg")
const don = require("./assets/Don.jfif")
const medil = require("./assets/Medil.jpg")



export const Home = () => {
  const [idx, setIdx] = useState(0)

  const Ticker = () => {

    const roles = ["Developer", "Designer", "Student", "Teacher", "Musician", "Explorer", "Creator"]
    
    return(
      <h3 onAnimationEnd = {() => {setIdx(idx+1); console.log(idx)}}>
        {roles[idx % roles.length]}
      </h3>
    )
  }
  
  const Name = () => {
    return(
      <Fragment>
        <div style = {{border: "3px solid #e3e464", padding: 10, textAlign: "center"}}>
          <h1 style = {{padding: "0.5vw"}}><i>
            {" chamod gamage "}
          </i></h1>
        </div>
        <div style = {{height: 10}}/>
      </Fragment>
     )
  }
  
    

    return(

        <div>
            <Jumbotron style = {{backgroundColor: '#131313', borderRadius: 0}}>
                <header className="App-header">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto+Mono|Raleway"/>
                    <Name/>
                    <Ticker/>                   
                </header>
                <div style = {{height: 30}}/>
                <Layout>
                  <Card className = "minicard">
                    <div style = {{height: 5}}/>
                    <h2 style = {{color: "#131313"}}>Experience</h2>
                    <div style = {{height: 5}}/>
                  </Card>
                </Layout>
            {/* <MyComponent/> */}
            </Jumbotron>
            
            
            
        </div>
    )
}




  