import { createSlice, configureStore } from "@reduxjs/toolkit";
import { globalInitialState } from "./InitialState";

const SpacexDataSlice = createSlice({
  name: "SpaceXData",
  initialState: globalInitialState,
  reducers: {
    setUserAuth: (state) => {
      state.isAuthUser = true;
    },
    setUnauthUser: (state) => {
      state.isAuthUser = false;
    },
  },
});

export const { setUserAuth, setUnauthUser } = SpacexDataSlice.actions;

const SpaceXDataStore = configureStore({
  reducer: SpacexDataSlice.reducer,
});

export default SpaceXDataStore;
