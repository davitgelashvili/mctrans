import { configureStore } from "@reduxjs/toolkit";
import translate from "./translate";

const store = configureStore({
  reducer: {
    userData,
    translate
  }
});

export default store;