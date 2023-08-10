import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATE FOR DATA LAYER
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

// DATA LAYER TO CHAGE DATA WITH REDUCERS
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// EXPORTING REDUCERS TO CHANGE DATA LAYER IN OTHER COMPONENTS
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

//Selectors (FOR PULLING INFORMATION STORED IN THE DATA LAYER)
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
