// outsource
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// local dependencies
import { ADMIN } from "../../actions/types";
import BasicPreloader from '../../components/preloaders/basic.preloader';

class Admin extends React.Component {

    render() {
        return (
            <div className='user-page'>
                <Container>
                    <Row>
                        <Col>
                            <div className='content-wrapper'>
                                <h1 className='header'>Users Information</h1>
                                {
                                    this.props.listReady ?
                                        <table className='user-info-table'>
                                            <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Surname</th>
                                                <th>Nickname</th>
                                                <th>Password</th>
                                                <th>isAdmin</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.props.usersList.map( (user, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{user.name}</td>
                                                            <td>{user.surname}</td>
                                                            <td>{user.nick}</td>
                                                            <td>{user.pass}</td>
                                                            <td>{user.admin ? 'admin' : '-'}</td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                            <tr>

                                            </tr>
                                            </tbody>
                                        </table>
                                                            :
                                        <BasicPreloader/>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    componentWillMount() {
        this.props.loadUsers();
    }
}

export default connect(
    state => {
        return {
            user: state.login.user,
            ...state.admin
        }
    },
    dispatch => {
        return {
            loadUsers: () => dispatch({type: ADMIN.GET_USERS})
        }
    }
)(Admin);
