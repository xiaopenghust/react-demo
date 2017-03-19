/**
 * Created by SHARP on 2017/3/18.
 */

let likesCount2 = 1;
const cntReducer2 = (state, action)=>{
    switch(action.type){
        case 'TO_COUNT2':
            likesCount2 += 2;
            return likesCount2;
        default:
            return state.likesCount2;
    }
}

export default cntReducer2;