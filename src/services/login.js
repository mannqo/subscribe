import request from "./axios";


// 这里scope需要公众号有权限啥的em
export function getCode(url) {
    return request({
        url: `https://open.weixin.qq.com/connect/oauth2/authorize?
        appid=wxe312cdb484d8af13
        redirect_url=`+ url + `&
        response_type='code'&
        scope='snsapi_base'&
        #wechat_redirect
        `,
    })
}

export function getIdentity(code) {
    return request({
        url: "/user/login" + code,
    })
}
