import React, { useState } from 'react';
import { Form,Select, Button, Input } from 'antd'; // Make sure to import Input from antd
import { Link } from 'react-router-dom';
import '../styles/Query2Styles.css';

const { Option } = Select;
const Query2 = () => {
  const [form] = Form.useForm();
  const [queryResult, setQueryResult] = useState([]);

  const onFinish = async (values) => {
    const apiUrl = `/api/query2?d_end_location=${values.d_end_location}`; // Use a query parameter here

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <div className="query2-container">
      <div className="query2-sub">
        <h2>Query2: Revenue-wise Summation in Descending Order for a Particular Destination</h2>
        <Form form={form} onFinish={onFinish}>
        <Form.Item name="d_end_location" label="Select end location" >
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
                  
                  <th>Total Revenue</th>
                </tr>
              </thead>
              <tbody>
                {queryResult.map((resultItem, index) => (
                  <tr key={index}>
                    <td>{resultItem.totalRevenue}</td>
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

export default Query2;

