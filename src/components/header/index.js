import React, { memo, useState, useEffect } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { HeaderWrapper } from './style';
import { NavLink } from 'react-router-dom';


export default memo(function Header() {
    const [current, setCurrent] = useState('subscribe');
    useEffect(() => {
        let hash = window.location.hash
        if (hash.search('subscribe') !== -1 && current !== 'subscribe') {
            setCurrent('subscribe')
            return
        }
        if (hash.search('infor') !== -1 && current !== 'check') {
            setCurrent('check')
            return
        }
    }, [current])
    return (
        <HeaderWrapper>
            <h3>欢迎来到gdut财务处预约系统</h3>
            <Menu onClick={(e) => setCurrent(e.key)}
                selectedKeys={[current]} mode="horizontal"
            >
                <Menu.Item key="subscribe" icon={<MailOutlined />}>
                    <NavLink to="/main/subscribe">预约</NavLink>
                </Menu.Item>
                <Menu.Item key="check" icon={<AppstoreOutlined />} >
                    <NavLink to="/main/infor">信息查询</NavLink>
                </Menu.Item>
            </Menu >
        </HeaderWrapper>
    )
})