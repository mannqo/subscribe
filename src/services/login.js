import request from "./axios"; 

export function getIdentity(code) {
    return request({
        url: "/user/login?" + code,
    })
}
