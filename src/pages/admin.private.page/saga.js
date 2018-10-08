
// outsource dependencies
import { takeEvery, call, put, take} from 'redux-saga/effects';

// local dependencies
import { ADMIN } from '../../actions/types';
import { usersBase } from "../../components/users/user.base";

//
function* getUsersSaga( action ) {
    let { type, ...options } = action;
    // turn on preloader on admin page
    yield put({type: ADMIN.PRELOADER, preloader: true});
    // starting procedure of taking users array
    yield put({type: ADMIN.GET_DATA.START, ...options, listReady: false });
    // taking result of importing users
    let result = yield take([ADMIN.GET_DATA.SUCCESS, ADMIN.GET_DATA.ERROR]);
    switch(result.type) {
        // if users are successfully received
        case ADMIN.GET_DATA.SUCCESS:
            let { type, ...pureResult } = result;
            yield put({ type: ADMIN.UPDATE_DATA, ...pureResult });
            break;
        // if something happened and go wrong
        case ADMIN.GET_DATA.ERROR:
            let { error } = result;
            yield put({ type: ADMIN.UPDATE_DATA, ...error });
            break;
        default:
    }
    // turn off preloader on admin page
    yield put({type: ADMIN.PRELOADER, preloader: false});

}

function* getDataSaga( action ) {
    let { type, ...options } = action;
    try {
        let result = yield call(getData, options);

        yield put({type: ADMIN.GET_DATA.SUCCESS, ...result});

    } catch ( error ) {

        yield put({type: ADMIN.GET_DATA.ERROR, error});

    }

    yield put({type: ADMIN.GET_DATA.FINISH});
}

// Export root watcher for "LOGIN"
export default function* () {
    yield takeEvery( ADMIN.GET_DATA.START, getDataSaga );
    yield takeEvery( ADMIN.GET_USERS, getUsersSaga );
}


function getData () {

    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve({
                usersList: usersBase,
                listReady: true
            });
        }, 1*1000);
    });
}