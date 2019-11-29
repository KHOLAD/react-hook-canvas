import React from  'react';

export const InputComponent = ({valueChange, invalid}) => {
    const inputClasses = [
        'bg-white',
        'focus:outline-none',
        'focus:outline-none',
        'border',
        'border-gray-300',
        'rounded-lg',
        'py-2',
        'px-4',
        'block',
        'w-full',
        'appearance-none',
        'leading-normal',
        `${invalid ? 'border-red-500' : ''}`
    ];

    return <input
        onChange={({target}) => valueChange(target.value)}
        className={inputClasses.join(' ')}
        type="text"
        placeholder='Image url' />
};
