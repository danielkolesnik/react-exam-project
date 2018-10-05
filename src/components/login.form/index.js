// outsources
import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Button, Input, Label, FormGroup, FormFeedback } from 'reactstrap';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import ReduxToastr from 'react-redux-toastr';

// local dependencies
import { LOGIN } from '../../actions/types';

function NickField({input, meta, ...attr}) {
    let hasError = meta.touched && ( meta.error !== undefined );
    return (
        <FormGroup>
            <Label className='login-form-label' for="nickName">Nickname</Label>
            <Input {...input} {...attr} invalid={hasError && !meta.active} valid={!hasError && meta.touched} />
            {hasError&&meta.error.length > 0 ? <FormFeedback tooltip>{meta.error}</FormFeedback> : ''}
        </FormGroup>
    )
}
function PassField({input, meta, ...attr}) {
    let hasError = meta.touched && ( meta.error !== undefined );
    return (
        <FormGroup>
            <Label className='login-form-label' for="password">Password</Label>
            <Input {...input} {...attr} invalid={hasError && !meta.active} valid={!hasError && meta.touched} />
            {hasError&&meta.error.length > 0 ? <FormFeedback tooltip>{meta.error}</FormFeedback> : ''}
        </FormGroup>
    )
}

class LoginForm extends Component {

    submit( values, dispatch ) {
        const { nick, pass } = values;
        return new Promise((resolve, reject) => {
                dispatch({type: LOGIN.LOG_IN, nick, pass, resolve, reject})
        })
        .catch((error) => {

            if(error) {
                throw new SubmissionError({nick: '',pass: ''});
            } else {
                throw new SubmissionError(error);
            }
        });
    }

    render() {

        return (
            <div className='login-form'>
                <form onSubmit={ this.props.handleSubmit(this.submit.bind(this)) } style={{textAlign: 'center'}}>
                    <ReduxToastr
                        timeOut={3000}
                        newestOnTop={false}
                        preventDuplicates
                        position="top-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                        closeOnToastrClick/>
                    <Field
                        name="nick"
                        component={ NickField }
                        placeholder="Enter nickname"
                        type="text"
                        id='nickName'
                            />
                    <Field
                        name='pass'
                        component={ PassField }
                        placeholder="Password"
                        type="password"
                        id='password'
                            />
                    <Button outline color='warning' disabled={this.props.pristine || (this.props.submitting && !this.props.submitFailed) || this.props.invalid} type='submit'> Submit </Button>
                </form>
            </div>
        );
    }
}

const validate = ( values ) => {
    let { nick, pass } = values; // , ...options
    const errors = {};

    if (!nick) {
        errors.nick = 'nickname required';
    }

    if (!pass) {
        errors.pass = 'password required';
    } else if ( pass.length < 6 ) {
        errors.pass = 'password length should be at least 6 symbols';
    }

    return errors;
};

export default connect(
    state => {
        return {
            ...state.login
        }
    },
    dispatch => {
        return {
        }
    }
)(reduxForm({
    form: 'login',
    initialValues: {
        nick: '',
        pass: ''
    },
    onSubmitFail: (errors, dispatch, submitError, props) => {
        toastr.error('You are mistaken..', 'Wrong Nickname or Password, try again.');
    },
    onSubmitSuccess: (result, dispatch, props) => {
        if(result) {
            props.history.push('/');

        }
    },
    validate: validate
})(LoginForm));