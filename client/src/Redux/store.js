// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import userReducer from "./slices/user-slice";

// const rootReducer = combineReducers({
//     user: userReducer,
// });

// export const store = configureStore({
//     reducer: rootReducer,
// });

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice"; // Adjust the import path as necessary

export const store = configureStore({
  reducer: {
    user: userReducer, // Add your slices here
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});
