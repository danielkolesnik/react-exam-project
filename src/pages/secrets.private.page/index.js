// outsource
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// local dependencies
// actually it should be taken with emulation of making request & downloading through the saga(like on login & admin pages), but I had not enough of time for that
import { secretsList } from '../../components/secrets/secrets.base';

class Secrets extends React.Component {

    render() {
        return (
            <div className='secrets-page'>
                <Container>
                    <Row>
                        <Col>
                            <div className='content-wrapper'>
                                <div className='secrets-content'>
                                    <h1 className='fascinating-title'>Here<br/>you can see<br/>the most shocking secrets of humanity<br/>ever</h1>
                                </div>
                                <div className='secrets-content'>
                                    <ul className='secrets-list'>
                                        {
                                            secretsList.map( (secret, index) => {
                                                return <li className='secret' key={index}><a href={secret.url}>{secret.title}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
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
            user: state.login.user
        }
    },
    dispatch => {
        return {

        }
    }
)(Secrets);
