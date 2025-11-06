import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookingDetails, confirmBooking } from "../redux/bookingSlice";
import { useNavigate } from "react-router-dom";

const FlightBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const selectedFlight = useSelector((state) => state.flight.selectedFlight);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleBooking = () => {
    if (!name || !email || !phone) {
      setError("All fields are required");
      return;
    }

    dispatch(setBookingDetails({ name, email, phone }));
    dispatch(confirmBooking());
    navigate("/confirmation");
  };

  return (
    <div>
      <h2>Book Flight: {selectedFlight?.flightNumber}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleBooking}>Confirm Booking</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FlightBooking;
