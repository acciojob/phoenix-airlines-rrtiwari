import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFlights, selectFlight } from "../redux/flightSlice";
import { useNavigate } from "react-router-dom";

const FlightSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const flights = useSelector((state) => state.flight.flights);

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!source || !destination || !date) {
      alert("Please fill all fields");
      return;
    }

    const results = [
      { id: 1, flightNumber: "PA101", source, destination, date },
      { id: 2, flightNumber: "PA102", source, destination, date },
    ];
    dispatch(setFlights(results));
  };

  const handleSelectFlight = (flight) => {
    dispatch(selectFlight(flight));
    navigate("/flight-booking"); 
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
       <button type="submit">Search</button>
      </form>

      <div>
        {flights.map((flight) => (
          <div key={flight.id}>
            <p>
              {flight.flightNumber} - {flight.source} to {flight.destination} (
              {flight.date})
            </p>
            <button
              className="book-flight"
              onClick={() => handleSelectFlight(flight)}
            >
              Book Flight
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightSearch;
