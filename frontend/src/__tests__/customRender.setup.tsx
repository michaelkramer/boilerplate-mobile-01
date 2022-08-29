import { render as rtlRender, RenderResult } from "@testing-library/react";
import merge from "lodash/merge";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { storeWInitialState } from "../state";
import { initialState as settingsInitialState } from "../state/settings";

const initState = {
  settings: settingsInitialState,
};

export const customRender = (
  ui: ReactElement,
  {
    initialState = {},
    ...renderOptions
  } = {},
): RenderResult => {
  const Wrapper: React.FC = ({ children }: any) => {
    const store = storeWInitialState(merge({}, initState, initialState));

    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
