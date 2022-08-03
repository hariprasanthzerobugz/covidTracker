import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    search: null,
    stateList: [],
    filterdStateList: [],
}
export const covidTrackerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_KEY:
            return { ...state, search: payload };
        case ActionTypes.SET_STATE_LIST:
            return { ...state, stateList: payload };
        case ActionTypes.FILTERD_STATE_LIST:
            return { ...state, filterdStateList: payload };
        default:
            return state;
    }
}