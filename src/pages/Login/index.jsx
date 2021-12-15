import React, { memo, useEffect } from 'react'
import styled from 'styled-components'
import { message, Spin } from 'antd'
import { getIdentity } from '../../services/login'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

export default memo(function Login() {
    useEffect(async () => {
        const AppId = 'wx615638e0b19f5067';
        const local = window.location.href;
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + AppId + "&redirect_uri=" + encodeURIComponent(local) + "&response_type=code&scope=snsapi_base#wechat_redirect";
        try {
            const code = window.location.href.split('?')[1].split('&')[0].split('=')[1];
            const identity = await getIdentity(code);
            if (!identity.code) {
                // 存user的值
                memoryUtils.user = identity.user;
                storageUtils.saveUser(identity.user);
                window.location.href = "/reservation/appointment/#/main";
            } else {
                message.error(identity.message);
            }

        } catch (err) {
            message.error('出错了');
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

