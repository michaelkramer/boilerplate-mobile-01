import { env } from "../context";
import { logger } from "./logger";

describe("Logger tests", () => {
  beforeAll(() => {
    env.logging = true;
    jest.spyOn(logger, "error");
    jest.spyOn(logger, "info");
    jest.spyOn(logger, "warn");
    jest.spyOn(logger, "debug");
    jest.spyOn(logger, "verbose");

  });

  test("logger : error", () => {
    logger.error("I'm an Error");
    expect(logger.error).toHaveBeenCalled();
    expect(logger.error.mock.calls[0][0]).toContain("I'm an Error");
  });

  test("logger : info", () => {
    logger.info("I'm an Info");
    expect(logger.info).toHaveBeenCalled();
    expect(logger.info.mock.calls[0][0]).toContain("I'm an Info");
  });

  test("logger : warn", () => {
    logger.warn("I'm a Warning");
    expect(logger.warn).toHaveBeenCalled();
    expect(logger.warn.mock.calls[0][0]).toContain("I'm a Warning");
  });

  test("logger : debug", () => {
    // eslint-disable-next-line testing-library/no-debugging-utils
    logger.debug("I'm a debug message");
    expect(logger.debug).toHaveBeenCalled();
    expect(logger.debug.mock.calls[0][0]).toContain("I'm a debug message");
  });

  test("logger : verbose", () => {
    logger.verbose("I'm a verbose message");
    expect(logger.verbose).toHaveBeenCalled();
    expect(logger.verbose.mock.calls[0][0]).toContain("I'm a verbose message");
  });
});