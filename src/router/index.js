import Subscribe from '../pages/subscribe';
import { Redirect } from 'react-router';
import Infor from '../pages/infor';
import First from '../components/date/date/First';
import Second from '../components/date/date/Second';
import Third from '../components/date/date/Third';
import Fourth from '../components/date/date/Fourth';
import Fifth from '../components/date/date/Fifth';
import Sixth from '../components/date/date/Sixth';
import Seventh from '../components/date/date/Seventh';

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
            },
            {
                path: "/subscribe/fifth",
                component: Fifth
            },
            {
                path: "/subscribe/sixth",
                component: Sixth
            },
            {
                path: "/subscribe/fifth",
                component: Fifth
            },
            {
                path: "/subscribe/sixth",
                component: Sixth
            },
            {
                path: "/subscribe/seventh",
                component: Seventh
            },

        ]
    },
    {
        path: "/infor",
        component: Infor,
    }
]