/**
 * Captures the last unhandled SSR error so server.ts can surface it
 * when h3 swallows an exception into a generic JSON 500 response.
 */

let lastError: unknown = undefined;

if (typeof globalThis !== "undefined") {
  const prev = (globalThis as Record<string, unknown>).__ssrErrorHandler as
    | ((e: unknown) => void)
    | undefined;

  (globalThis as Record<string, unknown>).__ssrErrorHandler = (error: unknown) => {
    lastError = error;
    prev?.(error);
  };
}

export function consumeLastCapturedError(): unknown {
  const err = lastError;
  lastError = undefined;
  return err;
}
