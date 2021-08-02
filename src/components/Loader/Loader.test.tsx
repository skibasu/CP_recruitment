import React from "react";
import Loader from "./Loader";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("If loader has image", () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId("loader");
    expect(loader).toBeInTheDocument();
});
