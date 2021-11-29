import React, { useState } from 'react';
import { Form, Button, message, InputNumber, Modal } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { getCover } from '../../../../services/report'
import { useHistory } from 'react-router-dom';
import { BackButton, CoverContainer, Title } from '../../style';
// 为了防止之后需要更改表单，现在直接全部抽出来写，不合并了
// 万一之后要给每种方式加，不好加
const Cover = () => {
    const [orderLoading, setOrderLoading] = useState(false)
    const [form] = useForm()
    const history = useHistory()

    const handleFinish = async (values) => {
        Modal.confirm({
            title: '请确认你的学工号是否正确？',
            content: <p>学工号：{values.userId}</p>,
            maskClosable: true,
            onOk: async () => {
                setOrderLoading(true)
                try {
                    // 发送请求
                    const data = await getCover(values)
                    if (data.code === 0) {
                        message.success(data.message)
                        history.push('/report/result')
                    } else {
                        message.error(data.message)
                    }
                } catch (error) {
                    message.error(error)
                } finally {
                    setOrderLoading(false)
                }
            }
        })
    }

    return (
        <CoverContainer>
            <BackButton onClick={() => history.push('/report')}>返回</BackButton>
            <Title>我要报道</Title>
            <Form
                onFinish={(values) => handleFinish(values)}
                layout="horizontal"
                form={form}
                labelCol={{
                    span: 3,
                }}
                wrapperCol={{
                    span: 16,
                }}
            >
                <Form.Item
                    name="userId"
                    label="负责人学工号"
                    tooltip="预约时填的谁的，就填谁的"
                    rules={[
                        {
                            required: true,
                            message: '学工号不能为空噢！'
                        },
                        {
                            type: 'number',
                            message: '只能填写数字噢！'
                        }
                    ]}
                >
                    <InputNumber style={{ width: "100%" }} maxLength="20" placeholder="请输入预约人学工号" />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={orderLoading}
                        size="large"
                    >
                        确认报道
                    </Button>
                </Form.Item>
            </Form>
        </CoverContainer >
    );
};

export default Cover;