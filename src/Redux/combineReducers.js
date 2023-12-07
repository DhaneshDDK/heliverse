import { combineReducers } from "@reduxjs/toolkit";

import pageSlice from "./Slices/Pagination";

const rootReducer = combineReducers({
    page : pageSlice
})

export default rootReducer;