import renderer from "react-test-renderer";
import {render} from "@testing-library/react";
import Update from "../update";

describe("Component: Update", ()=>{

    const renderResult  = render(<Update/>);

    expect(renderResult.getByTestId("div_table")).toBeTruthy();
    expect(renderResult.getByTestId("table_update")).toBeTruthy();
    expect(renderResult.getByTestId("h2_update")).toBeTruthy();
    expect(renderResult.getByTestId("label_firstName")).toBeTruthy();
    expect(renderResult.getByTestId("label_lastName")).toBeTruthy();
    expect(renderResult.getByTestId("label_dateOfBirth")).toBeTruthy();
    expect(renderResult.getByTestId("label_courseName")).toBeTruthy();
    expect(renderResult.getByTestId("label_price")).toBeTruthy();

    const addButton = renderResult.getByTestId("button_save");
    expect(addButton.textContent).toBe("Save");

    it("Create matches snapshot", ()=>{
        const tree = renderer.create(<Update/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})