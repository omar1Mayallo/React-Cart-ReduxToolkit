import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./reducers";
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  // preloadedState,
  // enhancers: [batchedSubscribe(debounceNotify)],
});
export default store;
