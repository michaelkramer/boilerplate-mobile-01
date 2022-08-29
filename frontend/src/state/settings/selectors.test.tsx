import React from "react";
import { useSelector } from "react-redux";
import { customRender } from "../../__tests__/customRender.setup";
import { selectSettings, initialState, selectMobileOpen } from "../settings";
import { SettingsProps } from "./types";


describe("Settings Selector", () => {
  test("Select settings and return them with Initial State", () => {
    let actual = {} as SettingsProps;
    const ViewComponent = () => {
      actual = useSelector(selectSettings);
      return (<div>This is a test component, that does nothing.</div>);
    };

    customRender(<ViewComponent />);
    const expected = initialState;
    expect(actual).toMatchObject(expected);
  });

  test("Select MobileOpen", () => {
    let actual = false;
    const ViewComponent = () => {
      actual = useSelector(selectMobileOpen);
      return (<div>This is a test component, that does nothing.</div>);
    };

    customRender(<ViewComponent />);
    const expected = false;
    expect(actual).toBe(expected);
  });

});
