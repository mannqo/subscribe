import React, { memo } from 'react';
import { Table, Button, message } from 'antd';
import { TableWrapper } from './style';
import ItemAppoint from './item-appoint';



export default memo(function List(props) {
    const { date, loading } = props;
    let { entireDates } = props;
    let index = 0;
    try {
        for (let item of entireDates) { item.am && index++; }
    } catch (err) {
        message.error('出错了');
    }


    const columns = [
        {
            dataIndex: 'time',
        },
        {
            dataIndex: 'status',
            render: (status, item) => {
                return (
                    <ItemAppoint status={status} item={item} date={date} entireDates={entireDates} />
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


    return (
        <>
            <TableWrapper>
                <span style={{ color: '#999', fontSize: '16px' }}>温馨提醒：未预约成功的师生可以到现场办理报销，现场办理方式不变。</span>
                <h3 className='listTitle'>上午</h3>
                <Table className="table-list" loading={loading} columns={columns} dataSource={entireDates.slice(0, index)} />
            </TableWrapper>
            <TableWrapper>
                <h3 className='listTitle'>下午</h3>
                <Table className="table-list" loading={loading} columns={columns} dataSource={entireDates.slice(index, entireDates.length)} />
            </TableWrapper>
        </>
    )
})
