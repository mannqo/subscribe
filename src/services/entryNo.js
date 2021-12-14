import request from "./axios";

/**
 * @description 预约请求
 * @param {*} options 接受 id，处理单号，学工号 
 */
export function getOrderEntry(options) {
    return request({
        method: 'post',
        url: '/appointment/Entry',
        headers: {
            'Content-Type': 'application/json',
        },
        data: options
    })
}
/**
 * @description 获取微信相关配置
 * @param {*} options 当前 url
 */
export const getWxKey = (options) => {
    return request({
        method: 'get',
        url: '/wx/getWxJsKey',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: options
    })
}