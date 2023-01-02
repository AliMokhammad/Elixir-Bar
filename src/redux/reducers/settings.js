import { combineReducers } from "redux";
import * as SettingsActions from "../actionTypes/settings";
import currentTheme from "styles/coloredTheme/theme";

const appLang = window.getAppLang();
const initialState = {
  appLang,
  currentTheme,
  alertMessage: {
    open: false,
    severity: "",
    text: "",
  },
  loading: false,
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SettingsActions.SET_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: {
          open: action.open,
          severity: action.severity,
          text: action.text,
        },
      };

    case SettingsActions.SET_LANG:
      localStorage.setItem("lang", action.lang);
      return {
        ...state,
        appLang: action.lang,
      };
    case SettingsActions.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default settings;
