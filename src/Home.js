import React, {useState, useEffect, Fragment} from 'react'
import {Container} from 'react-bootstrap'
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
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
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
const me = require("./assets/me.jpg")
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

  const HeaderCard = (props) => {
    return(
      <Card className = "minicard">
        <div style = {{height: 5}}/>
          <h2 style = {{color: "#131313"}}><b>{props.title}</b></h2>
        <div style = {{height: 5}}/>
      </Card>
    )
  }
  
  const Introduction = (props) => {
    return(
      <Container>
        <Row>
          <Col md = {3} style = {{textAlign: "center"}}>
            <Image src = {me} className = "profile" roundedCircle  style = {{}}/>
            <div style = {{height: 10}}/>
          </Col>
          {/* <Col md = {1}/> */}
          
          <Col md = {9} >
            <Row style = {{textAlign: "left"}}>
            <intro>
              Hi! I'm Chamod. I'm a Systems Design Engineering student at the University of Waterloo passionate about tech
              and using it to improve the lives of people. When I'm not busy bringing my ideas to life or developing new skills, 
              you can catch me on my bike outside or scrolling through r/NBA.
            </intro>
            </Row>
            <br/>
            <Row>
              <h1>
                {"\u0020"}
              <a href = "https://github.com/chamod-gamage" target = "_blank"><GitHubIcon fontSize = "inherit"/></a>
              {"\u0020"}
              <a href = "https://www.linkedin.com/in/chamod-gamage/" target = "_blank"><LinkedInIcon fontSize = "inherit"/></a>
              {"\u0020"}
              <a href = "https://www.instagram.com/chamod.og/" target = "_blank"><InstagramIcon fontSize = "inherit"/></a>
              {"\u0020"}
              <a href = "mailto: chamodgamage26@gmail.com" target = "_blank"><MailIcon fontSize = "inherit"/></a>
              {"\u0020"}
              
              </h1>
            </Row>
          </Col>
        </Row>
      </Container>
    )  

  }

  const Job = (props) => {
    return (
      <Fragment>
      <Row>
        <Col md = "auto" style = {{paddingLeft: 0}}>
          <div className = "job-title"><em>{props.title}</em></div>
        </Col>
        <Col style = {{paddingLeft: 0}}>
        <div className = "job">{props.company}</div>
        </Col>
        <Col md = "auto" style = {{marginRight: 0, paddingRight: 0, marginLeft: "auto"}}>
        <div className = "date">{props.date}</div>
        </Col>
      </Row>
      <Row>
        <div className = "describe">
          {props.description}
          
        </div>

      </Row>
      </Fragment>
    )
  }
    
  const jobs = [
    {
      title: "Junior DevOps Developer @",
      date: "May 2020 - Present",
      company: "Honeybee Hub Inc.",
      description: "Honeybee Hub is a digital marketplace startup connecting researchers and research study participants. BLAH BLAH BLAH BLAH"
    },
    {
      title: "Full Stack Web Developer (Co-op) @",
      date: "Jan 2020 - Apr 2020",
      company: "Honeybee Hub Inc.",
      description: "Honeybee Hub is a digital marketplace startup connecting researchers and research study participants. BLAH BLAH BLAH BLAH"
    },
    
    {
      title: "Lead Mechanical Executive @",
      date: "Sep 2015 - Jun 2019",
      company: "Absolute Robotics",
      description: "Honeybee Hub is a digital marketplace startup connecting researchers and research study participants. BLAH BLAH BLAH BLAH"
    },

    {
      title: "Piano Teacher",
      date: "Jul 2017 - Jan 2019",
      company: "(Self-Employed)",
      description: "Honeybee Hub is a digital marketplace startup connecting researchers and research study participants. BLAH BLAH BLAH BLAH"
    },
    
    {
      title: "Assistant Director @",
      date: "Sep 2016 - Jan 2019",
      company: "PLASP",
      description: "Honeybee Hub is a digital marketplace startup connecting researchers and research study participants. BLAH BLAH BLAH BLAH"
    }

  ]
  

    return(

        <div>
            <Jumbotron style = {{backgroundColor: '#131313', borderRadius: 0, margin: 0, zIndex: 20}}>
                <header className="App-header">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto+Mono|Raleway"/>
                    <Name/>
                    <Ticker/>
                                      
                </header>
                <div style = {{height: 60}}/>
                <Layout>
                  <Introduction/>
                  <HeaderCard title = {"Experience"}/> 
                  {/* <p className = "section">>Experience</p> */}

                  <Card style = {{backgroundColor: "#1d1f2f"}}>
                  <div style = {{height: 10}}/>
                    <Container style = {{padding: "5%"}}>
                    {jobs.map(job => {
                      return(<Job title = {job.title} company = {job.company} description = {job.description} date = {job.date}/>)
                    })}
                    
                    {/* <Job title = "Junior DevOps Developer" company = "Honeybee Hub Inc." description = {descriptions[0]}/> */}
                    {/* <Job title = "Junior DevOps Developer" company = "Honeybee Hub Inc." description = {descriptions[0]}/> */}

                    <div style = {{height: 100}}/>
                    </Container>
                  </Card>
                </Layout>
            </Jumbotron>
              

            
            
        </div>
    )
}




  