import request from "./axios";

export function getAppointment(userId, timeId, day, appointmentCount) {
    return request({
        method: 'POST',
        url: "/appointment/appoint",
        data: {
            userId,
            timeId,
            day,
            appointmentCount
        }


    })
}
