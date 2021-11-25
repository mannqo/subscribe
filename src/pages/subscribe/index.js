import List from '../../components/list';
import Date from '../../components/date';
import React, { memo, useState } from 'react';

import { getSubscribeTime } from '../../services/date';
import { initialAllDateData } from '../../mock/local-data';
import { message } from 'antd';


export default memo(function Subscribe() {
    const [loading, setLoading] = useState(false);
    const [timeState, setTimeState] = useState({ allDateData: initialAllDateData, date: '2021.1.1', day: 1 });

    const changeDay = async (day) => {
        try {
            setLoading(true);
            const getTime = await getSubscribeTime(day);
            const { orderTimes, date } = getTime.data;
            setLoading(false);

            // eslint-disable-next-line 
            orderTimes.map(item => {
                item.time = item.start.slice(0, 5) + '-' + item.end.slice(0, 5);
                item.key = item.id;
                if (!(item.number - item.count)) item.status = 0;
                else item.status = 1;
                item.remain = '余号' + (item.number - item.count);
            })
            setTimeState({ allDateData: orderTimes, date, day });

        } catch (err) {
            setLoading(false);
            message.error('发生错误了', err);
        }
    }

    return (
        <>
            <Date changeDay={changeDay} />
            <List timeState={timeState} loading={loading} />
        </>
    )
})
