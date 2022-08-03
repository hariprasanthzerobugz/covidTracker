import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    search: null,
    stateList: [],
    }
export const covidTrackerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_KEY:
            return { ...state, search: payload };
        case ActionTypes.SET_STATE_LIST:
            return { ...state, stateList: payload };
        default:
            return state;
    }
}