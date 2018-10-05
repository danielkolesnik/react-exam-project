
// outsource dependencies

// local dependencies
import { ADMIN } from '../../actions/types';


// configuration
let initial = {
    preloader: false,
    usersList: [],
    listReady: false
};

// export
export default function ( state = initial, action ) {
    let { type, ...options } = action;
    switch ( type ) {
        default:
            state = {...state};
            break;
        case ADMIN.CLEAR:
            state = initial;
            break;
        case ADMIN.PRELOADER:
            state = { ...state, preloader: options.preloader };
            break;
        case ADMIN.GET_DATA:
            state = { ...state, data: {...state.data, ...options} };
            break;
        case ADMIN.UPDATE_DATA:
            state = { ...state, ...options} ;
            break;
    }
    return state;
}