import renderer from "react-test-renderer";
import {render} from "@testing-library/react";
import Create from "../create";

describe("Component: Create", ()=>{

    const renderResult  = render(<Create/>);

    expect(renderResult.getByTestId("div_table")).toBeTruthy();
    expect(renderResult.getByTestId("table_create")).toBeTruthy();
    expect(renderResult.getByTestId("h2_create")).toBeTruthy();
    expect(renderResult.getByTestId("label_firstName")).toBeTruthy();
    expect(renderResult.getByTestId("label_lastName")).toBeTruthy();
    expect(renderResult.getByTestId("label_dateOfBirth")).toBeTruthy();
    expect(renderResult.getByTestId("label_courseName")).toBeTruthy();
    expect(renderResult.getByTestId("label_price")).toBeTruthy();

    const addButton = renderResult.getByTestId("button_save");
    expect(addButton.textContent).toBe("Save");

    it("Create matches snapshot", ()=>{
        const tree = renderer.create(<Create/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})