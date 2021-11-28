import styled from 'styled-components';
import { Button } from 'antd';

const CoverContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
`
const Title = styled.h1`
    font-weight: 600;
    margin: 50px 0px 100px 0;
`

const BackButton = styled(Button).attrs({
    type: "primary"
})`
    position: absolute;
    top: 10px;
    left: 10px;
`

export {
    CoverContainer,
    Title,
    BackButton
}