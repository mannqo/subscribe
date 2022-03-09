import { withRouter } from 'react-router-dom'
import { Modal, message } from 'antd'
import { getTickets } from '../../../services/getTickets'
import { cancelOrder, getCancelCount } from '../../../services/entryNo'
import './ticket.css'
let tab = ['未录入', '未完成', '已完成']
export default withRouter(function Ticket(props) {
    // console.log('tt', props);
    let { id, reservationNumber, orderNumber, principalId, day, time } = props.data
    console.log(props.data)
    day = day.slice(5)
    let timeArr = time.split('--').map(v => { return v.slice(0, -3) })

    async function showModal() {
        // 失约次数
        let cancelCount
        if (props.type === 1) {
            cancelCount = await getCancelCount({ id })
        }

        Modal.warning({
            title: '你确定取消你的预约吗？',
            content: (
                <>
                    {/* 排队号: {reservationNumber} */}
                    如果在预约前一天 16：00 之后取消预约，会记录失约噢！
                    {props.type ? <br /> : ''}
                    {props.type ? `失约超过 2 次会记录黑名单噢！你已经失约了 ${cancelCount.data[0]} 次` : ''}
                </>
            ),
            async onOk() {
                const userId = JSON.parse(sessionStorage.getItem('identity')).id
                const cancelData = await cancelOrder({ userId, id })
                if (cancelData.code === 0) {
                    let data = await getTickets(props.type, userId)
                    props.updataList(data.data)
                }
                message.info(cancelData.message)
            },
            closable: true,
            okText: "确认取消预约",
            maskClosable: true,
        })
    }
    return (
        <div className="h_tickets"
        >
            <div className="item">排队号&nbsp;:&nbsp;{reservationNumber}</div>
            <div className="item">{day}&nbsp;-&nbsp;<div className={props.type === 0 ? 'hight_light1' : props.type === 1 ? 'hight_light2' : 'hight_light3'}>{timeArr[0]}~{timeArr[1]}</div></div>
            <div onClick={showModal} className="item item-cancel" style={{ cursor: 'pointer' }}>{props.type === 0 || props.type === 1 ? '取消' : ''}</div>
            <div onClick={() => props.history.push({ pathname: '/entryNo', state: { type: props.type, title: tab[props.type], id, reservationNumber, orderNumber, principalId } })}
                className="item"
                style={{ cursor: 'pointer' }}>
                {props.type === 0 ? ' 去录入' : ' 查看'}
            </div>
        </div>
    )
})