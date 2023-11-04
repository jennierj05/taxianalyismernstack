import '../styles/RegisterStyles.css';
import React from 'react';
import axios from 'axios';
import { Cascader, Form, Input, Select, Button, Row, Col } from 'antd';

const { Option } = Select;

const options = [
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Ariyalur', label: 'Ariyalur' },
  { value: 'Chengalpattu', label: 'Chengalpattu' },
  { value: 'Coimbatore', label: 'Coimbatore' },
  { value: 'Cuddalore', label: 'Cuddalore' },
  { value: 'Dharmapuri', label: 'Dharmapuri' },
  { value: 'Dindigul', label: 'Dindigul' },
  { value: 'Erode', label: 'Erode' },
  { value: 'Kallakurichi', label: 'Kallakurichi' },
  { value: 'Kanchipuram', label: 'Kanchipuram' },
  { value: 'Karur', label: 'Karur' },
  { value: 'Krishnagiri', label: 'Krishnagiri' },
  { value: 'Madurai', label: 'Madurai' },
  { value: 'Nagapattinam', label: 'Nagapattinam' },
  { value: 'Namakkal', label: 'Namakkal' },
  { value: 'Nilgiris', label: 'Nilgiris' },
  { value: 'Perambalur', label: 'Perambalur' },
  { value: 'Pudukkottai', label: 'Pudukkottai' },
  { value: 'Ramanathapuram', label: 'Ramanathapuram' },
  { value: 'Salem', label: 'Salem' },
];


const options1 = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];


const options2 = [
  {
    value: 'Online',
    label: "Online",
  },
  {
    value: 'Offine',
    label: 'Offine',
  },
];

export default function Home() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      alert('Form data submitted successfully');
      await axios.post('/api/register', values);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCascaderChange = (field, value) => {
    const joinedValue = value.join(', ');
    form.setFieldsValue({ [field]: joinedValue });
  };

  return (
    <div className="App">
      <h2>Taxi Booking</h2>
      <Form form={form} onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="d_name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: 'Please enter your name',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="d_plate"
              label="Plate no"
              rules={[
                {
                  required: true,
                  message: 'Please enter the plate number',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="d_date"
              label="Date"
              rules={[
                {
                  required: true,
                  message: 'Please select a date',
                },
              ]}
            >
              <Input type="date" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="d_start_time"
              label="Start Time"
              rules={[
                {
                  required: true,
                  message: 'Please select a start time',
                },
              ]}
            >
              <Input type="time" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="d_end_time"
              label="End Time"
              rules={[
                {
                  required: true,
                  message: 'Please select an end time',
                },
              ]}
            >
              <Input type="time" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="d_start_location"
              label="Start Location"
              rules={[
                {
                  required: true,
                  message: 'Please select a start location',
                },
              ]}
            >
              <Cascader options={options} placeholder="Please select" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="d_end_location"
              label="End Location"
              rules={[
                {
                  required: true,
                  message: 'Please select an end location',
                },
              ]}
            >
              <Cascader options={options} placeholder="Please select" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="d_gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: 'Please select a gender',
                },
              ]}
            >
              <Cascader options={options1} placeholder="Please select" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="d_age"
              label="Age"
              rules={[
                {
                  required: true,
                  message: 'Please enter your age',
                },
              ]}
            >
              <Input type="number" min={1} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="d_count"
              label="Passenger Count"
              rules={[
                {
                  required: true,
                  message: 'Please enter passenger count',
                },
              ]}
            >
              <Input type="number" min={1} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="d_pay"
              label="Payment"
              rules={[
                {
                  required: true,
                  message: 'Please select a payment method',
                },
              ]}
            >
              <Cascader options={options2} placeholder="Please select" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="d_paymentAmount"
              label="Payment Amount"
            >
              <Input className="payment-input" />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          Book Taxi
        </Button>
      </Form>
    </div>
  );
}

