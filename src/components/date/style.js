import styled from 'styled-components';

export const DateWrapper = styled.div`
    h2 {
        text-indent: 1em;
        padding-top: 16px;
    }
    .date-list {
        display: flex;
        margin: 6px 6px 20px 10px;
        height: 80px;
        justify-content: space-between;
        overflow: auto;
        ::-webkit-scrollbar {
            display: none;
        }
        .active .date-item {
            background-color: rgb(251, 91, 51);
        }
        .date-item {
            text-align: center;
            padding-top: 16px;

            color: #fff;
            font-weight: 600;

            margin-right: 10px;
            width: 70px;
            height: 100%;
            border-radius: 10px;
            background-color: rgb(240, 194, 34);
        }
    }
`