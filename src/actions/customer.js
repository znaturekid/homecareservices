import request from 'libs/Request';
import * as types from 'types';
import Promise from 'promise';

export function fetchcustomers() {
    return {
        type: types.GET_CUSTOMERS,
        promise: request('get', '/Customers')
    };
}

export function fetchcustomersSuccess(data) {
    return {
        type: types.GET_CUSTOMERS_SUCCESS,
        data
    };
}

export function fetchcustomersFailure() {
    return {
        type: types.GET_CUSTOMERS_FAILURE
    };
}