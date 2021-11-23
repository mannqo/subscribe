import request from '../request'
export function getTickets(type, date) {
    // type 类型
    // date 日期
    return request({
        url: 'getTickets',
        params: {
            type
        }
    })
}