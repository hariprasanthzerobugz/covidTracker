import { ActionTypes } from "../constants/actionTypes"

export const searchValue = (key) => {
    return {
        type: ActionTypes.SEARCH_KEY,
        payload: key,
    }
}