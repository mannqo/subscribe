import React, { memo } from 'react';
import { Table, InputNumber, Space, Button } from 'antd';
import { TableWrapper } from './style';
import { morningDateData, afternoonDateData } from '../../mock/local-data';

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
                <Space>
                    <InputNumber className="subscribeNum" min={1} max={10} defaultValue={1} />
                    <Button className="rob-button" type="primary" danger>抢</Button>
                </Space>
            </>
        )
    },
    {
        key: 'remain',
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



export default memo(function List() {
    return (
        <div>
            <TableWrapper>
                <h3 className='listTitle'>上午</h3>
                <Table className="table-list" columns={columns} dataSource={morningDateData} />
            </TableWrapper>
            <TableWrapper>
                <h3 className='listTitle'>下午</h3>
                <Table className="table-list" columns={columns} dataSource={afternoonDateData} />
            </TableWrapper>
        </div>
    )
})
