import React, { useCallback } from 'react';

export const PredictionTableComponent = React.memo(({headers, content}) => {

    const setTableCells = useCallback((prediction) => {
        return Object.keys(prediction).map((key, index) =>
            <td key={index} className='border px-4 py-2'>{ prediction[key] }</td>
        )
    },[]);

    return (
        <table className="my-1 table-auto w-full">
            <thead>
                <tr>
                    { headers && headers.map((header, i) => <th key={i} className="text-left py-2">{header}</th>) }
                </tr>
            </thead>
            <tbody>
                { content.map((data, i) => <tr key={i}>{ setTableCells(data) }</tr>) }
            </tbody>
        </table>
    )
});
