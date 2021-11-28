// import { memo } from 'react'
import { withRouter } from 'react-router-dom'
import {
    RightOutlined
} from '@ant-design/icons';
import './ticket.css'
let tab = ['未录入', '未完成', '已完成']
export default withRouter(function Ticket(props) {
    let { id, orderNumber, principalId, reservationNumber, day } = props.data
    day = day.slice(5)
    return (
        <div className="h_tickets" onClick={() => props.history.push({ pathname: '/entryNo', state: { type: props.type, title: tab[props.type], id, orderNumber, principalId } })}>
            <div className="item">单号&nbsp;:&nbsp;{reservationNumber}</div>
            <div className="item">{day}&nbsp;-&nbsp;<div className={props.type === 0 ? 'hight_light1' : props.type === 1 ? 'hight_light2' : 'hight_light3'}>{'8:30-9:00'}</div></div>
            <div className="item" style={{ cursor: 'pointer' }}>{props.type === 0 ? '去录入' : '查看'}<RightOutlined style={{ paddingLeft: 5 }} /></div>
        </div>
    )
})