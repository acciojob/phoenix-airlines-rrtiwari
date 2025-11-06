import "./../styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FlightSearchPage from "../pages/FlightSearchPage";
import FlightBookingPage from "../pages/FlightBookingPage";
import ConfirmationPage from "../pages/ConfirmationPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight-search" element={<FlightSearchPage />} />
        <Route path="/flight-booking" element={<FlightBookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
