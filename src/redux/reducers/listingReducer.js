import { combineReducers } from "redux";
import { GET_ALL_BOOK_LIST } from "../../utils/constants";

const initialData = [];
const initialDataUser = ["name", "propfile", "verified"];

const listingReducer = (state = initialData, { type, payload }) => {
  if (type === GET_ALL_BOOK_LIST) {
    console.log("got list booking action , lets load books here");
    return payload;
  }
  return state;
};

const userReducer = (...somedata) => {
  console.warn("userReducer", somedata);
  return initialDataUser;
};

const rootReducer = combineReducers({ listingReducer, userReducer });

export default rootReducer;
