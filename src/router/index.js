import { Redirect } from 'react-router';
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
    },
    {
        path: "/report",
        exact:true,
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