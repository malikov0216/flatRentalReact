import { FETCH_FLAT_LIST_SUCCESS } from "./actionTypes"
import axios from "../../axios-api";

export const fetchFlatListSuccess = flatList => {
  return { type: FETCH_FLAT_LIST_SUCCESS, flatList }
};

export const fetchFlatList = () => {
  return dispatch => {
    console.log("Axios", axios.defaults)
    axios.get("/flats")
      .then(response => {
        console.log("Test", response)
        dispatch(fetchFlatListSuccess(response.data))
      }).catch(err => console.log("Error", err))
  }
}