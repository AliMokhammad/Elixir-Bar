import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import settings from "./settings";
import cocktail from "./cocktail";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    settings,
    cocktail,
  });

export default rootReducer;
