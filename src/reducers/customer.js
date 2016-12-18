import { combineReducers } from 'redux';
import * as types from 'types';

const INITIAL_STATE = {
    list: [],
    detail: null,
    fetched: false,
};

const customers = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case types.GET_CUSTOMERS_SUCCESS:
            if (action.data) {
                return { ...state, list: action.data, fetched: true };
            }
            return state;
        case types.GET_JOB_SUCCESS:
            if (action.data) {
                return { ...state, detail: action.data };
            }
            return state;
        case types.NEW_JOB_SUCCESS:
            if (action.data) {
                return { ...state, detail: action.data };
            }
            return state;
        case types.CREATE_JOB_SUCCESS:
            if (action.data) {
                return { ...state, list: [...state.list, action.data], detail: action.data };
            }
            return state;
        case types.RESET_JOB:
            return { ...state, detail: null };
        case types.UPDATE_JOB_SUCCESS:
            if (action.data) {
                const update = action.data;
                return {
                    ...state,
                    list: state.list.map(job => {
                        return job._id === update._id ? update : job;
                    }),
                    detail: update
                };
            }
            return state;
        case types.DELETE_JOB_SUCCESS:
            if (action.data) {
                return {...state, list: state.list.filter(x => x._id !== action.data._id)};
            } 
            return state;
        default:
            return state;
    }
};

export default customers;
