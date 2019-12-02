import React from 'react';

export const SubmitButtonComponent = ({disabled, onClick, pending}) => {
    const buttonClasses = [
        'mx-3',
        'focus:outline-none',
        'focus:outline-none',
        'bg-transparent',
        'hover:bg-blue-500',
        'text-blue-700',
        'font-semibold',
        'hover:text-white',
        'py-2',
        'px-4',
        'border',
        'border-blue-500',
        'hover:border-transparent',
        'rounded',
        `${disabled || pending ? 'opacity-50 cursor-not-allowed' : ''}`
    ];

    return <button
        disabled={ disabled || pending }
        onClick={ onClick }
        className={ buttonClasses.join(' ') }>Submit</button>
};
