import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav-bar';

const Root = (props) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" />
        <Route path="/react"/>
        <Route path="/about" />
        <Route path="/test" element={<h1 style={{color: "red"}}>Test content</h1>} />
        <Route path="/" element={<h1>Welcome to the Navbar App {props.name} </h1>} />
      </Routes>
    </Router>
  );
};
 
export default Root;
 