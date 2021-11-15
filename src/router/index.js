import Subscribe from '../pages/subscribe';
import { Redirect } from 'react-router';
import Infor from '../pages/infor';
import First from '../components/date/date/first';
import Second from '../components/date/date/second';
import Third from '../components/date/date/third';
import Fourth from '../components/date/date/fourth';

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
        component: Subscribe,
        routes: [
            {
                path: "/subscribe/first",
                component: First,
            },
            {
                path: "/subscribe/second",
                component: Second,
            },
            {
                path: "/subscribe/third",
                component: Third,
            },
            {
                path: "/subscribe/fourth",
                component: Fourth,
            }
        ]
    },
    {
        path: "/infor",
        component: Infor,
    }
]