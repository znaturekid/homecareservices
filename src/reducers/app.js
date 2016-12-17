import { combineReducers } from 'redux';
import * as types from 'types';

const INITIAL_STATE = {
    authenticated: false
};

const app = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case types.LOGIN_REQUEST: 
            return {...state, authenticated: false};
        case types.LOGIN_SUCCESS:
            if (action.data) {
                return {...state, authenticated: true };
            }
            return state;
        case types.LOGOUT_SUCCESS:
            if (action.data) {
                return { ...state, authenticated: false };
            }
            return state;
        default:
            return state;
    }
};

export default app;
