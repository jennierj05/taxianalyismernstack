import React, { useState } from 'react';
import { Form, Input, DatePicker, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/Query4Styles.css';
const { Option } = Select;

const Query4 = () => {
  const [form] = Form.useForm();
  const [queryResult, setQueryResult] = useState([]);

  const handleQuerySubmit = async (values) => {
    try {
      const response = await fetch(`/api/query4?startDate=${values.d_start_date.format('YYYY-MM-DD')}&endDate=${values.d_end_date.format('YYYY-MM-DD')}&d_end_location=${values.d_end_location}`);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="query4-container">
      <div className="query4-sub">
        <h2>Query 4: Count of Destinations Booked Between Two Years (Descending Order)</h2>
        <Form form={form} onFinish={handleQuerySubmit} initialValues={{ k: 5 }}>
          <Form.Item name="d_start_date" label="Enter the Start Year">
          <DatePicker picker="year" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="d_end_date" label="Enter the End year">
          <DatePicker picker="year" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="d_end_location" label="Select End Location">
          <Select style={{ width: '100%' }}>
            <Option value="Chennai">Chennai</Option>
      <Option value="Madurai">Madurai</Option>
      <Option value="Coimbatore">Coimbatore</Option>
      <Option value="Trichy">Trichy</Option>
      <Option value="Tirunelveli">Tirunelveli</Option>
      <Option value="Ariyalur">Ariyalur</Option>
      <Option value="Dharmapuri">Dharmapuri</Option>
      <Option value="Kanchipuram">Kanchipuram</Option>
      <Option value="Karur">Karur</Option>
      <Option value="Krishnagiri">Krishnagiri</Option>
      <Option value="Namakkal">Namakkal</Option>
      <Option value="Perambalur">Perambalur</Option>
      <Option value="Pudukkottai">Pudukkottai</Option>
      <Option value="Salem">Salem</Option>
      <Option value="Sivaganga">Sivaganga</Option>
      <Option value="Thanjavur">Thanjavur</Option>
      <Option value="Theni">Theni</Option>
      <Option value="Tirupur">Tirupur</Option>
      <Option value="Tuticorin">Tuticorin</Option>
      <Option value="Vellore">Vellore</Option>
      <Option value="Virudhunagar">Virudhunagar</Option>
      <Option value="Cuddalore">Cuddalore</Option>
      <Option value="Nagapattinam">Nagapattinam</Option>
      <Option value="Nilgiris">Nilgiris</Option>
      <Option value="Ramanathapuram">Ramanathapuram</Option>
      <Option value="Salem">Salem</Option>
      <Option value="Sivaganga">Sivaganga</Option>
      <Option value="Thanjavur">Thanjavur</Option>
      <Option value="Theni">Theni</Option>
      <Option value="Tirupur">Tirupur</Option>
      <Option value="Tuticorin">Tuticorin</Option>
      <Option value="Vellore">Vellore</Option>
      <Option value="Virudhunagar">Virudhunagar</Option>
      <Option value="Cuddalore">Cuddalore</Option>
      <Option value="Nagapattinam">Nagapattinam</Option>
      <Option value="Nilgiris">Nilgiris</Option>
      <Option value="Ramanathapuram">Ramanathapuram</Option>
            </Select>

          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {queryResult.length > 0 && (
          <div className="query-result">
            <h3>Query Result:</h3>
            <table>
              <thead>
                <tr>
                  <th>2022</th>
                  <th>2023</th>
                  <th>Destination</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {queryResult.map((resultItem, index) => (
                  <tr key={index}>
                         <td>2022</td>
                        <td>2023</td>
                    <td>{resultItem.d_end_location}</td>
                    <td>{resultItem.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Query4;
