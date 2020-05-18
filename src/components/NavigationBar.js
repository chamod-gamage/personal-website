import React, {Fragment, useRef, useState} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import styled from 'styled-components'
const logo = require("../assets/me.jpg")
const resume = require('../assets/chamod-resume.pdf')
const scrollToRef = (ref) =>
    typeof window !== "undefined" && window.scrollTo(0, ref.current.offsetTop);

// const Styles = styled.div`
//     .navbar {
//         background-color: #131313
//     }

//     .navbar-brand, .navbar-nav .nav-link {
//         color: #bbb

//         &:hover {
//             color: white
//         }
//     }
// `

export const NavigationBar = () => { 
    const [selected, setSelected] = useState(0)

    return(
    
    <Fragment>
    {/*  <Styles> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto+Mono|Raleway"/>
        <Navbar sticky = "top" expand = "sm" style = {{backgroundColor: "#131313"}}>
            <Navbar.Brand href = "/"><hNavBrand><i>cg</i></hNavBrand></Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav" style = {{backgroundColor: "#e3e464", padding: 0}}>
                <hnav style = {{color: "#131313"}}>
                    <KeyboardArrowDownOutlinedIcon/>
                </hnav>
            </Navbar.Toggle>
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className = "ml-auto">
                    <Nav.Item><Nav.Link href = "#about" onClick = {()=>{setSelected(0)}}><hnav>About</hnav></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "#experience" onClick = {()=>{setSelected(1)}}><hnav>Experience</hnav></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "#projects" onClick = {()=>{setSelected(2)}}><hnav>Projects</hnav></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = {resume} target = "_blank"><hnav>Resume</hnav></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    {/*  </Styles> */}
    </Fragment>
)}