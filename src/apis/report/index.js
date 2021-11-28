import request from "../request";


/**
 * @description 预约报道接口
 * @param {*} options 接收 userId
 * @return {*}  Promise
 */
export function getCover(options) {
    return request({
        method: 'get',
        url: '/signIn/appointment',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: options
    })
}


/**
 * @description 现场排队请求
 * @export
 * @param {*} options
 * @return {*}  
 */
export function getLineUp(options) {
    return request({
        method: 'get',
        url: '/signIn/site',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: options
    })
}


/**
 * @description 加急请求
 * @export
 * @param {*} options
 * @return {*}  
 */
export function getUrgent(options) {
    return request({
        method: 'get',
        url: '/signIn/urgent',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: options
    })
}

