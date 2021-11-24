import React, { memo, useState } from 'react';
import { Form, InputNumber, Button, Modal } from 'antd';
import { getAppointment } from '../../../services/subscribe';


export default memo(function ItemAppoint(props) {
    const { status, item, date, changeDay, day } = props;
    const [appointmentNum, setAppointmentNum] = useState(0);

    // 获取预约个数
    const getAppointmentNum = (num) => {
        setAppointmentNum(num);
    }
    const getAppointmentRes = async (timeId) => {
        const appoint = await getAppointment('3', timeId, date, appointmentNum);
        if (appoint.data.length && appoint.message === '全部预约成功') {
            changeDay(day);
            Modal.info({
                title: '预约成功',
                content: (
                    <>
                        <p>您预约成功了{appoint.data.length}个号</p>
                        <p>请在24小时内完善相应的报销单号信息</p>
                    </>
                ),
                onOk() { changeDay(day) },
            });
        } else {
            Modal.warning({
                title: '预约失败',
            });
        }

    }

    return (
        <div>
            <Form className="form-list">
                <Form.Item className="form-item">
                    <InputNumber onChange={getAppointmentNum} style={{ display: status === 1 ? 'block' : 'none' }}
                        className="appointmentNum" min={0} max={10} defaultValue={0} />
                </Form.Item>
                <Form.Item className="form-item">
                    <Button onClick={() => getAppointmentRes(item.id)} danger={status} disabled={!status}>{status === 1 ? '抢' : '已抢完'}</Button>
                </Form.Item>
            </Form>
        </div>
    )
})