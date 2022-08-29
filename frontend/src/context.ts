import { getOsEnv, toBool } from "./utils/common";

interface Env {
  apiHost: string,
  logging: boolean,
}

export const env: Env = {
  apiHost: getOsEnv("API_HOST", "https://localhost:7165"),
  logging: toBool(getOsEnv("LOGGING")),
};