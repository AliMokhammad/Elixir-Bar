import { createAction } from "../action_creator";
import * as SettingsActions from "../actionTypes/settings";

export default {
  ...createAction(SettingsActions.SET_LANG, "lang"),
  ...createAction(
    SettingsActions.SET_ALERT_MESSAGE,
    "severity",
    "text",
    "open"
  ),
  ...createAction(SettingsActions.SET_LOADING, "loading"),
};
