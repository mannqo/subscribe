import { useState, memo } from 'react'
import './tabbar.css'
let tabs = [
    {
        index: 0,
        text: '未录入'
    }, {
        index: 1,
        text: '未完成'
    }, {
        index: 2,
        text: '已完成'
    }
]

export default memo(
    function Tabbar(props) {
        let [current, switchTab] = useState(0)
        let clickTab = (e) => {
            let current = parseInt(e.target.dataset.cur)
            switchTab(current)
            props.sendIndex(current)
        }
        return (
            <div onClick={(e) => clickTab(e)} className="h_tabbar">
                {
                    tabs.map(v => {
                        return (
                            <div className={(v['index'] === current) ? 'h_tabitem active' : 'h_tabitem'} key={v.index} data-cur={v.index}>{v.text}</div>
                        )
                    })
                }
            </div >
        )
    }
)

