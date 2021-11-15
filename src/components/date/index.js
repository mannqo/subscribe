import React, { memo } from 'react';
import { List, Card } from 'antd';
import { DateWrapper } from './style';
import { NavLink } from 'react-router-dom';

const data = [
    {
        content: '11月11日',
        date: '/subscribe/first'
    },
    {
        content: '11月12日',
        date: '/subscribe/second'
    },
    {
        content: '11月13日',
        date: '/subscribe/third'
    },
    {
        content: '11月14日',
        date: '/subscribe/fourth'
    },
];

export default memo(function Date() {
    return (
        <DateWrapper>
            <List
                grid={{ gutter: 16, column: 4 }}
                className="date-list"
                dataSource={data}
                renderItem={item => (
                    <List.Item className="date-list-item">
                        <NavLink to={item.date}>
                            <Card>{item.content}</Card>
                        </NavLink>
                    </List.Item>
                )}
            />
        </DateWrapper>
    )
})
