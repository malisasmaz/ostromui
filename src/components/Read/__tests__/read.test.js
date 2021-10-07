import renderer from "react-test-renderer";
import {render} from "@testing-library/react";
import Read from "../read";

describe("Component: Read", ()=>{

    const renderResult  = render(<Read/>);

    expect(renderResult.getByTestId("div_table")).toBeTruthy();
    expect(renderResult.getByTestId("table_read")).toBeTruthy();
    expect(renderResult.getByTestId("table_body")).toBeTruthy();

    const addButton = renderResult.getByTestId("button_add");
    expect(addButton.textContent).toBe("Add Student");

    it("Create matches snapshot", ()=>{
        const tree = renderer.create(<Read/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})