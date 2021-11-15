import React, { memo } from 'react';
import { Table, Tag } from 'antd';
import { TableWrapper } from './style';

const columns = [
    {
        dataIndex: 'time',
        key: 'time',
    },
    {
        dataIndex: 'status',
        key: 'status',
        render: status => (
            <>
                {status.map(status => {
                    return (
                        <Tag color='orange' key={status}>
                            {status}
                        </Tag>
                    )
                })}
            </>
        )
    },
    {
        key: 'remain',
        dataIndex: 'remain',
        render: remain => {
            return (
                <>
                    <Tag color='green'>
                        {remain}
                    </Tag>
                </>
            )

        }
    }
];

const data = [
    {
        key: '1',
        time: '8:30-9:00',
        status: ['完了'],
        remain: '余号0',
    },
    {
        key: '2',
        time: '9:00-9:30',
        status: ['可抢'],
        remain: '余号10',
    },
    {
        key: '3',
        time: '9:30-10:00',
        status: ['可抢'],
        remain: '余号10',
    },
];


export default memo(function List() {
    return (
        <div>
            <TableWrapper>
                <h3 className='listTitle'>上午</h3>
                <Table columns={columns} dataSource={data} />
            </TableWrapper>
            <TableWrapper>
                <h3 className='listTitle'>下午</h3>
                <Table columns={columns} dataSource={data} />
            </TableWrapper>
        </div>
    )
})
