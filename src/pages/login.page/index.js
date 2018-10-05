// outsource
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// local dependencies
// import PreloaderImg from '../../assets/images/sun-preloader.png';
import LoginForm from '../../components/login.form';
import BasicPreloader from '../../components/preloaders/basic.preloader';
import {LOGIN} from "../../actions/types";

class Home extends React.Component {
    render() {
        return (
            <div className='login-page'>
                <Container>
                    <Row>
                        <Col>
                            <div className='content-wrapper'>
                                {this.props.preloader ? <BasicPreloader/> : ''}
                                <div style={{margin: '0 90px'}}>

                                    <LoginForm history={this.props.history}/>
                                </div>
                                {this.props.preloader ? <BasicPreloader/> : ''}
                            </div>
                            {/*<img src={PreloaderImg} height={150 + 'px' } alt="loading-indicator"/>*/}
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
            authorized: state.auth,
            ...state.login
        }
    },
    dispatch => {
        return {
            btnClicked: () => dispatch({type: LOGIN.PRELOADER})
        }
    }
)(Home);
