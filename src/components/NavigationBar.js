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

