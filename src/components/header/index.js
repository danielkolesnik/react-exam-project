// outsource
import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local dependencies
import Iluminati from '../../assets/images/iluminati.png';
import { LOGOUT } from '../../actions/types';

class Header extends React.Component {

    render() {
        return (
            <header className='App-header' style={{textAlign: 'center'}}>
                <NavLink to='/'>
                    <img src={Iluminati} alt="logo" height={'80px'}/>
                </NavLink>
                <div className='navbar' style={{justifyContent: 'center'}}>
                    <NavLink to='/' style={{margin: '0 10px'}}>
                        <Button size='sm' outline color='secondary'>
                            <FontAwesomeIcon icon='home' style={{marginRight: '5px'}}/>Home
                        </Button>
                    </NavLink>
                    {this.props.authorized ? '' :
                        <NavLink to='/login' style={{margin: '0 10px'}}>
                            <Button size='sm' outline color='secondary'>
                                <FontAwesomeIcon icon='door-closed' style={{marginRight: '5px'}}/>Login
                            </Button>
                        </NavLink>
                    }
                    {this.props.authorized ?
                        <NavLink to='/secrets' style={{margin: '0 10px'}}>
                            <Button size='sm' outline className='btn-gold'>
                                <FontAwesomeIcon icon='question' style={{marginRight: '5px'}}/>Secrets
                            </Button>
                        </NavLink>
                                            : ''
                    }
                    {this.props.user.admin ?
                        <NavLink to='/admin-page' style={{margin: '0 10px'}}>
                            <Button size='sm' outline className='btn-gold'>
                                <FontAwesomeIcon icon='key' style={{marginRight: '5px'}}/>Admin
                            </Button>
                        </NavLink>
                                            : ''
                    }
                    {this.props.authorized ?
                        <NavLink to='/user-settings' style={{margin: '0 10px'}}>
                            <Button size='sm' outline className='btn-gold'>
                                <FontAwesomeIcon icon='cog' style={{marginRight: '5px'}}/>User
                            </Button>
                        </NavLink>
                                            : ''
                    }
                    {this.props.authorized ?
                        <NavLink to='/' style={{margin: '0 10px'}}>
                            <Button onClick={ this.props.logout } size='sm' outline color='secondary'>
                                <FontAwesomeIcon icon='door-open' style={{marginRight: '5px'}}/>Logout
                            </Button>
                        </NavLink>
                        : ''
                    }
                </div>
            </header>
        );
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
})(Header);