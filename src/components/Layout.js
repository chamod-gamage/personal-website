import React, { Fragment } from 'react'
import {Container} from 'react-bootstrap'
import { render } from '@testing-library/react'

export const Layout = (props) => (
    <Fragment>
    <Container style = {{padding:" 0vw 7vw 0vw 7vw"}}>
        
                {props.children}
            
    </Container>
    
    </Fragment>
)