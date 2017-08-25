// base.js
import{Config} from '../utils/config.js';

class Base{
    constructor(){
        this.baseRequestUrl = Config.restUrl;
    }

    request(params){
        var url = this.baseRequestUrl + params.url;

        if(!params.type){
            params.type = 'GET';
        }

        wx.request({
            url:url,
            data:params.data,
            method:params.type,
            header:{
                'content-type':'application/json',
                'token':wx.getStorageSync('token')
            },
            success:function(res){
                // if(params.sCallBack){
                //     params.sCallBack(res);
                // }    等同于下面的写法
                params.sCallBack&&params.sCallBack(res);
            },
            fail:function(err){

            }
        })
    }

}
