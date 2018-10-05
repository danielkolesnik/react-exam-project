// outsource
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// local dependencies
// import { USER } from '../../actions/types';

class User extends React.Component {

    render() {
        return (
            <div className='user-page'>
                <Container>
                    <Row>
                        <Col>
                            <div className='content-wrapper'>
                                <h1 className='header'>About You</h1>
                                <table className='user-info-table'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Surname</th>
                                            <th>Nickname</th>
                                            <th>Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.props.user.name}</td>
                                            <td>{this.props.user.surname}</td>
                                            <td>{this.props.user.nick}</td>
                                            <td>{this.props.user.pass}</td>
                                        </tr>
                                    </tbody>
                                </table>
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
)(User);
