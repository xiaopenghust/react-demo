/**
 * Created by SHARP on 2017/3/18.
 */
import cntReducer1 from './CountReducer1.js';
import cntReducer2 from './CountReducer2.js';
let likesCount = 1;
let initState= {
    likesCount1:0,
    likesCount2:0
}
const cntReducer = (state = initState, action)=>{
        return {
            likesCount1:cntReducer1(state,action),
            likesCount2:cntReducer2(state,action),
        }
}

export default cntReducer;