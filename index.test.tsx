import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Histogram } from "./index";

test("example", () => {
    render(<Histogram />);
    expect(1).toBe(1);
});
