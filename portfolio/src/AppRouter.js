import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import ResumePage from './Pages/ResumePage';
import Navigation from './Components/Navigation';


function AppRouter() {
  return (
    <Router>
       <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
        {/* <Route component={NotFound} /> */}
        </Routes>
    </Router>
  );
}

export default AppRouter;
