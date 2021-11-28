import React, { memo } from 'react';
import { Table, Button } from 'antd';
import { TableWrapper } from './style';
import ItemAppoint from './item-appoint';



export default memo(function List(props) {
    const { timeState } = props;
    const { date, day, loading } = timeState;
    let { allDateData } = timeState;
    allDateData = allDateData === null ? [] : allDateData;
    const columns = [
        {
            dataIndex: 'time',
        },
        {
            dataIndex: 'status',
            render: (status, item) => {
                return (
                    <ItemAppoint status={status} item={item} date={date} day={day} />
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
                <h3 className='listTitle'>上午</h3>
                <Table className="table-list" loading={loading} columns={columns} dataSource={allDateData.slice(0, 6)} />
            </TableWrapper>
            <TableWrapper>
                <h3 className='listTitle'>下午</h3>
                <Table className="table-list" loading={loading} columns={columns} dataSource={allDateData.slice(7, 12)} />
            </TableWrapper>
        </>
    )
})
