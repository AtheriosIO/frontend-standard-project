import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "./App";

describe(`${App.name}`, async () => {
  test(`${App.name} should render`, () => {
    const renderedElement = render(<App />);
    expect(renderedElement).toBeDefined();
  });
});
