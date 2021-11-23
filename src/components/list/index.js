import React, { memo, useEffect, useState } from 'react';
import { Form, Table, InputNumber, Button, Modal } from 'antd';
import { TableWrapper } from './style';
import { getAppointment } from '../../services/subscribe';



export default memo(function List(props) {
    const { allDateData, date, loading, changeDay, day, max } = props;

    const [appointmentNum, setAppointmentNum] = useState(1);

    // 获取预约个数
    const getAppointmentNum = (num) => {
        console.log(num);
        setAppointmentNum(num);
    }

    const getAppointmentTimeId = async (timeId) => {
        const appoint = await getAppointment('222', '3', timeId, date, appointmentNum);
        console.log(appoint);
        if (appoint.message === '全部预约成功') {
            changeDay(day);
            Modal.info({
                title: '预约成功',
                content: (
                    <p>请在24小时内完善相应的报销单号信息</p>
                ),
                onOk() { changeDay(day) },
            });
        } else {
            Modal.warning({
                title: '预约失败',
            });
        }

    }


    const columns = [
        {
            dataIndex: 'time',
        },
        {
            dataIndex: 'status',
            render: (status, item) => {
                return (
                    <>
                        <Form className="form-list">
                            <Form.Item className="form-item">
                                <InputNumber onChange={getAppointmentNum} style={{ display: status === 1 ? 'block' : 'none' }}
                                    className="appointmentNum" min={1} max={max} defaultValue={1} />
                            </Form.Item>
                            <Form.Item className="form-item">
                                <Button onClick={() => getAppointmentTimeId(item.id)} danger={status} disabled={!status}>{status === 1 ? '抢' : '已抢完'}</Button>
                            </Form.Item>
                        </Form>
                    </>
                )
            }
        },
        {
            dataIndex: 'remain',
            render: remain => {
                return (
                    <>
                        <Button type="primary" block disabled className="list-remain">{remain}</Button>
                    </>
                )
            }
        }
    ];


    // eslint-disable-next-line
    useEffect(async () => {

    }, [])

    return (
        <div>
            <TableWrapper>
                <h3 className='listTitle'>上午</h3>
                <Table className="table-list" loading={loading} columns={columns} dataSource={allDateData.slice(0, 6)} />
            </TableWrapper>
            <TableWrapper>
                <h3 className='listTitle'>下午</h3>
                <Table className="table-list" loading={loading} columns={columns} dataSource={allDateData.slice(7, 12)} />
            </TableWrapper>
        </div>
    )
})
