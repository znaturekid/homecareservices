import { combineReducers } from 'redux';
import app from 'reducers/app';
import job from 'reducers/job';

const rootReducer = combineReducers({
    app,
    job
});

export default rootReducer;