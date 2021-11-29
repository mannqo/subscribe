import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputForm from './components/InputForm';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import { Result, Button } from 'antd'
const EntryNo = (props) => {
    const history = useHistory()
    const location = useLocation()

    const { id, type, orderNumber, principalId } = location.state || { id: 5, type: 0, principalId: 222, orderNumber: 378926 }
    // console.log(props.match);
    // const { id, type, orderNumber, principalId } = props.match.params || { id: 5, type: 0, principalId: 222, orderNumber: 378926 }
    const [result, setResult] = useState(false)
    useEffect(() => {
        type === 2 && setResult(true)
    }, [type])

    return (
        <EntryNoContainer>
            {
                result
                    ? <Result
                        status="success"
                        title="该单号已经处理完成"
                        subTitle="感谢你的使用，有什么不方便的地方欢迎反馈"
                        extra={[
                            <Button onClick={() => history.push('/main/infor')} size='large' type="primary">Back Home</Button>
                        ]}
                    />
                    : <>
                        <BackButton onClick={() => history.push('/main/infor')}>返回</BackButton>
                        <Title>单号录入</Title>
                        <InputForm id={id} type={type} orderNumber={orderNumber} principalId={principalId} />
                    </>
            }
        </EntryNoContainer>
    );
};

const EntryNoContainer = styled.div`
    display: flex;
    flex-direction: column;   
    /* justify-content: center; */
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    
`
const Title = styled.h1`
    font-weight: 600;
    margin: 50px 0;
`

const BackButton = styled(Button)`
    position: absolute;
    top: 10px;
    left: 10px;
`
export default EntryNo;