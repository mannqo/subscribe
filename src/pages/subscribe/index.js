import List from '../../components/list';
import Date from '../../components/date';
import React, { memo, useState } from 'react';
import { getSubscribeTime } from '../../services/date';
import { initialAllDateData } from '../../mock/local-data';
import { message } from 'antd';


export default memo(function Subscribe() {
    const [timeState, setTimeState] = useState({ allDateData: initialAllDateData, date: '2021.1.1', day: 1, loading: false });
    const changeDay = async (day) => {
        try {
            setTimeState(state => ({ ...state, loading: true }));
            const getTime = await getSubscribeTime(day);
            const { orderTimes, date } = getTime.data;

            // eslint-disable-next-line 
            orderTimes.map(item => {
                item.time = item.start.slice(0, 5) + '-' + item.end.slice(0, 5);
                item.key = item.id;
                if (!(item.number - item.count)) item.status = 0;
                else item.status = 1;
                item.remain = '余号' + (item.number - item.count);
            })
            setTimeState({ allDateData: orderTimes, date, day, loading: false });

        } catch (err) {
            setTimeState({ loading: false });
            message.error('发生错误了', err);
        }
    }

    return (
        <>
            <Date changeDay={changeDay} />
            <List timeState={timeState} />
        </>
    )
})
