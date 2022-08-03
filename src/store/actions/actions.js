import { ActionTypes } from "../constants/actionTypes"

export const searchValue = (key) => {
    return {
        type: ActionTypes.SEARCH_KEY,
        payload: key,
    }
}
export const setStateList = (key) => {
    return {
        type: ActionTypes.SET_STATE_LIST,
        payload: key,
    }
}
export const setFiltedStateList = (key) => {
    return {
        type: ActionTypes.FILTERD_STATE_LIST,
        payload: key,
    }
}