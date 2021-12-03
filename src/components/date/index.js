import React, { memo, useEffect, useState } from 'react';
import { DateWrapper } from './style';
import { NavLink } from 'react-router-dom';
import { getSubscribeDay } from '../../services/date';
import { message } from 'antd';

export default memo(function Date(props) {
    const { changeDay } = props;
    const initialData = [
        {
            day: '11.21',
            week: '星期日',
        },
        {
            day: '11.22',
            week: '星期一',
        },
        {
            day: '11.23',
            week: '星期二',
        },
        {
            day: '11.24',
            week: '星期三',
        },
        {
            day: '11.25',
            week: '星期四',
        },
        {
            day: '11.26',
            week: '星期五',
        },
        {
            day: '11.27',
            week: '星期六',
        },
    ];

    const [sevenDay, setSevenDay] = useState(' ');
    const [data, setData] = useState(initialData);

    const whichDay = window.location.href[window.location.href.length - 1];

    // eslint-disable-next-line
    useEffect(async () => {
        try {
            changeDay(whichDay);
            const getSevenDay = await getSubscribeDay();
            const data = getSevenDay.data.splice(0);
            setSevenDay(data[0].day + '-' + data[6].day);
            data.map(item => item.day = item.day.slice(5, 10));
            setData(data);
        } catch (err) {
            message.error('发生错误了', err);
        }

    }, [whichDay]) // eslint-disable-line

    return (
        <DateWrapper>
            <h2>{sevenDay}</h2>
            <div className="date-list">
                {data.map((item, index) => {
                    return (
                        <NavLink to={'/main/subscribe/' + index} key={item.day}>
                            <div className="date-item">
                                <div>{item.day}</div>
                                <div>{item.week}</div>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </DateWrapper>

    )
})
