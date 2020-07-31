import React from 'react';

function StudentDetails(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.rollNum}</td>
            <td>{props.name}</td>
            <td>{props.dsa}</td>
            <td>{props.java}</td>
            <td>{props.sad}</td>
            <td>{props.web}</td>
            <td>{props.stat}</td>
        </tr>
    )
}

export default StudentDetails;