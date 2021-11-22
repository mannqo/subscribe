import { memo, useEffect, useState } from 'react'
import { List } from 'antd';
import Ticket from './ticket'
import { getTickets } from '../../apis/getTickets/index'

export default memo(function Tickets(props) {

    let [isLoading, switchIsLoading] = useState(true)
    let [list, updataList] = useState([])
    useEffect(() => {
        console.log('请求', props.index)
        switchIsLoading(true)
        updataList([])
        getTickets(props.index).then(res => {
            console.log('res=', res);
            switchIsLoading(false)
            updataList(res.data.data.list)
        }).catch(err => {
            switchIsLoading(false)
            console.log('err=', err);
        })

        // eslint-disable-next-line
    }, [props['index']])
    return (
        <div>
            <List
                loading={isLoading}
                bordered
                dataSource={list}
                renderItem={(item) => (
                    <List.Item>
                        <Ticket data={item} type={props.index} />
                    </List.Item>
                )}
            >
            </List>
        </div>
    )
})