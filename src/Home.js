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
const logo = require("./assets/blueLogo.png")
const PEO = require("./assets/professional-engineers-ontario-logo.png")
const image1 = require("./assets/SystemDesign.jfif")
const image2 = require("./assets/Survey.jfif")
const image3 = require("./assets/NoiseMeter.jpg")
const image4 = require("./assets/Planning.jpg")
const image5 = require("./assets/FireSafety.jpg")
const don = require("./assets/Don.jfif")
const medil = require("./assets/Medil.jpg")


export const Home = () => {
    

    return(

        <div>
            <Jumbotron style = {{backgroundImage:  `url(${panel})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'rgba(200,200,200,0.5)'}}>
                <img src = {logo} style = {{maxWidth: 200}}/>
                <p style = {{color: "white"}}><i>
                    Providing our clients with affordable, optimal, professional solutions to challenges in Building Services Engineering
                </i></p>
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
                <Tab.Container id="left-tabs-example" defaultActiveKey="elem1">
                    <Row>
                        <Col sm={4}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="elem1">System Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem2">Existing System Condition Survey</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem3">Performance Measurement</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem4">Maintenance and Operation Plans Development</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem5">Fire Safety Plans (Development, Review, Revisions)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="elem6">Property Condition Assessment</Nav.Link>
                            </Nav.Item>
                            
                            
                        </Nav>
                        </Col>
                        <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="elem1">
                            <ul>
                                <li>Heating System Retrofits</li>
                                <li>Plumbing Systems</li>
                                <li>Backflow Prevention Systems</li>
                                <li>HVAC Systems</li>
                                <li>Design, drawings and specifications, building permits, construction review, and certification</li>
                            </ul>
                            <div style = {{textAlign: "center"}}>
                                <img src = {image1} style = {{width: "80%", maxWidth: 400}} />
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem2">
                            Whether it is a heating plant, ventilation system, air-conditioning system, a plumbing system, 
                            a roofing system, a garage slab, or any other building component, our engineering professionals 
                            in the building services industry can provide you with a survey report complete with recommendations.
                            <div style = {{textAlign: "center"}}>
                                <img src = {image2} style = {{width: "80%", maxWidth: 400}} />
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem3">
                            Measuring the performance of an existing system is the only way to make an educated
                            investment decision that makes proper economic sense. We can help your decisions by
                            measuring the performance of many building systems with non-intrusive methods using 
                            the following measuring tools and interpreting the results with technical reports:
                            <div style = {{display: "flex", flexDirection: "row"}}>
                            <ul style = {{flexGrow: 1}}>
                                <li>Temperature loggers</li>
                                <li>Clamp-on flowmeter</li>
                                <li>Air flow meter</li>
                                <li>Watt-hour meter</li>
                                <li>Light-level meter</li>
                                <li>Noise level meter</li>
                            </ul>
                            <div style = {{textAlign: "center", flexGrow: 1}}>
                                <img src = {image3} style = {{width: "80%", maxWidth: 400, padding: 10}} />
                            </div>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem4">
                            Our building operations and maintenance professionals can develop and upkeep policies
                            and programs for your building system operations such as:
                            <ul>
                                <li>Periodic inspections and reports by qualified building operators</li>
                                <li>Maintenance specifications development</li>
                                <li>Safety planning development</li>
                                <li>Excel based reporting systems with real-time reporting</li>
                            </ul>
                            <div style = {{textAlign: "center"}}>
                                <img src = {image4} style = {{width: "80%", maxWidth: 400}} />
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem5">
                            The Ontario Fire Code requires that residential, insitutional and industrial buildings to have
                            an approved Fire Safety plan. The Fire Safety plan should be reviewed and revised 
                            annually. We develop Fire Safety plans customized to each building, review or revise
                            existing plans to meet current standards. Our services include presenting developed Fire Safety plans
                            to the relevant municipality and obtaining approval on your behalf. 
                            <div style = {{textAlign: "center"}}>
                                <img src = {image5} style = {{width: "80%", maxWidth: 400}} />
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="elem6">
                            We have many years of experience in evaluating buildings - residential, commercial, and institutional - based on a thorough inspection
                            following ASTM E2018 Standard Guide for various types of needs. Are you planning to invest in a new property? We can provide you with a 
                            <b> pre-purchase report</b> to make an informed decision. If you are planning to refinancing your property, we can provide you with a 
                            <b> refinancing report</b> that your bank will likely ask for. You may need to know the condition of building prior to leasing or the end
                            of a lease term. Our <b>pre-lease</b> and <b>end-of-lease</b> assessments can help you to enjoy a hassle-free experience. If you are 
                            planning new construction, keep in mind construction activities can have adverse effects on neighbouring buildings. In this type of scenario,
                            we can help with <b>pre-construction</b> and <b>post-construction</b> surveys on neighbouring buildings to protect you from damage claims.
                            <b> Capital planning</b> is another area where we can offer you our services. Our reports can help you in timing expenditures, giving you 
                            financial breathing room and reducing overall costs.
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
                            <div style = {{verticalAlign: "bottom", color: "#003768"}}>
                                <p><b>Authorized by the Association of Professional Engineers Ontario to provide Professional Engineering Services</b></p>
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
                        <div><Image src = {don} roundedCircle  style = {{width: 90, height: 90}}/></div>
                        <div style = {{width: 10}}/>
                        <div>
                            <h5>Principal</h5>
                            <h6>Don D. Pieris</h6>
                            <p>MSc, P.Eng., C Eng, MIMechE (UK), MASHRAE</p>
                        </div>
                    </div>
                </Col>
                <Col>
                   <div style = {{display: "flex", margin: "0 auto"}}>
                        <div><Image src = {medil} roundedCircle style = {{width: 90, height: 90}}/></div>
                        <div style = {{width: 10}}/>
                        <div>
                            <h5>Associate</h5>
                            <h6>Medil Gamage</h6>
                            <p>BSc.Eng, P.Eng.</p>
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