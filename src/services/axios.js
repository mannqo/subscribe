import axios from 'axios'
import storageUtils from '../utils/storageUtils'


export default function request(option) {
    return new Promise((resolve, reject) => {
        // 1. 创建axios的实例
        // const token = storageUtils.getUser().token || '';
        const token = (sessionStorage.getItem('identity') && JSON.parse(sessionStorage.getItem('identity'))?.token) ?? ''
        const instance = axios.create({
            baseURL: "https://cwcwx.gdut.edu.cn/reservation/api/",
            // baseURL:"https://www.rdcmy.com/reservation/api",
            timeout: 10000,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        })
        instance.defaults.headers.post['Content-Type'] = 'application/json'

        // 拦截器
        instance.interceptors.request.use(config => {
            if (sessionStorage.getItem('identity')) {
                const token = JSON.parse(sessionStorage.getItem('identity')).token
                config.headers['token'] = `${token}`
            } else {
                delete config.headers['token']
            }
            return config
        }, err => {
            return err
        })
        instance.interceptors.response.use(response => {
            return response.data
        }, err => {
            // console.log('response err', err);
            if (err && err.response) {
                switch (err.response.status) {
                    case 400:
                        err.message = '请求错误'
                        break
                    case 401:
                        err.message = '未授权的访问'
                        break
                    default:
                        err.message = "其他错误信息"
                }
            }
            return err
        })

        // 传入对象进行网络请求
        instance(option).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
/*
  能发送异步ajax请求的模块
  函数的返回值是promise对象
  **优化1. 统一处理请求异常
  在外层包一个自己创建的对象，在请求出错的时候显示错误提示
  **优化2：异步得到的不是response，而是response.data
*/


