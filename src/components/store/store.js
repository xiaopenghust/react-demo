'use strict';

import {createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/RootReducer.js';

/*
const logger = createLogger();
const middlewares = [thunk,logger];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

function configureStore(initialState){
    console.log("~~~~~~~~init store~~~~~~~~~~");
    return createStoreWithMiddleware(rootReducer,initialState)
}
const store = configureStore();
export default store;

*/

const logger = createLogger();
const middlewares = [thunk,logger];

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
));

export default store;