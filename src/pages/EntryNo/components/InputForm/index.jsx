import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message, InputNumber, Modal } from 'antd';
import { InstagramOutlined } from '@ant-design/icons'
import { useForm } from 'antd/lib/form/Form';
import { getOrderEntry, getWxKey } from '../../../../services/entryNo'
import wx from 'weixin-js-sdk'
import { useHistory } from 'react-router-dom';
const InputForm = ({ id, type, orderNumber, principalId }) => {
    // 变量定义
    const [orderLoading, setOrderLoading] = useState(false)
    const [form] = useForm();
    const history = useHistory()

    useEffect(() => {
        if (parseInt(type) === 1) {
            form.setFieldsValue({
                orderNumber,
                principalId
            })
        }
    })

    // 操作函数
    const openCamera = async () => {
        const data = await getWxKey({ url: window.location.href.split('#')[0] })
        const { appId, timestamp, nonceStr, jsKey: signature } = data.data
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId, // 必填，公众号的唯一标识
            timestamp, // 必填，生成签名的时间戳
            nonceStr, // 必填，生成签名的随机串
            signature,// 必填，签名
            jsApiList: ["scanQRCode"] // 必填，需要使用的JS接口列表
        });
        wx.ready(() => {
            wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    let result = res.resultStr.split(',')[1]; // 当needResult 为 1 时，扫码返回的结果
                    form.setFieldsValue({ orderNumber: result })
                },
                fail: function (err) {
                    console.log('error');
                    console.log(err);
                }
            })
        })
    }
    // 成功回调
    const handleFinish = async (params) => {
        // userId，前面传过来，预约号不用传
        const requestParams = { ...params, userId: 1, orderNumber: parseInt(params.orderNumber) }
        Modal.confirm({
            title: '请确认你的单号无误！',
            content: <div>
                <p>处理单号：{requestParams.orderNumber}</p>
                <p>学工号：{requestParams.principalId}</p>
            </div>,
            onOk: async () => {
                setOrderLoading(true)
                try {
                    const data = await getOrderEntry(requestParams)
                    const { code, message: msg } = data
                    console.log(msg);
                    if (code === 0) {
                        message.success(msg)
                        form.resetFields()
                        history.push('/main/infor')
                    } else {
                        message.error(msg)
                    }
                } catch (error) {
                    console.log(error.message);
                    message.error('录入失败，请重试！')
                } finally {
                    setOrderLoading(false)
                }
            },
            maskClosable: true
        })

    }

    return (
        <>
            <Form
                initialValues={{
                    id
                }}
                onFinish={(values) => handleFinish(values)}
                layout="horizontal"
                form={form}
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 20,
                }}
            >
                <Form.Item
                    name="id"
                    label="预约号（id）"
                >
                    <Input
                        disabled={true}
                        placeholder="请输入你的预约单号"
                        value={id}
                    />
                </Form.Item>
                <Form.Item
                    name="orderNumber"
                    label="处理单号"
                    validateFirst={true}
                    width="100%"
                    rules={[
                        {
                            required: true,
                            message: '处理单号不能为空噢！'
                        }
                    ]}
                // labelCol={{}}
                // 控制台会警告，但是没有问题，这是因为验证失败给的警告
                >
                    <Input
                        style={{ width: "100%" }}
                        placeholder="请输入你需要处理的单号"
                        addonAfter={<InstagramOutlined style={{ fontSize: "24px", }} onClick={() => openCamera()} />}
                    />
                </Form.Item>
                <Form.Item
                    name="principalId"
                    label="负责人学工号"
                    tooltip="处理的事务属于谁名下，填谁的！"
                    rules={[
                        {
                            required: true,
                            message: '学工号不能为空噢！'
                        }
                    ]}
                >
                    <Input style={{ width: "100%" }} maxLength="20" placeholder="请输入你的负责人学工号" />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 9,
                        span: 16,
                    }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={orderLoading}
                        size='large'
                    >
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default InputForm