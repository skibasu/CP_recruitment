import React from "react";
import Body from "./Body";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Initial heading has expected text", () => {
    const { getByTestId } = render(<Body />);
    const title = getByTestId("heading");
    expect(title).toBeInTheDocument();
});
