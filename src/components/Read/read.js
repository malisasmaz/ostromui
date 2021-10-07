import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./read.css";
import { getFormattedDate } from "../../Utils/utils";

export default function Read() {
    let history = useHistory();
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_PATH)
            .then((response) => {
                try {
                    setAPIData(response.data.data);
                } catch (error) {
                    console.error("Error ", error);
                }
            })
    }, [])
    const setData = (data) => {
        let { id, firstName, lastName, dateOfBirth, courseName, hours, price } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Date of Birth', dateOfBirth);
        localStorage.setItem('Course Name', courseName);
        localStorage.setItem('Hours', hours);
        localStorage.setItem('Price', price);
        history.push('/update')
    }
    const onDelete = (id) => {
        axios.delete(process.env.REACT_APP_API_PATH + `/${id}`)
            .then(() => {
                history.push('/')
                getData();
            })
    }
    const getData = () => {
        axios.get(process.env.REACT_APP_API_PATH)
            .then((getData) => {
                try {
                    setAPIData(getData.data.data);
                } catch (error) {
                    console.error("Error ", error);
                }
            })
    }
    return (
        <div data-testid='div_table'>
            <table data-testid='table_read' className='table_read'>
                <thead>
                    <tr className="tr_head">
                        <td className="td_head" colSpan="6">
                            <button data-testid='button_add' className='button_create_page_read' onClick={() => history.push('/create')}>Add Student</button>
                        </td>
                    </tr>
                </thead>
                <tbody data-testid='table_body' className='tbody_read'>
                    <tr className='tr_read'>
                        <th className='th_read'>FIRST NAME</th>
                        <th className='th_read'>LAST NAME</th>
                        <th className='th_read'>DATE OF BIRTH</th>
                        <th className='th_read'>COURSE NAME</th>
                        <th className='th_read'>HOURS</th>
                        <th className='th_read'>PRICE €</th>
                        <th className='th_read'></th>
                        <th className='th_read'></th>
                    </tr>
                    {APIData.map((data) => {
                        return (
                            <tr key={data.id} className='tr_read'>
                                <td className='td_read'>{data.firstName}</td>
                                <td className='td_read'>{data.lastName}</td>
                                <td className='td_read'>{getFormattedDate(new Date(data.dateOfBirth))}</td>
                                <td className='td_read'>{data.courseName}</td>
                                <td className='td_read'>{data.hours}H</td>
                                <td className='td_read'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(data.price)}</td>
                                <td className='td_read'>
                                    <button className="linkbutton" onClick={() => setData(data)}>Edit</button>
                                </td>
                                <td className='td_read'>
                                    <button className="linkbutton" onClick={() => { if (window.confirm('Delete the item?')) { onDelete(data.id) } }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}