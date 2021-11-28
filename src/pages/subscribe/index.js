import List from '../../components/list';
import Date from '../../components/date';
import React, { memo, useState } from 'react';
import { getSubscribeTime } from '../../services/date';
import { initialAllDateData } from '../../mock/local-data';

export default memo(function Subscribe() {
    const [allDateData, setAllDateData] = useState(initialAllDateData);
    const [date, setDate] = useState('2021.1.1');
    const [loading, setLoading] = useState(false);
    const [day, setDay] = useState(1);

    const changeDay = async (day) => {
        setLoading(true);
        const getTime = await getSubscribeTime(day);
        setLoading(false);
        console.log(1);
        const { orderTimes, date } = getTime.data;

        // eslint-disable-next-line 
        orderTimes.map(item => {
            item.time = item.start.slice(0, 5) + '-' + item.end.slice(0, 5);
            item.key = item.id;
            if (!(item.number - item.count)) item.status = 0;
            else item.status = 1;
            item.remain = '余号' + (item.number - item.count);
        })

        setDay(day);
        setDate(date.split('-').join('.'));
        setAllDateData(orderTimes);
    }

    return (
        <>
            <Date changeDay={changeDay} />
            <List changeDay={changeDay} day={day} allDateData={allDateData} date={date} loading={loading} />
        </>
    )
})
