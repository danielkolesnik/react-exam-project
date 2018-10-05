import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Error extends Component {


    render() {
        return (
            <div className='error-page'>
                <Container>
                    <Row>
                        <Col>
                            <div className='content-wrapper'>
                                <div className='error-content'>
                                    <h1 className='error-title'>
                                        The page <span className='wrong-path'>iluminatirulestheworld.com{this.props.history.location.pathname}</span> doesn't exist!
                                    </h1>
                                </div>
                                <div className='error-content'>
                                    <NavLink to='/'><Button color='warning'>Home</Button></NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}