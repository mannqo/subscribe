import axios from 'axios'
import baseURL from './baseUrl'

// 导出基本请求封装
export default function request(config) {
    return axios.create({
        baseURL,
        timeout: 5000
    })(config)
}

