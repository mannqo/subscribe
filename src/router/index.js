import Subscribe from '../pages/subscribe';
import { Redirect } from 'react-router';
import Infor from '../pages/infor';

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
        component: Subscribe,
    },
    {
        path: "/infor",
        component: Infor
    }
]