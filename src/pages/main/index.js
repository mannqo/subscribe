import { memo, useEffect } from 'react'
import Header from '../../components/header'
import { renderRoutes } from 'react-router-config'
import storageUtils from '../../utils/storageUtils'

export default memo(function Main(props) {
    // eslint-disable-next-line

    useEffect(() => {
        // 如果为空说明还没绑定账号
        const getTryUser = async () => {
            // const data = await storageUtils.getUser()
            const data = await JSON.parse(sessionStorage.getItem('identity'))
            // alert(JSON.stringify(data))
            if (data == null) {
                window.location.href = "#/login"
            }
        }
        getTryUser()
    }, [])

    return (
        <>
            <Header />
            {renderRoutes(props.route.childrenR)}
        </>
    )
})