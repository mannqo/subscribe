import React from 'react';
import styled from 'styled-components';
import InputForm from './components/InputForm';
import { useLocation } from 'react-router-dom';
const EntryNo = ({ match }) => {

    const location = useLocation()
    const { id, type } = location.state || { id: 5, type: 0 }
    return (
        <EntryNoContainer>
            <Title>单号录入</Title>
            <InputForm id={id} type={type} />
        </EntryNoContainer>
    );
};

const EntryNoContainer = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
`
const Title = styled.h1`
    font-weight: 600;
`

export default EntryNo;