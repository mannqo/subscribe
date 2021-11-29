import React, { useState } from 'react';
import { Form, Button, message, InputNumber, Modal } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { getLineUp } from '../../../../services/report'
import { BackButton, CoverContainer, Title } from '../../style';
import { useHistory } from 'react-router-dom';

// 麻了，他妈的，这怎么会和预约页面一模一样，淦，我还给 cv 了份，妈的
const LineUp = () => {
    const [lineLoading, setLineLoading] = useState(false)
    const history = useHistory()
    const [form] = useForm()

    const handleFinish = async (values) => {
        Modal.confirm({
            title: '请确认你的学工号是否正确？',
            content: <p>学工号：{values.userId}</p>,
            maskClosable: true,
            onOk: async () => {
                setLineLoading(true)
                try {
                    // 发送请求
                    const data = await getLineUp(values)
                    if (data.code === 0) {
                        message.success(data.message)
                        history.push('/report/result')
                    } else {
                        message.error(data.message)
                    }
                } catch (error) {
                    message.error(error)
                } finally {
                    setLineLoading(false)
                }
            }
        })

    }

    return (
        <CoverContainer>
            <BackButton onClick={() => history.push('/report')}>返回</BackButton>
            <Title>现在排队</Title>
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
                        loading={lineLoading}
                        size="large"
                    >
                        现在排队
                    </Button>
                </Form.Item>
            </Form>
        </CoverContainer >
    );
};
export default LineUp;