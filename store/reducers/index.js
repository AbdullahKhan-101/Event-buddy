import { combineReducers } from "redux";

// imports: Reducers
import HomeReducer from "./Home";

// Redux: Root Reducer
const rootReducer = combineReducers({
  //reducers will go here
  Home: HomeReducer,
});

// exports
export default rootReducer;
