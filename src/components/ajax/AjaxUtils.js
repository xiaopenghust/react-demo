/**
 * Created by 584003 on 2017/3/28.
 */
import axios from 'axios';

class AjaxUtils {
    static post(url, data){
        return axios.post(url,data);
    }


    static get(url, data){
        if(data){
            let args = encodeURIComponent(JSON.stringify(data));
            url += (url.indexOf('?') !== -1 ? '&' : '?' ) + args;
        }
        return axios.get(url);
    }


    static put(url, data){
        return axios.put(url, data);
    }


    static delete(url, data){
        if(data){
            let args = encodeURIComponent(JSON.stringify(data));
            url += (url.indexOf('?') !== -1 ? '&' : '?' ) + args;
        }
        return axios.delete(url)
    }
}

export default AjaxUtils;