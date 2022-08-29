import { createSlice } from "@reduxjs/toolkit";
import { assign } from "lodash";
import { SettingsProps } from "./types";
const SETTINGS_LOCAL_STORAGE_KEY = "settings";

const defaultState: SettingsProps = {
  mobileOpen: false,
};

const gettingLocalStorage = (): SettingsProps => {
  const stringSettings = window.localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY);
  if (stringSettings) {
    return assign({}, defaultState, JSON.parse(stringSettings));
  }
  return defaultState;
};

const settingLocalStorage = (key: string, value: any) => {
  const currentSettings = gettingLocalStorage();
  const newSettings = {
    ...currentSettings,
    [key]: value,
  } as SettingsProps;
  window.localStorage.setItem("settings", JSON.stringify(newSettings));
};

const settings: SettingsProps = gettingLocalStorage();

export const initialState: SettingsProps = {
  mobileOpen: settings.mobileOpen,
};

const slice = createSlice({
  name: "Settings",
  initialState,
  reducers: {
    toggleMobileOpen: (state) => {
      const mobileOpen = !state.mobileOpen;
      settingLocalStorage("mobileOpen", mobileOpen);
      return { ...state, mobileOpen };
    },
  },
});

export const { toggleMobileOpen } = slice.actions;
export const settingsReducer = slice.reducer;
