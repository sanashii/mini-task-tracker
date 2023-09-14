import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import MainHeader from '../components/MainHeader'
import Forms from './Forms'
import '../Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <MainHeader />
      <Link to="/TaskTracker" className="link-container task-tracker">
        <div className="background-image task-tracker"></div>
        <span className="link-text">View Task Tracker</span>
      </Link>
      <Link to="/Forms" className="link-container forms">
        <div className="background-image forms"></div>
        <span className="link-text">View Forms</span>
      </Link>
    </div>
  );
}
export default Home