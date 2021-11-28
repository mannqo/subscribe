import React, {  useState } from 'react';
import { Form, Button, message, InputNumber } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { getUrgent } from '../../../../services/report'
import { useHistory } from 'react-router-dom';
import { BackButton, CoverContainer, Title } from '../../style';
const Urgent = () => {
    const [urgentLoading, setUrgentLoading] = useState(false)
    const history = useHistory()
    const [form] = useForm()
    const handleFinish = async (values) => {
        setUrgentLoading(true)
        try {
            // 发送请求
            const data = await getUrgent(values)
            if (data.code === 0) {
                message.success(data.message)
                history.push('/report/result')
            } else {
                message.error(data.message)
            }
        } catch (error) {
            message.error(error)
        } finally {
            setUrgentLoading(false)
        }
    }
    return (
        <CoverContainer>
            <BackButton onClick={() => history.push('/report')}>返回</BackButton>
            <Title>加急排队</Title>
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
                        loading={urgentLoading}
                        size="large"
                    >
                        加急排队
                    </Button>
                </Form.Item>
            </Form>
        </CoverContainer >
    );
};

export default Urgent;