import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flightSlice";
import bookingReducer from "./bookingSlice";

export const store = configureStore({
  reducer: {
    flight: flightReducer,
    booking: bookingReducer,
  },
});
