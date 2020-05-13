import React, {Fragment} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import styled from 'styled-components'
const logo = require("../assets/blueLogo.png")
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

export const NavigationBar = () => (
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
                    <Nav.Item><Nav.Link href = "/"><hnav>About</hnav></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "#services"><hnav>Experiences</hnav></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "#about"><hnav>Projects</hnav></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "#contact"><hnav>Resume</hnav></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    {/*  </Styles> */}
    </Fragment>
)