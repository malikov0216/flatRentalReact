import { FETCH_FLAT_LIST_SUCCESS } from "../actions/actionTypes"

const initialState = {
  flatList: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLAT_LIST_SUCCESS:
      return { ...state, flatList: action.flatList };
    default:
      return state
  }
}

export default reducer