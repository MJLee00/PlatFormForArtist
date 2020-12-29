const getUserInfoFromJwt =(jwt) =>{
    if(!jwt){  return ;  }
    //atob进行base64解码
    console.log(jwt)
    var jwtDecodeVal =JSON.parse( atob(jwt.split('.')[1]));
    if (!jwtDecodeVal) {
    return ;
    }
    let activeUser={}
    
    activeUser.type = jwtDecodeVal.type || '';
    activeUser.username = jwtDecodeVal.nickname || '';
    activeUser.profileImage = jwtDecodeVal.profileImage || '';
    activeUser.userid = jwtDecodeVal.userid || '';
    activeUser.authorities = jwtDecodeVal.authorities || '';
    activeUser.uid = jwtDecodeVal.jti || '';
    activeUser.jwt = jwt;
    return activeUser;
}
const  getCookie=(cookieName)=> {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName == arr[0]){
            return arr[1];
        }
    }
    return "";
}
const format = (o, format) => { //日期类型
    let args={
            "M+": o.getMonth() + 1,
            "d+": o.getDate(),
            "h+": o.getHours(),
            "m+": o.getMinutes(),
            "s+": o.getSeconds(),
            "q+": Math.floor((o.getMonth() + 3) / 3), //quarter
            "S": o.getMilliseconds()
        };
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let i in args) {
            let n = args[i];
            if (new RegExp("(" + i + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
        }
        return format;
    }
const getImage = (src)=>{
    return require('@/assets/'+src);
}
    export default function(Vue) {
        //添加全局API
        Vue.prototype.$utils = {
            format,
            getImage,
            getUserInfoFromJwt,
            getCookie
        }
    }

