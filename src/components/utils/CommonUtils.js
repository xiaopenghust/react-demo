/**
 * Created by 584003 on 2017/3/20.
 */


class CommonUtils {
    constructor(){

    }

    static getRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

export default CommonUtils;