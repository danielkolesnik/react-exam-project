// outsource
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

// base layout components
import Header from '../components/header';

// pages
import Home from './home.page';
import Login from './login.page';
import Secrets from './secrets.private.page';
import User from './user.private.page';
import Admin from './admin.private.page';
import Error from './error.page';

let getRouts = (auth, user) => {
    let routList = [
        {
            to: '/',
            component: Home
        },
        {
            to: '/login',
            component: Login
        }
    ];
    if(auth) {
        routList = [
            ...routList,
            {
                to: '/secrets',
                component: Secrets
            },
            {
                to: '/user-settings',
                component: User
            }
        ];
        for(let route of routList) {
            if( route.to === '/login') {
                routList.splice(routList.indexOf(route), 1);
            }
        }
    }
    if(user && user.admin) {
        routList = [
            ...routList,
            {
                to: '/admin-page',
                component: Admin
            }
        ];

    }
    routList = [
        ...routList,
        {
            component: Error
        }
    ];

    return routList;
};

class Layout extends React.Component {


    render() {

        const actualRoutList = getRouts(this.props.authenticated, this.props.user);

        return (
            <Router>
                <main>
                    <Route path='/' component={ Header }/>
                    <Switch>
                        {
                            actualRoutList.map((route, index) => {
                                if(route.to) {
                                    return <Route key={index} path={ route.to } component={ route.component } exact strict/>;
                                } else {
                                    return <Route key={index} component={ route.component } exact strict/>;
                                }
                            })
                        }

                    </Switch>
                </main>
            </Router>
        );
    }
}

export default connect(
    state => {
        return {
            authenticated: state.login.auth,
            user: state.login.user
        }
    },
    dispatch => {
        return {

        }
    }
)(Layout);