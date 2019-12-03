import React  from 'react';

export const PredictionTableComponent = ({headers, content}) => {
    const setTableCells = prediction => {
        return Object.keys(prediction).map((key, index) =>
            <td key={index} className='border px-4 py-2'>{ prediction[key] }</td>
        )
    };

    const setHeaders = headers => {
        return headers && headers.map((header, i) => <th key={i} className="text-left py-2">{header}</th>)
    };

    return (
        <table className="my-1 table-auto w-full">
            <thead><tr>{ setHeaders(headers) }</tr></thead>
            <tbody>{ content.map((data, i) => <tr key={i}>{ setTableCells(data) }</tr>) }</tbody>
        </table>
    )
};
