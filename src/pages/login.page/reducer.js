
// outsource dependencies

// local dependencies
import { LOGIN, LOGOUT } from '../../actions/types';


// configuration
let initialState = {
    preloader: false,
    // auth: false,
    // user: {},
    // to be auto loggined on reload please comment two strings before and uncomment two strings after that string  [NOTICE: For dev purposes ONLY]
    auth: true,
    user: {name: 'Test', surname: 'Testovich', nick: 'testNick', pass: 'testPass', admin: true}
};

// export
export default function ( state = initialState, action ) {
    let { type, ...options } = action;
    switch ( type ) {
        default:
            state = {...state};
            break;
        case LOGIN.CLEAR:
            state = initialState;
            break;
        case LOGIN.PRELOADER:
            state = { ...state, preloader: options.preloader };
            break;
        case LOGIN.UPDATE_DATA:
            state = { ...state, ...options} ;
            break;
        case LOGOUT:
            state = { ...state, user: {}, auth: false};
            break;
    }

    return state;
}