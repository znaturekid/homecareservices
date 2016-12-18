import { combineReducers } from 'redux';
import * as types from 'types';

const INITIAL_STATE = {
    list: [],
    detail: null,
    fetched: false,
};
export default function (key, id){
    return (
        state = INITIAL_STATE,
        action
    ) => {
        switch (action.type) {
            case types['GET_'+key+'S_SUCCESS']:
                if (action.data) {
                    return {...state, list: action.data, fetched: true };
                }
                return state;
            case types['GET_'+key+'_SUCCESS']:
                if (action.data) {
                    return { ...state, detail: action.data };
                }
                return state;
            case types['NEW_'+key+'_SUCCESS']:
                if (action.data) {
                    return { ...state, detail: action.data };
                }
                return state;
            case types['CREATE_'+key+'_SUCCESS']:
                if (action.data) {
                    return { ...state, list: [...state.list, action.data], detail: action.data };
                }
                return state;
            case types['RESET_'+key]:
                return { ...state, detail: null };
            case types['UPDATE_'+key+'_SUCCESS']:
                if (action.data) {
                    const update = action.data;
                    return {
                        ...state,
                        list: state.list.map(item => {
                            return item[id] === update[id] ? update : item;
                        }),
                        detail: update
                    };
                }
                return state;
            case types['DELETE_'+key+'_SUCCESS']:
                if (action.data) {
                    return {...state, list: state.list.filter(x => x[id] !== action.data[id])};
                } 
                return state;
            default:
                return state;
        }
    };
}
