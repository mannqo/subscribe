import { Redirect } from 'react-router';
import Subscribe from '../pages/subscribe';
import Infor from '../pages/infor'; 
import EntryNo from '../pages/EntryNo';

// eslint-disable-next-line
export default [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/subscribe" />
        )
    },
    {
        path: "/subscribe",
        exact: true,
        render: () => (
            <Redirect to={"/subscribe/1"} />
        )
    },
    {
        path: "/subscribe",
        component: Subscribe,
    },
    {
        path: "/infor",
        component: Infor,
    },
    {
        path: "/entryNo",
        component: EntryNo,
    }
]