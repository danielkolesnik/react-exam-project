
// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import login from '../pages/login.page/saga'
import admin from '../pages/admin.private.page/saga';

export default function* () {
    yield fork(login);
    yield fork(admin);
}