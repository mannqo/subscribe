import request from "./axios";

export function getSubscribeTime(day) {
    return request({
        url: "/orderTime/info?day=" + day,
    })
}

export function getSubscribeDay() {
    return request({
        url: "/orderTime/day"
    })
}