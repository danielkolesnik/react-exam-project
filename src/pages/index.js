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



class Layout extends React.Component {

    routList = [];

    render() {
        // add base routes for all users
        this.routList = [
            {
                name: 'home',
                to: '/',
                component: Home
            },
            {
                name: 'login',
                to: '/login',
                component: Login
            }
        ];
        // add private routes for authenticated users
        if(this.props.authenticated) {
            this.routList = this.routList.concat([
                {
                    name: 'secrets',
                    to: '/secrets',
                    component: Secrets
                },
                {
                    name: 'user',
                    to: '/user-settings',
                    component: User
                }
            ]);
            for(let route of this.routList) {
                if( route.to === '/login') {
                    this.routList.splice(this.routList.indexOf(route), 1);
                }
            }
        }
        // add private route especially for admins
        if(this.props.user && this.props.user.admin) {
            this.routList = this.routList.concat([
                {
                    name: 'admin',
                    to: '/admin-page',
                    component: Admin
                }
            ]);

        }
        // add error page for non-existent routes (NOTE it should be added last because of specifications of React Router)
        this.routList = this.routList.concat([
            {
                name: 'error',
                component: Error
            }
        ]);

        return (
            <Router>
                <main>
                    <Route path='/' component={ Header }/>
                    <Switch>
                        {
                            this.routList.map((route, index) => {
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