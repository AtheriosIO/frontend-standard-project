import { afterEach } from "node:test";
import { afterAll, beforeAll, vi } from "vitest";
import { server } from "./test/server/server";

beforeAll(() => {
  window.scrollTo = vi.fn;
  server.listen({ onUnhandledRequest: "error" });
});

afterAll(() => {
  server.close();
  vi.resetAllMocks();
});

afterEach(() => {
  server.resetHandlers();
  vi.clearAllMocks();
});
