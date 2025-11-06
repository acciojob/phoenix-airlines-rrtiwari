import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  confirmed: false,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    confirmBooking: (state) => {
      state.confirmed = true;
    },
    resetBooking: (state) => {
      state.name = "";
      state.email = "";
      state.phone = "";
      state.confirmed = false;
    },
  },
});

export const { setBookingDetails, confirmBooking, resetBooking } =
  bookingSlice.actions;
export default bookingSlice.reducer;
