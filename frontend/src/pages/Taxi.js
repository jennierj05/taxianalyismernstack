import React from 'react';
import {Form} from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import '../styles/TaxiStyles.css';

import Query1 from './Query1';
import Query2 from './Query2';
import Query3 from './Query3';
import Query4 from './Query4';

const TaxiAnalysis = () => {
  return (
    <div className="taxi-analysis-container">
      <div className="taxi-analysis-queries">
        <div className="taxi-analysis-heading">
          
          <h1>Taxi Ride Analyis</h1>
          
        </div>
        <h2>Select a Query:</h2>
        <ol>
          <li>
            <Link to="/query1">Give the Customer Name based On Source and Destination</Link>
          </li>
          <li>
            <Link to="/query2">Give me the revenue wise summation in descending order for a particular destination</Link>
          </li>
          <li>
            <Link to="/query3">Year wise total number of passanger Travelled</Link>
          </li>
          <li>
            <Link to="/query4">Between any two years give me a count of destination booked in descendind order</Link>
          </li>
        </ol>
        <Form.Item className="back-to-home">
        <Link to="/">Back to Home</Link>
      </Form.Item>
      </div>
      <div>
        <Routes>
          <Route path="/query1" element={<Query1 />} />
          <Route path="/query2" element={<Query2 />} />
          <Route path="/query3" element={<Query3 />} />
          <Route path="/query4" element={<Query4 />} />
        </Routes>
        
      </div>
      
      
    </div>
  );
};

export default TaxiAnalysis;
