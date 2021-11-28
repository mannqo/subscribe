import request from "./axios";

export function getTickets(type, id) {
    // type 类型
    // date 日期
    switch (type) {
        case 0:
            return request({
                url: '/appointment/getUnEntry',
                params: {
                    id
                }
            })
        case 1:
            return request({
                url: '/appointment/getUnFinished',
                params: {
                    id
                }
            })
        case 2:
            return request({
                url: '/appointment/getFinished',
                params: {
                    id
                }
            })
        default: return request({
            url: '/appointment/getUnEntry',
            params: {
                id
            }
        })
    }
}