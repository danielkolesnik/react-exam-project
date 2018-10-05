// outsource
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LOGOUT } from "../../actions/types";

// local dependencies

class Home extends React.Component {
    render() {
        return (
            <div className='home-page'>
                <Container>
                    <Row>
                        <Col>
                            <div className='content-wrapper'>
                                {
                                    this.props.authorized ?
                                        <div className='welcome-block'>
                                            <h1 className='welcome-title'>Hello {this.props.user.name}!</h1>
                                        </div>
                                                            :
                                        ''
                                }
                                {
                                    this.props.authorized ? ' '

                                                            :
                                        <NavLink to={'/login'} onClick={this.props.btnClicked}>
                                            <Button outline color='warning' className='pl-5 pr-5'> JOIN US </Button>
                                        </NavLink>
                                }
                                {/*<Button onClick={ this.props.logout } outline color='warning' className='pl-5 pr-5'> LOGOUT </Button>*/}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(
    state => {
        return {
            authorized: state.login.auth,
            user: state.login.user
        }
    },
    dispatch => {
        return {
            logout: () => dispatch({ type: LOGOUT })
        }
    }
)(Home);
