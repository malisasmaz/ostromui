import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "../Create/create.css";
import { handleValidation } from "../../Utils/utils";

export default function Update() {
    let history = useHistory();
    const [info, setInfo] = useState({ id: null, firstName: "", lastName: "", dateOfBirth: "", courseName: "", hours: "", price: "" })

    useEffect(() => {
        setInfo({
            id: localStorage.getItem('ID'),
            firstName: localStorage.getItem('First Name'),
            lastName: localStorage.getItem('Last Name'),
            dateOfBirth: new Date(localStorage.getItem('Date of Birth')).toISOString().substring(0, 10),
            courseName: localStorage.getItem('Course Name'),
            hours: localStorage.getItem('Hours'),
            price: localStorage.getItem('Price')?.replace(/,/g, '')
        })
    }, []);

    const updateAPIData = () => {
        if (handleValidation(info)) {
            axios.put(process.env.REACT_APP_API_PATH + `/${info.id}`, {
                firstName: info.firstName,
                lastName: info.lastName,
                dateOfBirth: info.dateOfBirth,
                courseName: info.courseName,
                hours: info.hours,
                price: info.price
            }).then(() => {
                history.push('/')
            })
        }
    }

    return (
        <div data-testid='div_table'>
            <table data-testid='table_update' className='table_create'>
                <thead>
                    <tr className="tr_create">
                        <td className="td_create" colSpan="6">
                            <h2 data-testid='h2_update' className="h2_create">Update Student</h2>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr_create">
                        <td className="td_create">
                            <label data-testid='label_firstName'>First Name</label>
                            <input
                                placeholder='First Name'
                                value={info.firstName}
                                onChange={(e) => setInfo({ ...info, firstName: e.target.value })}>
                            </input>
                        </td>
                        <td className="td_create">
                            <label data-testid='label_lastName'>Last Name</label>
                            <input
                                placeholder='Last Name'
                                value={info.lastName}
                                onChange={(e) => setInfo({ ...info, lastName: e.target.value })}>
                            </input>
                        </td>
                        <td className="td_create">
                            <label data-testid='label_dateOfBirth'>Date Of Birth</label>
                            <input
                                type='date'
                                placeholder='Date of Birth'
                                label='Date of Birth'
                                value={info.dateOfBirth}
                                onChange={(e) => setInfo({ ...info, dateOfBirth: e.target.value })}>
                            </input>
                        </td>
                        <td className="td_create">
                            <label data-testid='label_courseName'>Course Name</label>
                            <input
                                placeholder='Course Name'
                                value={info.courseName}
                                onChange={(e) => setInfo({ ...info, courseName: e.target.value })}>
                            </input>
                        </td>
                        <td className="td_create">
                            <label data-testid='label_hours'>Hours</label>
                            <input
                                type='number'
                                min='1'
                                placeholder='Hours'
                                value={info.hours}
                                onChange={(e) => setInfo({ ...info, hours: e.target.value })}>
                            </input>
                        </td>
                        <td className="td_create">
                            <label data-testid='label_price'>Price €</label>
                            <input
                                type='number'
                                min='0.00'
                                placeholder='Price'
                                value={info.price}
                                onChange={(e) => setInfo({ ...info, price: e.target.value })}>
                            </input>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className='tr_save'>
                        <td colSpan="6" className='td_save'>
                            <button data-testid='button_save' className='button_save' type='submit' onClick={updateAPIData}>Save</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}
