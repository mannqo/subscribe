import React, { memo, useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { HeaderWrapper } from './style';
import { NavLink, HashRouter } from 'react-router-dom';



export default memo(function Header() {
    const [current, setCurrent] = useState('subscribe');
    return (
        <HeaderWrapper>
            <HashRouter>
                <h3>欢迎来到gdut财务处预约系统</h3>
                <Menu onClick={(e) => setCurrent(e.key)}
                    selectedKeys={[current]} mode="horizontal"
                >
                    <Menu.Item key="subscribe" icon={<MailOutlined />}>
                        <NavLink to="/subscribe">预约</NavLink>
                    </Menu.Item>
                    <Menu.Item key="check" icon={<AppstoreOutlined />} >
                        <NavLink to="/infor">信息查询</NavLink>
                    </Menu.Item>
                    <Menu.Item key="mine" icon={<UserOutlined />}>
                        <NavLink to="/mine">我的</NavLink>
                    </Menu.Item>
                </Menu >
            </HashRouter>
        </HeaderWrapper>
    )
})
