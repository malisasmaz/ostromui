import { getFormattedDate, handleValidation } from "../utils";

let info = {
    firstName: "mehmet",
    lastName: "sasmaz",
    dateOfBirth: "05/05/2021",
    courseName: "C++ Programming",
    hours: 12,
    price: 3200.50
}

describe("utility functions", () => {
    it("date is formatted correctly", () => {
        let dummyDate = new Date(2021, 11, 12)
        expect(getFormattedDate(dummyDate)).toEqual("12/12/2021");
    })

    it("firstname is not valid", () => {
        let name = "123"
        expect(handleValidation({ ...info, firstName: name })).toBe(false);
    })

    it("firstname is valid", () => {
        expect(handleValidation({ info })).toBe(false);
    })

    it("lastName is not valid", () => {
        let name = "123"
        expect(handleValidation({ ...info, lastName: name })).toBe(false);
    })

    it("lastName is valid", () => {
        expect(handleValidation({ info })).toBe(false);
    })

    it("courseName is not valid", () => {
        let name = ""
        expect(handleValidation({ ...info, courseName: name })).toBe(false);
    })

    it("courseName is valid", () => {
        expect(handleValidation({ info })).toBe(false);
    })
})