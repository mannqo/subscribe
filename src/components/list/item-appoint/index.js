import React, { memo, useState } from 'react'
import { Form, InputNumber, Button, Modal, message } from 'antd'
import { getAppointment } from '../../../services/subscribe'

export default memo(function ItemAppoint(props) {
    const { status, item, date, entireDates } = props
    const [appointmentNum, setAppointmentNum] = useState(0);
    const [value, setValue] = useState(0);
    let amMaxNum = 0  // 早上最多可以预约个数
    let pmMaxNum = 0  // 晚上最多可以预约个数
    let index = 0   // 是否为am
    // 获取预约个数
    const getAppointmentNum = (num) => {
        setValue(num); 
        setAppointmentNum(num);
    }
    const appointReq = async (timeId) => {
        try {
            const userId = JSON.parse(sessionStorage.getItem('identity')).id
            const appoint = await getAppointment(userId, timeId, date, appointmentNum)
            if (!appoint.code) {
                const p1 = appoint.message.split(',')[0]
                const p2 = appoint.message.split(',')[1]
                Modal.info({
                    title: '预约成功',
                    content: (
                        <>
                            <p>{p1}</p>
                            <p>{p2}</p>
                        </>
                    ),
                    onOk() { window.location.reload() },
                })
            } else {
                Modal.warning({
                    title: '预约失败',
                    content: (
                        <p>{appoint.message}</p>
                    )
                })
            }
        } catch (err) {
            message.error('发生错误了', err)
        }
    }
    const getAppointmentRes = async (timeId) => {
        for (let item of entireDates) { 
            if (item.id >= timeId) {
                if (item.am) {
                    amMaxNum += item.number - item.count
                    index = Math.max(item.id)
                } else {
                    pmMaxNum += item.number - item.count
                }
            }
        }
        Modal.confirm({
            title: '确定要预约吗？',
            content: (
                < >
                    <p>这个时间段你最多只能预约{timeId <= index ? amMaxNum : pmMaxNum}个号</p>
                    <p>当前你预约的个数为{value}个</p>
                    <p>确定要预约吗?</p>
                </>
            ),
            onOk() {
                appointReq(timeId)
            }
        })
    }

    return (
        <>
            <Form className="form-list">
                <Form.Item className="form-item">
                    <InputNumber
                        onChange={getAppointmentNum}
                        style={{ display: status === 1 ? 'block' : 'none' }}
                        className="appointmentNum"
                        min={0}
                        max={5}
                        value={value} />
                </Form.Item>
                <Form.Item className="form-item">
                    <Button onClick={() => getAppointmentRes(item.id)} danger={status} disabled={!status}>{status === 1 ? '预约' : '已完'}</Button>
                </Form.Item>
            </Form>
        </>
    )
})
