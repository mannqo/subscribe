import React, { memo } from 'react';
import { Table, Tag, Space } from 'antd';
import { TableWrapper } from './style';

const columns = [
    {
        dataIndex: 'name',
        key: 'name',
    },
    {
        dataIndex: 'age',
        key: 'age',
    },
    {
        dataIndex: 'address',
        key: 'address',
    },
    {
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                {/* <a>Invite {record.name}</a>
                <a>Delete</a> */}
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: '8:30-9:00',
        age: '抢',
        tags: ['余号10'],
    },
    {
        key: '2',
        name: '9:00-9:30',
        age: '抢',
        tags: ['余号10'],
    },
    {
        key: '3',
        name: '9:30-10:00',
        age: '抢',
        tags: ['余号10'],
    },
];


export default memo(function List() {
    return (
        <div>
            <TableWrapper>
                <h2>上午</h2>
                <Table columns={columns} dataSource={data} />
            </TableWrapper>
            <TableWrapper>
                <h2>下午</h2>
                <Table columns={columns} dataSource={data} />
            </TableWrapper>
        </div>
    )
})
