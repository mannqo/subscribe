import request from "./axios"

export function getIdentity(code) {
    return request({
        method: 'POST',
        url: "/user/login",
        data: code,
    })
}
