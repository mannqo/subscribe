import { memo } from 'react'
import Header from '../../components/header';
import { renderRoutes } from 'react-router-config';
export default memo(function Main(props) {
    // console.log(props.route);
    return (
        <>
            <Header />
            {renderRoutes(props.route.childrenR)}
        </>
    )
})