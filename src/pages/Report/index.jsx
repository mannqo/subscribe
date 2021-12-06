// 这是一个独立的页面
import React, { useState, useEffect } from 'react';
import { Result } from 'antd'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs'
import qs from 'qs'
// 获取路径中某个name的值

const Report = () => {
    const history = useHistory()
    const location = useLocation()
    const [isDue, setIsDue] = useState(false)
    const AppId = 'wx615638e0b19f5067' // 公众号 appId
    const local = window.location.href  // 当前页面路径
    const code = location.search.split("code=")[1]
    

    useEffect(() => {
        const params = parseInt(location.search.split('=')[1])
        const trueParams = (params + 3) / 2
        const date = dayjs().format('YYYYMMDD')
        if ((date - trueParams) >= 1) {
            setIsDue(true)
            alert('二维码已过期')
        }
    }, [location.search])

    useEffect(()=>{
        if(code === null || code === '') {
            // 填公众号返回的
            history.push('')
        }else {
            // 获取open id
        }
    })
    return (
        <div>
            {
                isDue
                    ? <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                    />
                    : <LinkContainer>
                        <h2>请选择业务</h2>
                        <LinkBox onClick={() => { history.push({ pathname: "/report/lineup" }) }} >排队</LinkBox>
                        <LinkBox onClick={() => { history.push({ pathname: "/report/cover" }) }} >报道</LinkBox>
                        <LinkBox onClick={() => { history.push({ pathname: "/report/urgent" }) }} >加急</LinkBox>
                    </LinkContainer>
            }
        </div>
    );
};

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    padding: 50px 0;
    background-color: #f9f6f7;
    /* background-image: url("https://ljcimg.oss-cn-beijing.aliyuncs.com/img/939edec4-a15c-4cb4-942e-3a134bee07ed.jpg") ; */
`

const LinkBox = styled.div`
    width: 160px;
    height: 160px;
    font-size: 30px;
    text-align: center;
    line-height: 160px;
    border-radius: 50%;
    /* background-color: aliceblue; */
    background: #f9f6f7;
box-shadow:  -5px -5px 10px #d4d1d2,
             5px 5px 10px #ffffff;
`
export default Report;