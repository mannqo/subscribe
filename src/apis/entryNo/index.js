import request from "../request";
import qs from 'qs'
export function getOrderEntry(options) {
    console.log(options);
    // type 类型
    // date 日期
    return request({
        method: 'post',
        url: '/appointment/Entry',
        headers: {
            'Content-Type': 'application/json',
        },
        data: options
    })
}
export const getWxKey = (options) => {
    return request({
        method: 'get',
        url: 'https://www.rdcmy.com/reservationSystem/api/wx/getWxJsKey',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: options
    })
}