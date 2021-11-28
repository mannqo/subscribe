import React, { memo, useState } from 'react'
import Header from '../../components/header'
import Tabbar from '../../components/tabbar'
import Tickets from '../../components/tickets'

export default memo(function Infor() {
    let [index, changeIndex] = useState(0)

    return (
        <div>
            <Header></Header>
            <Tabbar sendIndex={changeIndex} />
            <Tickets index={index} />
        </div>
    )
})
