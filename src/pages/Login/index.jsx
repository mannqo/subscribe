import React, { memo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { message, Spin } from 'antd'
import { getIdentity, getIdentityGet } from '../../services/login'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import { AppId } from '../../mock/constant'

export default memo(function Login() {
    const history = useHistory()

    // eslint-disable-next-line
    useEffect(() => {

        const getTry = async () => {
            try {
                const code = window.location.href.split('?')[1].split('&')[0].split('=')[1]
                if (code === null || code === '') {
                    const local = window.location.href
                    window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + AppId + "&redirect_uri=" + encodeURIComponent(local) + "&response_type=code&scope=snsapi_base#wechat_redirect"
                } else {
                    const identity = await getIdentity(code) // post
                    if (!identity?.code && identity) {
                        identity.data.user['token'] = identity.data.token
                        await localStorage.setItem('identity', JSON.stringify(identity.data.user))
                        history.push('/main')
                    } else {
                        message.error(identity.message)
                    }
                }

                // history.push('#/main')
                // const identity = await getIdentityGet(code) //get
                // if (!identity?.code && identity) {
                //     // memoryUtils.user = identity.user
                //     // await storageUtils.saveUser(identity.user)
                //     identity.data.user['token'] = identity.data.token
                //     await localStorage.setItem('identity', JSON.stringify(identity.data.user))
                //     history.push('/main')
                // } else {
                //     message.error(identity.message)
                // }
            } catch (err) {
                message.error('出错了')
            }
        }
        getTry()

    }, [])

    return (
        <SpinWrapper>
            {/* <Spin size='large' tip='登录认证中' /> */}
            <div>登录认证中</div>
        </SpinWrapper>
    )
})

const SpinWrapper = styled.div`
        text-align: center;
        margin-top: 200px;
 `

