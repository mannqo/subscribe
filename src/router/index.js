import { Redirect } from 'react-router';
import Main from '../pages/main';
import Subscribe from '../pages/subscribe';
import Infor from '../pages/infor';
import EntryNo from '../pages/EntryNo';
import Report from '../pages/Report'
import LineUp from '../pages/Report/components/LineUp';
import Cover from '../pages/Report/components/Cover';
import Urgent from '../pages/Report/components/Urgent';
import SResult from '../pages/Report/components/SResult';
// eslint-disable-next-line
export default [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/main" />
        )
    },
    {
        path: '/main',
        component: Main,
        childrenR: [
            {
                path: "/main",
                exact: true,
                render: () => (
                    <Redirect to={"/main/subscribe/1"} />
                )
            }, {
                path: "/main/subscribe",
                exact: true,
                render: () => (
                    <Redirect to={"/main/subscribe/1"} />
                )
            },
            {
                path: "/main/subscribe",
                component: Subscribe,
            },
            {
                path: "/main/infor",
                component: Infor,
            },
        ]
    },

    {
        path: "/entryNo/:type/:id/:orderNumber/:principalId",
        component: EntryNo,
    },
    {
        path: "/report",
        exact: true,
        component: Report
    },
    {
        path: "/report/lineup",
        component: LineUp
    },
    {
        path: "/report/cover",
        component: Cover
    },
    {
        path: "/report/urgent",
        component: Urgent
    },
    {
        path: "/report/result",
        component: SResult
    }

]