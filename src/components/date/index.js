import React, { memo, useEffect, useState } from 'react'
import { DateWrapper } from './style'
import { NavLink, useParams } from 'react-router-dom'
import { getSubscribeDay } from '../../services/date'
import { initialDayData } from '../../mock/local-data'
import { message } from 'antd'

export default memo(function Date(props) {
    const { changeDay } = props
    const [sevenDay, setSevenDay] = useState(' ')
    const [data, setData] = useState(initialDayData);
    const whichDay = window.location.href[window.location.href.length - 1];

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!isNaN(whichDay)) {
                    changeDay(whichDay)
                    const getSevenDay = await getSubscribeDay();
                    const { data } = getSevenDay;
                    setSevenDay(data[0].day + ' - ' + data[6].day)
                    data.map(item => item.day = item.day.slice(5, 10))
                    setData(data)
                }
            } catch (err) {
                console.log(err);
                message.error('发生错误了', err)
            }
        }
        fetchData();
    }, [whichDay])

    return (
        <DateWrapper>
            <h2>{sevenDay}</h2>
            <div className="date-list">
                {data.map((item, index) => {
                    return (
                        <NavLink to={'/main/subscribe/' + parseInt(index + 1)} key={item.day}>
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
