import React, { Fragment } from 'react'
import {Container} from 'react-bootstrap'
import { render } from '@testing-library/react'

export const Layout = (props) => (
    <Fragment>
    <Container>
        {props.children}
    </Container>
    
    </Fragment>
)