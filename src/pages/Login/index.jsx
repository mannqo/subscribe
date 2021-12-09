import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { message, Spin } from 'antd';
import { getIdentity, getCode } from '../../services/login';

export default memo(function Login() {
    useEffect(async () => {
        try {
            const code = await getCode('/');
            alert(code);
            const identity = await getIdentity(code);
            alert(identity)

        } catch (err) {
            message.error('请再微信客户端打开此链接');
        }

    }, [])
    return (
        <SpinWrapper>
            <Spin size='large' tip='登录认证中' />
        </SpinWrapper>
    )
})

const SpinWrapper = styled.div`
    text-align: center;
    margin-top: 200px;
`

