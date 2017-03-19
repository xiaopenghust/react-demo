'use strict';

import {createStore, applyMiddleware, } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/RootReducer.js';

const logger = createLogger();
const middlewares = [thunk,logger];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

function configureStore(initialState){
    console.log("~~~~~~~~init store~~~~~~~~~~");
    return createStoreWithMiddleware(rootReducer,initialState)
}
const store = configureStore();
export default store;