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
import { emphasize } from '@material-ui/core'

const ems = require("./assets/ems.png")
const me = require("./assets/me.jpg")




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
            <Image src = {me} className = "profile" roundedCircle  />
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
        <Col md = "auto" style = {{paddingLeft: 5}}>
          <div className = "job-title"><em>{props.title}</em></div>
        </Col>
        <Col style = {{paddingLeft: 5}}>
        <div className = "job">{props.company}</div>
        </Col>
        <Col md = "auto" style = {{marginRight: 0, paddingRight: 5, marginLeft: "auto"}}>
        <div className = "date">{props.date}</div>
        </Col>
      </Row>
      <Row>
        <Col style = {{padding: "0px 5px 0px 5px"}}>
        <div className = "describe">
          {props.description}
          
        </div>
        <div style = {{height: 5}}/>
        {props.skills.map(skill => {
            return(
              <div className = {"skillItemShape"}>
                <p className = {"skillItem"}>{skill}</p>
              </div>
            )
          })}
        <div style = {{height: 20}}/>
        </Col>

      </Row>
     
      </Fragment>
    )
  }
    
  const jobs = [
    {
      title: "Junior DevOps Developer @",
      date: "May 2020 - Present",
      company: "Honeybee Hub Inc.",
      description: "Honeybee Hub is a digital marketplace startup connecting researchers and research study participants. BLAH BLAH BLAH BLAH",
      skills: ["Kubernetes", "Docker", "Google Cloud Platform", "MS Azure"]
    },
    {
      title: "Full Stack Web Developer (Co-op) @",
      date: "Jan 2020 - Apr 2020",
      company: "Honeybee Hub Inc.",
      description: "Honeybee Hub is a digital marketplace startup connecting researchers and research study participants. BLAH BLAH BLAH BLAH",
      skills: ["React.js", "Node.js", "MongoDB", "Mongoose.js", "Express.js", "HTML", "CSS"]
    },
    
    {
      title: "Lead Mechanical Executive @",
      date: "Sep 2015 - Jun 2019",
      company: "Absolute Robotics",
      description: "Honeybee Hub is a digital marketplace startup connecting researchers and research study participants. BLAH BLAH BLAH BLAH",
      skills: [ "Java", "Fundraising", "Team Management","Mechanical Design", "Woodworking"]
    },

    {
      title: "Piano Teacher",
      date: "Jul 2017 - Jan 2019",
      company: "(Self-Employed)",
      description: "Honeybee Hub is a digital marketplace startup connecting researchers and research study participants. BLAH BLAH BLAH BLAH",
      skills: ["Entrepreneurship"]
    },

    {
      title: "Assistant Director @",
      date: "Sep 2016 - Jan 2019",
      company: "PLASP",
      description: "Honeybee Hub is a digital marketplace startup connecting researchers and research study participants. BLAH BLAH BLAH BLAH",
      skills: ["Volunteerism"]
    }

  ]

  const Experience = () => {
    return(
      <Fragment>
      <HeaderCard title = {"Experience"}/> 
      <div style = {{height: 10}}/>
      {/* <Card style = {{backgroundColor: "#1d1f2f"}}> */}
      <Card className = "projects">

      <div style = {{height: 10}}/>
        <Container style = {{padding: "5%"}}>
        {jobs.map(job => {
          return(<Job 
            title = {job.title} 
            company = {job.company} 
            description = {job.description} 
            date = {job.date}
            skills = {job.skills}
            />)
        })}
        <div style = {{height: 100}}/>
        </Container>
      </Card>
      </Fragment>
    )
  }

  const Project = (props) => {
    return (
      <Fragment>
      <Row>
        <Col md = "auto" style = {{paddingLeft: 0}}>
          <div className = "job-title"><em>{props.title}</em></div>
        </Col>
        
        <Col md = "auto" style = {{marginRight: 0, paddingRight: 0, marginLeft: "auto"}}>
          
            
          
        </Col>
      </Row>
      <div style = {{height: 10}}/>
      <Row>
        <Col style = {{padding: 15, textAlign: "center"}} md = {6}>
          <img src = {props.image} style = {{maxWidth: "100%"}}/>
          <div style = {{height: 5}}/>
        </Col>
        <Col style = {{padding: "0px 0px 0px 0px", textAlign: "center"}}>
        {props.skills.map(skill => {
            return(
              <div className = {"skillItemShape"}>
                <p className = {"skillItem"} >{skill}</p>
              </div>
            )
          })}
        <div style = {{height: 5}}/>
        <div className = "describe">
          {props.description}
        </div>
        <div style = {{height: 15}}/>
        <a target="_blank" href={props.link}><button><p>
          {props.buttonText}
        </p></button></a>
        
        </Col>

      </Row>
     
      </Fragment>
    )
  }

  const Projects = () => {
    return(
      <Fragment>
        <HeaderCard title = {"Projects"}/> 
        {projects.map(project => {
          return (
            <Fragment>
            
            <div style = {{height: 10}}/>
            <Card className = "projects">
            <div style = {{height: 5}}/>
              <Container style = {{padding: "5%"}}>
              <Project 
                title = {project.title} 
                description = {project.description} 
                skills={project.skills}
                image = {project.image}
                buttonText = {project.buttonText}
                link = {project.link}
              />
              <div style = {{height: 10}}/>
              </Container>
            </Card>
            </Fragment>
          )
    })}
      </Fragment>
    )
  }
  
  const projects = [
    {
      title: "Employee Management System",
      skills: ["Java", "Java"],
      image: ems,
      buttonText: "Take a look at the code on GitHub",
      link: "https://github.com/chamod-gamage",
      description: "Honeybee Hub is a digital marketplace startup connecting researchers and research study participants. BLAH BLAH BLAH BLAH"
    },
    

  ]

    return(

        <div>
            <Jumbotron style = {{backgroundColor: '#131313', borderRadius: 0, margin: 0, zIndex: 20}}>
                <header className="App-header">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto+Mono|Raleway"/>
                    <Name/>
                    <Ticker/>
                                      
                </header>
                <div style = {{height: 30}}/>
                <Layout>
                  <Introduction/>
                  <div style = {{height: 20}}/>
                  <Experience/>
                  <div style = {{height: 20}}/>
                  <Projects/>
                </Layout>
            </Jumbotron>
              

            
            
        </div>
    )
}




  