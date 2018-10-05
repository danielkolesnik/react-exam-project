

// outsource dependencies
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';


// local dependencies
import login from '../pages/login.page/reducer';
import admin from '../pages/admin.private.page/reducer';

export default combineReducers({
    login,
    admin,
    toastr: toastrReducer,
    form: formReducer
});
