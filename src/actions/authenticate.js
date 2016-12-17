import * as types from 'types';
import Promise from 'promise';
import request from 'axios';

export function makeLoginRequest(method, id, data, api = '/api/login') {
    // return request[method](api, data);
    return new Promise(function (resolve, reject) {
        resolve({
            data: {
                user: 'hieu',
                userid: 1234
            }
        });
    });
}

export function doLogin(data) {
    return {
        type: types.LOGIN,
        promise: makeLoginRequest('post', null, data)
    };
}

export function doLoginSuccess(data) {
    return {
        type: types.LOGIN_SUCCESS,
        data
    };
}

export function doLoginFailure() {
    return {
        type: types.LOGIN_FAILURE
    };
}

export function doLogoutSuccess() {
    return {
        type: types.LOGOUT_FAILURE
    };
}