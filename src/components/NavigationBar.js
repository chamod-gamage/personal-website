import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'
const logo = require("../assets/blueLogo.png")
const Styles = styled.div`
    .navbar {
        background-color: #fafafa
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb

        &:hover {
            color: white
        }
    }
`

export const NavigationBar = () => (
    <Styles>
        <Navbar expand = "lg">
            <Navbar.Brand href = "/"><img style = {{maxWidth: 40}}src = {logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className = "ml-auto">
                    <Nav.Item><Nav.Link href = "/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "#services">Services</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "#about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "#contact">Contact Us</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)