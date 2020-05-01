import React from 'react'
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
const panel = require("./assets/Saxo_Bank_HQ_building.jpg")
const logo = require("./assets/DPE.png")
const PEO = require("./assets/professional-engineers-ontario-logo.png")



export const Home = () => {
    

    return(

        <div>
            <Jumbotron style = {{backgroundImage:  `url(${panel})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'rgba(200,200,200,0.5)'}}>
                <img src = {logo} style = {{maxWidth: 200}}/>
                <p style = {{color: "white"}}>
                    Providing our clients with affordable, optimal, professional solutions to challenges in Building Services Engineering
                </p>
            </Jumbotron>
            
            {/* <div style = {{height: window.innerHeight*0.95, width: '100%',backgroundPosition: 'center',backgroundSize: `cover`, backgroundImage : `url(${panel})`, backgroundRepeat: 'no-repeat', overflow: 'hidden',padding: "20%",textAlign: "center", alignItems: 'center'}}>
                <div style = {{backgroundColor: 'rgba(200,200,200,0.5)',width: "100%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    
                    <img style = {{margin: 'auto'}}src = {logo}/>
                    <h1>“Providing our clients with affordable, optimal, professional solutions to challenges in Building Services Engineering”</h1>
                    
                </div>
            </div> */}
            
            <Layout>
                <Card>
                <Card.Header as="h5"><a name = "services">Services</a></Card.Header>
                <Card.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={4}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="elem1">Energy Efficient Heating Plant Retrofit Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem2">Hot Water Heating System Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem3">Plumbing System Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem4">Backflow Prevention System Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem5">HVAC System Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem6">Maintenance and Operations Plans Development</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem7">Fire Safety Plans (Development, Review, Revisions)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem8">Existing System Condition Survey</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem9">Performance Measurement</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem10">Project Management</Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
                        </Col>
                        <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="elem1">
                            Description 1.
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem2">
                            Description 2
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem3">
                            Description 3
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem4">
                            Description 4
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem5">
                            Description 5
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem6">
                            Description 6
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem7">
                            Description 7
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem8">
                            Description 8
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem9">
                            Description 9
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem10">
                            Description 10
                            </Tab.Pane>
                            <Tab.Pane eventKey = "default">
                                Default
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
               
                </Card.Body>
                <Card.Footer>

                    <Row>
                        <Col md = {8} >
                            <div style = {{verticalAlign: "bottom"}}>
                                <p>Authorized by the Association of Professional Engineers Ontario to provide Professional Engineering Services</p>
                            </div>
                        </Col>
                        <Col md = {4}>
                            <div><img src = {PEO} style = {{width: "100%"}}/></div>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
            <br/>
            <a name = "about"/>
            <Card>
                <Card.Header>
                    <div><h5>About</h5></div>
                </Card.Header>
                <Card.Body style = {{alignItems: "center"}}>
                <Row>
                
                <Col>
                   <div style = {{display: "flex", margin: "0 auto"}}>
                        <div><Image src = {logo} roundedCircle  style = {{width: 90, height: 90}}/></div>
                        <div>
                            <h5>Principal</h5>
                            <h6>Don D. Pieris</h6>
                            <p>MSc, P.Eng., C Eng, MIMechE (UK), MASHRAE</p>
                        </div>
                    </div>
                </Col>
                <Col>
                   <div style = {{display: "flex", margin: "0 auto"}}>
                        <div><Image src = {logo} roundedCircle style = {{width: 90, height: 90}}/></div>
                        <div>
                            <h5>Associate</h5>
                            <h6>Medil Gamage</h6>
                            <p>MSc, P.Eng., C Eng, MIMechE (UK), MASHRAE</p>
                        </div>
                    </div>
                </Col>
               
                </Row>

                </Card.Body>
            </Card>
            <br/>
            </Layout>
            <a name = "contact"/>
            <div style = {{backgroundColor: "rgb(211,211,211)"}}>
                <div style = {{textAlign: "center"}}>
                    
                    
                    <div style = {{display: "inline-block", margin: "0 auto"}}>
                        <div>
                            <div>
                            <EmailOutlinedIcon/>
                            <p> info@diverseprojects.ca</p>
                            </div>
                            <div style = {{width: 10}}/>
                            <div>
                            <LocationOnOutlinedIcon/>
                            <p> 2452 Mainroyal Street, Mississauga, Ontario, L5L 1C9</p>
                            </div>
                            <div style = {{width: 10}}/>
                            <div>
                            <PhoneOutlinedIcon/>
                            <p> (416)-906-8039</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}