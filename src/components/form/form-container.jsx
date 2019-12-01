import React, { useState } from 'react';
import { InputComponent } from "./input";
import { IsValidUrl } from "./validation";
import { SubmitButtonComponent } from "./submit-button";

export function ImageFormComponent({onsubmit}) {
    const [ formState, setFormState ] = useState({
        value: null,
        isValid: null,
        submitted: false,
        dirty: false
    });

    const handleSubmit = () => {
        setFormState({
            ...formState,
            submitted: true,
            dirty: false
        });
        onsubmit(formState.value);
    };

    const handleChanges = (value) => {
        setFormState({
            ...formState,
            value,
            valid: IsValidUrl(value),
            dirty: true
        });
    };

    return (
        <>
            <div className="container flex">
                <InputComponent
                    invalid={ formState.value && !formState.valid }
                    valueChange={ handleChanges } />
                <SubmitButtonComponent
                    onClick={ handleSubmit }
                    disabled={ !formState.valid || (formState.submitted && !formState.dirty) } />
            </div>
        </>
    );
}
