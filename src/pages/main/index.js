import { memo, useEffect } from 'react'
import Header from '../../components/header';
import { renderRoutes } from 'react-router-config';
import storageUtils from '../../utils/storageUtils';
export default memo(function Main(props) {
    useEffect(() => {
        // 如果为空说明还没绑定账号
        if (!storageUtils.getUser()) {
            window.location.href = "/#/login";
        }
    }, [])
    return (
        <>
            <Header />
            {renderRoutes(props.route.childrenR)}
        </>
    )
})