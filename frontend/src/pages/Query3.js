import React, { useState } from 'react';
import { Form, DatePicker, Button, Table } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/Query3Styles.css'; // Import your CSS file

const Query3 = () => {
  const [form] = Form.useForm();
  const [queryResult, setQueryResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/query3?d_date=${values.d_date.format('YYYY')}`);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Year',
      dataIndex: '_id',
      key: 'year',
    },
    {
      title: 'Count',
      dataIndex: 'totalPassengers',
      key: 'count',
    },
  ];

  return (
    <div className="query3-container">
      <div className="query3-sub">
        <h2>Query 3: Year Wise Count of Passengers</h2>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="d_date" label="Year">
            <DatePicker picker="year" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        {loading ? (
          <div>Loading...</div>
        ) : queryResult.length > 0 ? (
          <div className="query-result">
            <h3>Query Result:</h3>
            <Table dataSource={queryResult} columns={columns} pagination={false} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Query3;
