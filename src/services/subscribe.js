import request from "./axios";

export function getAppointment(principalId, userId, timeId, day, appointmentCount) {
    return request({
        method: 'POST',
        url: "/appointment/appoint",
        data: {
            principalId,
            userId,
            timeId,
            day,
            appointmentCount
        }


    })
}
