import Mock from 'mockjs'
// post 请求报道接口响应
Mock.setup({
    timeout: '200-600'
});
export default Mock.mock('/api/cover', options => {
    console.log(options);
    return Mock.mock({
        'data|1': [{
            'code': 0,
            'message': '报道失败，请确认学工号是否正确',
        },{
            'code':  1,
            'message': '报道成功，请留意大屏信息',
        }]
    })
})
