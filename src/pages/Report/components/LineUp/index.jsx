import React, { useEffect, useState } from 'react';
import { Form, Button, message, InputNumber } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import styled from 'styled-components';
import { getCover, getLineUp } from '../../../../apis/report'
import { BackButton, CoverContainer, Title } from '../../style';
import { useHistory } from 'react-router-dom';

// 麻了，他妈的，这怎么会和预约页面一模一样，淦，我还给 cv 了份，妈的
const LineUp = () => {
    const [lineLoading, setLineLoading] = useState(false)
    const history = useHistory()
    const [form] = useForm()
    const handleFinish = async(values) => {
        setLineLoading(true)
        try {
            // 发送请求
            const { data } = await getLineUp(values)
            data.code === 1 ? message.success(data.message) : message.error(data.message)
        } catch (error) {
            message.error(error)
        } finally {
            setLineLoading(false)
        }
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