import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homestyles.css';
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="taxi-service-logo">
        <h1 className="heading">Taxi Booking Analysis using MERN Stack</h1>
      </div>

      <div className="home-content">
        <p>
          The Taxi Booking System is a convenient and reliable platform designed to streamline your taxi booking needs. Our system provides an easy way to book a taxi, track your ride, and manage your transportation efficiently. Whether you need a ride to the airport, a local destination, or any other place, our service offers a seamless booking experience, ensuring you reach your destination safely and on time.
        </p>
        <Link to="/vehicle" className="action-link">Book a Taxi</Link>
        <Link to="/analysis" className="action-link">Track Your Ride</Link>
      </div>
    </div>
  );
}

export default HomePage;
