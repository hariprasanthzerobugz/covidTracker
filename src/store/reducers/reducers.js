import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    search: null,
}
export const covidTrackerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_KEY:
            return { ...state, search: payload };
        default:
            return state;
    }
}