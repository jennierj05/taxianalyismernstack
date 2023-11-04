import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import '../styles/Vehiclestyles.css';
const VehicleCtrl = () => {
  const [loading, setLoading] = useState(false);
  const [queryResult, setQueryResult] = useState([]);

  const columns = [
    {
      title: 'Vehicle Type',
      dataIndex: 'vehicle_type',
      key: 'vehicle_type',
    },
    {
      title: 'License Plate',
      dataIndex: 'license_plate',
      key: 'license_plate',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Availability',
      dataIndex: 'availability',
      key: 'availability',
    },
  ];

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/vehicle'); // Use the correct API route
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div>
      <h2>Vehicle Information</h2>
      {loading ? (
        <div>Loading...</div>
      ) : queryResult.length > 0 ? (
        <div className="query-result">
          <h3>Query Result:</h3>
          <Table dataSource={queryResult} columns={columns} pagination={false} />
          <Table.ColumnGroup>
            <Table.Column title="Vehicle Type" dataIndex="vehicle_type" key="vehicle_type" />
            <Table.Column title="License Plate" dataIndex="license_plate" key="license_plate" />
            <Table.Column title="Model" dataIndex="model" key="model" />
            <Table.Column title="Availability" dataIndex="availability" key="availability" />
          </Table.ColumnGroup>
        </div>
      ) : null}
      <Link to="/register" className="action-link">Book a Taxi</Link>
    </div>
  );
};

export default VehicleCtrl;
