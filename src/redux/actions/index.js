import { GET_ALL_BOOK_LIST, backendAPIBooks } from "../../utils/constants";
import Axios from "axios";

export function getBooksList() {
  return async dispatch => {
    try {
      let response = await Axios.get(backendAPIBooks);
      dispatch({ type: GET_ALL_BOOK_LIST, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterBooksList(query) {
  return async dispatch => {
    try {
      const apiconfig = {
        url: backendAPIBooks + "?q=" + query,
        method: "GET"
      };
      const response = await Axios(apiconfig);
      dispatch({ type: GET_ALL_BOOK_LIST, payload: response.data });
    } catch (error) {
      console.error(error.response);
    }
  };
}
