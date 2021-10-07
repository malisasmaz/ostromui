import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { handleValidation } from "../../Utils/utils";
import "./create.css";

export default function Create() {

    const [info, setInfo] = useState({ firstName: "", lastName: "", dateOfBirth: "", courseName: "", hours: "", price: "" })
    let history = useHistory();

    const postData = () => {
        if (handleValidation(info)) {
            axios.post(process.env.REACT_APP_API_PATH, {
                firstName: info.firstName,
                lastName: info.lastName,
                dateOfBirth: info.dateOfBirth,
                courseName: info.courseName,
                hours: info.hours,
                price: info.price
            }).then(() => {
                history.push('/')
            });
        }
    };

    return (
        <div data-testid='div_table'>
            <table data-testid='table_create' className='table_create'>
                <thead>
                    <tr className="tr_create">
                        <td className="td_create" colSpan="6">
                            <h2 data-testid='h2_create' className="h2_create">Add Student</h2>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr_create">
                        <td className="td_create">
                            <label data-testid='label_firstName'>First Name</label>
                            <input
                                placeholder='First Name'
                                onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
                            >
                            </input>
                        </td>
                        <td className="td_create">
                            <label data-testid='label_lastName'>Last Name</label>
                            <input
                                placeholder='Last Name'
                                onChange={(e) => setInfo({ ...info, lastName: e.target.value })}  >
                            </input>
                        </td>
                        <td className="td_create">
                            <label data-testid='label_dateOfBirth'>Date Of Birth</label>
                            <input
                                type='date'
                                placeholder='Date of Birth'
                                label='Date of Birth'
                                onChange={(e) => setInfo({ ...info, dateOfBirth: e.target.value })}>
                            </input>

                        </td>
                        <td className="td_create">
                            <label data-testid='label_courseName'>Course Name</label>
                            <input
                                placeholder='Course Name'
                                onChange={(e) => setInfo({ ...info, courseName: e.target.value })}>
                            </input>
                        </td>
                        <td className="td_create">
                            <label data-testid='label_hours'>Hours</label>
                            <input
                                type='number'
                                min='1'
                                placeholder='Hours'
                                onChange={(e) => setInfo({ ...info, hours: e.target.value })}>
                            </input>
                        </td>
                        <td className="td_create">
                            <label data-testid='label_price'>Price €</label>
                            <input
                                type='number'
                                min='0.00'
                                placeholder='Price'
                                onChange={(e) => setInfo({ ...info, price: e.target.value })}>
                            </input>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className='tr_save'>
                        <td colSpan="6" className='td_save'>
                            <button data-testid="button_save" className='button_save' type='submit' onClick={postData}>Save</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
