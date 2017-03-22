/**
 * Created by SHARP on 2017/3/18.
 */

let likesCount1 = 1;
const cntReducer1 = (state, action)=>{
    switch(action.type){
        case 'TO_COUNT1':
            return likesCount1++;
        default:
            return state.likesCount1;
    }
}

export default cntReducer1;