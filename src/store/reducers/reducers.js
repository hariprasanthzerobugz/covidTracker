import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    search: null,
    date: null,
    stateList: [],
    dateStateList: [],
    listData: [],
}
export const covidTrackerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_KEY:
            return { ...state, search: payload };
        case ActionTypes.SET_STATE_LIST:
            return { ...state, stateList: payload };
        case ActionTypes.DATE_SEARCH:
            return { ...state, date: payload };
        case ActionTypes.SET_DATE_STATE_LIST:
            return { ...state, dateStateList: payload };
        case ActionTypes.SET_LIST_DATA:
            return { ...state, listData: payload };
        default:
            return state;
    }
}