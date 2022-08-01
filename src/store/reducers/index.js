import { combineReducers } from "redux";
import { covidTrackerReducer } from "./reducers";

const reducers = combineReducers({
    search: covidTrackerReducer,
})

export default reducers;