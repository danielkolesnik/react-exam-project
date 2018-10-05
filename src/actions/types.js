
export const SUFFIX = {
    START: 'START',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    FINISH: 'FINISH',
};

export function createType ( type ) {
    let action = {};
    for ( let name of Object.keys(SUFFIX) ) {
        action[name] = `${type}.${name}`;
    }
    return action;
}

let loginPrefix = '@login-page/';
export const LOGIN = {
    // simple
    PRELOADER: loginPrefix+'PRELOADER',
    CHECK_LOGIN: createType(loginPrefix+'CHECK_LOGIN'),
    UPDATE_DATA: loginPrefix+'UPDATE_DATA',
    HANDLE_ERROR: loginPrefix+'HANDLE_ERROR',
    // complex
    LOG_IN: loginPrefix+'LOG_IN',
};

export const LOGOUT = 'LOGOUT';

let userPrefix = '@admin-page/';
export const ADMIN = {
    PRELOADER: userPrefix+'PRELOADER',
    GET_DATA: createType(userPrefix+'GET_DATA'),
    UPDATE_DATA: userPrefix+'UPDATE_DATA',
    HANDLE_ERROR: userPrefix+'HANDLE_ERROR',
    // complex
    GET_USERS: userPrefix+'GET_USERS',
};