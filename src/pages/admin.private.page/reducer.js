
// outsource dependencies

// local dependencies
import { ADMIN } from '../../actions/types';


// configuration
let initialState = {
    preloader: false,
    usersList: [],
    listReady: false
};

// export
export default function ( state = initialState, action ) {
    let { type, ...options } = action;
    switch ( type ) {
        default:
            state = {...state};
            break;
        case ADMIN.CLEAR:
            state = initialState;
            break;
        case ADMIN.PRELOADER:
            state = { ...state, preloader: options.preloader };
            break;
        case ADMIN.GET_DATA.START:
            state = { ...state, ...options};
            break;
        case ADMIN.UPDATE_DATA:
            state = { ...state, ...options} ;
            break;
    }
    return state;
}