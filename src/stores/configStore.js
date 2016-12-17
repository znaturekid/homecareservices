import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import promiseMiddleware  from '../middlewares/promiseMiddleware';

export default function configureStore(initialState) {
    const middleware = [thunk, promiseMiddleware];
    let store;

    
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), f => f));

    if (module.hot) {
        module.hot.accept('reducers', () => {
            const nextReducer = require('reducers');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
