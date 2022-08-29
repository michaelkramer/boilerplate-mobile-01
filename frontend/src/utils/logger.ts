import { env } from "../context";

/* eslint-disable no-console */
const showConsole = env.logging;
export interface Logger {
  error: any,
  warn: any,
  info: any,
  debug: any,
  verbose: any
}
export const logger: any = {
  error: (_arg: any, ...optional: any[]) => console.error("error", _arg, ...optional),
  info: (_arg: any, ...optional: any[]) => showConsole && console.log("info", _arg, ...optional),
  warn: (_arg: any, ...optional: any[]) => showConsole && console.warn("warn", _arg, ...optional),
  debug: (_arg: any, ...optional: any[]) => showConsole && console.log("debug", _arg, ...optional),
  verbose: (_arg: any, ...optional: any[]) => showConsole && console.log("debug", _arg, ...optional),
};

