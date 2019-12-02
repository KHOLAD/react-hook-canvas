import React from 'react';

export const PredictionTableComponent = ({headers, content}) => {
    return (
        <table className="my-1 table-auto w-full">
            <thead>
            <tr>
                {
                    headers && headers.map((header, i) => <th key={i} className="text-left py-2">{header}</th>)
                }
            </tr>
            </thead>
            <tbody>
            {
                content.map((data, i) => {
                    return <tr key={i}>
                        {
                             Object.keys(data).map((key, index) =>
                                 <td key={index} className='border px-4 py-2'>{ data[key] }</td>
                             )
                        }
                    </tr>
                })
            }
            </tbody>
        </table>
    )
}
