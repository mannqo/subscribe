import { memo } from 'react'
import Header from '../../components/header';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
export default memo(function Main(props) {
    console.log(props.route);
    return (
        <>
            <Header />
            <HashRouter>
                {renderRoutes(props.route.childrenR)}
            </HashRouter>
        </>
    )
})