import React, { memo, useEffect, useState } from 'react';
import { DateWrapper } from './style';
import { NavLink } from 'react-router-dom';
import { getSubscribeDay } from '../../services/date';


const dateLink = ['/subscribe/1', '/subscribe/2',
    '/subscribe/3', '/subscribe/4', '/subscribe/5',
    '/subscribe/6', '/subscribe/7'];

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

    // eslint-disable-next-line
    useEffect(async () => {
        changeDay(window.location.href[window.location.href.length - 1]);
        const getSevenDay = await getSubscribeDay();
        const data = getSevenDay.data.splice(0);
        setSevenDay(data[0].day + '-' + data[6].day);
        data.map(item => item.day = item.day.slice(5, 10));
        setData(data);
    }, []) // eslint-disable-line

    return (
        <DateWrapper>
            <h2>{sevenDay}</h2>
            <div className="date-list">
                {data.map((item, index) => {
                    return (
                        <NavLink to={dateLink[index]} key={item.day}>
                            <div className="date-item" onClick={() => changeDay(index + 1)}>
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
