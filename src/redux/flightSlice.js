import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flights: [],
  selectedFlight: null,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setFlights: (state, action) => {
      state.flights = action.payload;
    },
    selectFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
  },
});

export const { setFlights, selectFlight } = flightSlice.actions;
export default flightSlice.reducer;
