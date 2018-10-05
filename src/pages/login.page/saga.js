
// outsource dependencies
import { takeEvery, call, put, take} from 'redux-saga/effects';

// local dependencies
import { LOGIN } from '../../actions/types';
import { usersBase } from "../../components/users/user.base";

//
function* loginSaga( action ) {
    let { type, ...options } = action;

    // turn on preloader on login page
    yield put({type: LOGIN.PRELOADER, preloader: true});

    // starting procedure of checking is there is user with entered { nick, pass } = options
    yield put({type: LOGIN.CHECK_LOGIN.START, ...options });

    // taking result of checking user login information
    let result = yield take([LOGIN.CHECK_LOGIN.SUCCESS, LOGIN.CHECK_LOGIN.ERROR]);


    switch(result.type) {
        // if login information correct & there is user with entered nick & pass
        case LOGIN.CHECK_LOGIN.SUCCESS:
            let { type, ...pureResult } = result;

            yield put({ type: LOGIN.UPDATE_DATA, ...pureResult });

            break;
        // if something happened
        case LOGIN.CHECK_LOGIN.ERROR:
            let { error } = result;

            yield put({ type: LOGIN.UPDATE_DATA, ...error });

            break;
        default:
    }

    // turn off preloader on login page
    yield put({type: LOGIN.PRELOADER, preloader: false});

}

function* checkLoginSaga( action ) {
    let { type, ...options } = action;
    try {
        let result = yield call(checkData, options);

        yield put({type: LOGIN.CHECK_LOGIN.SUCCESS, ...result});

    } catch ( error ) {

        yield put({type: LOGIN.CHECK_LOGIN.ERROR, error});

    }

    yield put({type: LOGIN.CHECK_LOGIN.FINISH});
}

// Export root watcher for "LOGIN"
export default function* () {
    yield takeEvery( LOGIN.CHECK_LOGIN.START, checkLoginSaga );
    yield takeEvery( LOGIN.LOG_IN, loginSaga );
}

// export const usersBase = [
//     {
//         name: 'Boris',
//         surname: ' Molotovsky',
//         nick: 'Medved',
//         pass: 'vata2018',
//         admin: false
//     },
//     {
//         name: 'Daniel',
//         surname: 'Kolesnik',
//         nick: 'admin',
//         pass: 'root11',
//         admin: true
//     },
//     {
//         name: 'Katya',
//         surname: 'Ivanova',
//         nick: 'katysha',
//         pass: 'notsosmart',
//         admin: false
//     },
//     {
//         name: 'Anon',
//         surname: 'Anonov',
//         nick: 'anonimus',
//         pass: 'governmentshallnotpass',
//         admin: false
//     }
// ];

function findUser(nick, pass) {
    for(let user of usersBase) {
        if(user.nick === nick && user.pass === pass) return user;
    }
    return false;
}

function checkData ( {nick, pass, ...options} ) {
    console.log(options);
    let loginFormSubmitResolve = options.resolve;
    let loginFormSubmitReject = options.reject;

    return new Promise((resolve, reject) => {
        let user = findUser(nick, pass);
        if( user ) {
            setTimeout(()=> {
                resolve({
                    user: user ? user : {},
                    auth: user ? true : false,
                    userDoesNotExist: false
                });
                loginFormSubmitResolve(true);
            }, 2*1000);
        } else {
            reject({ userDoesNotExist: true, user: {}, auth: false});
            loginFormSubmitReject(true);
        }
    });
}