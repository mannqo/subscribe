import React from 'react';
import { Result, Button } from 'antd'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
const SResult = () => {
    const history = useHistory()
    return (
        <ResultContainer>
            <Result
                status="success"
                title="排队成功，请留意大屏"
                subTitle="感谢你的使用，有什么不方便的地方欢迎反馈"
                extra={[
                    <Button onClick={() => history.push('/report')} size='large' type="primary">Back Home</Button>
                ]}
            />
        </ResultContainer>
    );
};

const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
`

export default SResult;