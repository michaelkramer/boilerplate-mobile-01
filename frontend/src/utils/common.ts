export function delay(time: number): Promise<void> {
  return new Promise((res) => setTimeout(res, time));
}

export function getOsEnv(key: string, fallback?: string): string {
  if (typeof process.env[key] === "undefined") {
    if (fallback) {
      return fallback;
    }
    return "";
  }

  return process.env[key] as string;
}

export function getOsEnvOptional(key: string): string | undefined {
  return process.env[key];
}

export function toNumber(value: string | undefined): number | undefined {
  if (typeof value === "undefined") {
    return undefined;
  }
  return parseInt(value as string, 10);
}

export function toBool(value: string | undefined): boolean {
  return value === "true";
}

export function normalizePort(port: string): number | string | boolean {
  const parsedPort = parseInt(port, 10);
  if (Number.isNaN(parsedPort)) {
    // named pipe
    return port;
  }
  if (parsedPort >= 0) {
    // port number
    return parsedPort;
  }
  return false;
}

