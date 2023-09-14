import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MainHeader from '../components/MainHeader'// Import the MainLayout
import '../Home.css';

function Home() {
  return (
    <MainLayout>
      <div className="home-container">
      <MainHeader />
        <Link to="/TaskTracker" className="link-container task-tracker">
          <div className="background-image task-tracker"></div>
          <span className="link-text">Mini Task Tracker</span>
        </Link>
        <Link to="/Forms" className="link-container forms">
          <div className="background-image forms"></div>
          <span className="link-text">Forms</span>
        </Link>
      </div>
    </MainLayout>
  );
}

export default Home;
