/* eslint-disable no-console */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import "@testing-library/jest-dom";
import "./__tests__/i18nForTests.setup";
import React from "react";
import resizePolyfill from "resize-observer-polyfill";

React.useLayoutEffect = React.useEffect;
global.ResizeObserver = resizePolyfill;
global.matchMedia = global.matchMedia || function () {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};
// @ts-ignore
global.console = {
  log: console.log,

  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  error: console.error,
  warn: console.warn,
  info: console.log,
  debug: console.log,
};

process.env.FALLBACK = "FALLBACK";
process.env.REACT_APP_LOGGING = "true";