import { memo, useEffect } from 'react'
import Header from '../../components/header';
import { renderRoutes } from 'react-router-config';
import storageUtils from '../../utils/storageUtils';

export default memo(function Main(props) {
    // eslint-disable-next-line
    useEffect(() => {
        // 如果为空说明还没绑定账号
        if (!Object.keys(storageUtils.getUser()).length) {
            window.location.href = "#/login";
        }
    }, [])
    return (
        <>
            <Header />
            {renderRoutes(props.route.childrenR)}
        </>
    )
})