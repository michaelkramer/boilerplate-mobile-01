import { getOsEnv, normalizePort, toBool, toNumber, getOsEnvOptional, delay } from "./common";

describe("utils tests", () => {
  it("get env variable", () => {
    const fallback = "FALLBACK";
    const actual = getOsEnv(fallback);
    expect(actual).toEqual(fallback);
  });

  it("get env variable fallback", () => {
    const fallback = "FALL_BACK";
    const expected = "FALLBACK";
    const actual = getOsEnv(fallback, expected);
    expect(actual).toEqual(expected);
  });

  it("get invalid env variable", () => {
    const actual = getOsEnv("test");
    expect(actual).toEqual("");
  });

  it("get env variable optionally", () => {
    const fallback = "FALL_BACK";
    const expected = undefined;
    const actual = getOsEnvOptional(fallback);
    expect(actual).toEqual(expected);
  });


  it("parse port", () => {
    const output = normalizePort("100");
    expect(output).toEqual(100);
  });

  it("parse zero port", () => {
    const output = normalizePort("-1");
    expect(output).toEqual(false);
  });


  it("parse invalid port", () => {
    const expected = "test";
    const actual = normalizePort(expected);
    expect(actual).toEqual(expected);
  });

  test("parse string to bool", () => {
    const expected = true;
    const actual = toBool("true");
    expect(actual).toEqual(expected);
  });

  test("parse string to number", () => {
    const expected = 10;
    const actual = toNumber("10");
    expect(actual).toEqual(expected);
  });

  test("parse string to number but not actually a number", () => {
    const expected = undefined;
    const actual = toNumber(undefined);
    expect(actual).toEqual(expected);
  });

  test("Delay test", async () => {
    const expected = true;
    await delay(2000);
    expect(expected).toBeDefined();
  });
});
