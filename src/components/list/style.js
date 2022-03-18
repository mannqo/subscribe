import styled from 'styled-components';

export const TableWrapper = styled.div`
    margin-top: 0px;
    padding-left: 20px;
    .listTitle {
        margin-top: 10px;
        padding-left: 10px;
        border-left: 5px solid orange;
    }
    .table-list {
        .subscribeNum {
            width: 50px;
        }
        .list-remain {  
            color: #fff;
            background-color: #1890ff;
        }
    }
    .ant-table-thead {
        display: none;
    }
    .ant-pagination {
        display: none
    }
    
`