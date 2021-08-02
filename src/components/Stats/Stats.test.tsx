import React from "react";
import Stats from "./Stats";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("If elements have text content", () => {
    const { getByTestId } = render(<Stats name="Player One" result={0} />);
    const name = getByTestId("title");
    const result = getByTestId("result");
    test("Name props", () => {
        expect(name).toHaveTextContent(/^\w/i);
    });
    test("Result props", () => {
        expect(result).toHaveTextContent(/^([\w ]+: \d$)/i);
    });
});
