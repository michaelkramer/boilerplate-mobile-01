import { toggleMobileOpen, settingsReducer, initialState } from "./reducer";

describe("Settings Reducer", () => {

  describe("Actions", () => {

    test("Toggle Mobile Open Action", () => {

      const expectedAction = {
        type: toggleMobileOpen.type,
      };
      expect(toggleMobileOpen()).toEqual(expectedAction);
    });


  });
  describe("State from Reducer", () => {
    test("Toggle Mobile Open", () => {
      const { type } = toggleMobileOpen;
      const expected = { ...initialState, ...{ mobileOpen: true } };

      expect(settingsReducer(initialState, { type })).toEqual(expected);
    });

  });
});