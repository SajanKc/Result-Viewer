import React from 'react';

function StudentDetails(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.rollNum}</td>
            <td>{props.name}</td>
            <td>{props.cprogramming}</td>
            <td>{props.financialAccounting}</td>
            <td>{props.englishII}</td>
            <td>{props.mathematicsII}</td>
            <td>{props.microprocessor}</td>
            <td>{props.total}</td>
        </tr>
    )
}

export default StudentDetails;