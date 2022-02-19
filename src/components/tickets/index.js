import { memo, useEffect, useState } from 'react'
import { List } from 'antd'
import Ticket from './ticket'
import { getTickets } from '../../services/getTickets'

export default memo(function Tickets(props) {

    let [isLoading, switchIsLoading] = useState(true)
    let [list, updataList] = useState([])

    // eslint-disable-next-line
    useEffect(async () => {
        // console.log('请求', props.index);
        switchIsLoading(true)
        updataList([])
        const userId = JSON.parse(sessionStorage.getItem('identity')).id
        let data = await getTickets(props.index, userId)
        // console.log(data);
        switchIsLoading(false)
        updataList(data.data)

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
                        <Ticket updataList={updataList} data={item} type={props.index} />
                    </List.Item>
                )}
            >
            </List>
        </div>
    )
})