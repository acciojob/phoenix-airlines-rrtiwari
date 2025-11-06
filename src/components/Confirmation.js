import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetBooking } from "../redux/bookingSlice";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const booking = useSelector((state) => state.booking);
  const flight = useSelector((state) => state.flight.selectedFlight);

  const handleHome = () => {
    dispatch(resetBooking());
    navigate("/");
  };

  return (
    <div>
      <h2>Booking Confirmation</h2>
      {booking.confirmed ? (
        <div>
          <p>Flight: {flight?.flightNumber}</p>
          <p>Name: {booking.name}</p>
          <p>Email: {booking.email}</p>
          <p>Phone: {booking.phone}</p>
          <button onClick={handleHome}>Return Home</button>
        </div>
      ) : (
        <p>No booking confirmed yet.</p>
      )}
    </div>
  );
};

export default Confirmation;
