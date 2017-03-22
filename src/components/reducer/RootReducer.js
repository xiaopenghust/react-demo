/**
 * Created by SHARP on 2017/3/18.
 */

import { combineReducers } from 'redux'
import cntReducer from '../clickCount/CountReducer.js';



const rootReducer = combineReducers({
    cntReducer
})

export default rootReducer