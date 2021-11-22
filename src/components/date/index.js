import React, { memo } from 'react';
import { DateWrapper } from './style';
import { NavLink } from 'react-router-dom';

const data = [
    {
        content: '11.11',
        date: '/subscribe/first'
    },
    {
        content: '11.12',
        date: '/subscribe/second'
    },
    {
        content: '11.13',
        date: '/subscribe/third'
    },
    {
        content: '11.14',
        date: '/subscribe/fourth'
    },
    {
        content: '11.15',
        date: '/subscribe/fifth'
    },
    {
        content: '11.16',
        date: '/subscribe/sixth'
    },
    {
        content: '11.17',
        date: '/subscribe/seventh'
    },
];

export default memo(function Date() {
    return (
        <DateWrapper>
            {data.map((item) => {
                return (
                    <NavLink to={item.date} key={item.date}>
                        <div className="date-item" key={item.date}>
                            <div>{item.content}</div>
                            <div>星期天</div>
                        </div>
                    </NavLink>
                )
            })}
        </DateWrapper>
    )
})
