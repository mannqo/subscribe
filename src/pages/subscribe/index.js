import List from '../../components/list';
import Date from '../../components/date';
import React, { memo, useState } from 'react';
import { getSubscribeTime } from '../../services/date';
import { message } from 'antd';


export default memo(function Subscribe() {
    const [date, setDate] = useState('2021.1.1');
    const [loading, setLoading] = useState(false);
    const [entireDates, setEntireDates] = useState([]);
    const changeDay = async (day) => {
        try {
            setLoading(true);
            const getTime = await getSubscribeTime(day);
            const { orderTimes, date } = getTime.data;
            orderTimes.forEach(item => {
                item.time = item.start.slice(0, 5) + '-' + item.end.slice(0, 5);
                item.key = item.id;
                item.status = (item.number - item.count) ? 1 : 0;
                item.remain = '余号' + (item.number - item.count);
            })
            setEntireDates(orderTimes);
            setDate(date);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setEntireDates([])
            message.info('此时间段尚未开放');
        }
    }

    return (
        <>
            <Date changeDay={changeDay} />
            <List entireDates={entireDates} loading={loading} date={date} />
        </>
    )
})
