import React, { memo, useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { HeaderWrapper } from './style';



export default memo(function Header() {
    const [current, setCurrent] = useState(0);
    const handleClick = (e) => {
        console.log('click', e);
        setCurrent(e.key);
    }
    return (
        <HeaderWrapper>
            <h3>欢迎来到gdut财务处预约系统</h3>
            <Menu onClick={(e) => setCurrent(e.key)}
                selectedKeys={[current]} mode="horizontal" >
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    预约
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                    信息查询
                </Menu.Item>
            </Menu >
        </HeaderWrapper>

    )
})
