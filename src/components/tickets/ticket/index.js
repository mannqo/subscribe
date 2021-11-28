// import { memo } from 'react'
import { withRouter } from 'react-router-dom'
import {
    RightOutlined
} from '@ant-design/icons';
import './ticket.css'
export default withRouter(function Ticket(props) {
    let { id, time, clock } = props.data
    console.log(props.data);
    return (
        <div className="h_tickets" to="/subscribe" onClick={() => props.history.push({ pathname: '/entryNo', state: { type: props.type, id } })}>
            <div className="item">单号&nbsp;:&nbsp;{id}</div>
            <div className="item">{time}&nbsp;-&nbsp;<div className={props.type === 0 ? 'hight_light1' : props.type === 1 ? 'hight_light2' : 'hight_light3'}>{clock}</div></div>
            <div className="item" style={{ cursor: 'pointer' }}>{props.type === 0 ? '去录入' : '查看'}<RightOutlined style={{ paddingLeft: 5 }} /></div>
        </div>
    )
})
