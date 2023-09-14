import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import Forms from 'Forms'


const Home = () => {
  return (
    <div>CHECK
      <Link to="TaskTracker">View Task Tracker</Link>
      <Link to="TaskTracker">View Forms</Link>
    </div>
  )
}

export default Home