import React, { useState, useCallback } from 'react';
import { InputComponent } from "./input";
import { IsValidUrl } from "./validation";
import { SubmitButtonComponent } from "./submit-button";

export const ImageFormComponent = React.memo(({onsubmit}) => {
    const [ formState, setFormState ] = useState({
        value: null,
        isValid: null,
        submitted: false,
        dirty: false
    });

    const handleSubmit = useCallback(() => {
        setFormState({
            ...formState,
            submitted: true,
            dirty: false
        });
        onsubmit(formState.value);
    }, [formState, onsubmit]);

    const handleChanges = useCallback((value) => {
        setFormState({
            ...formState,
            value,
            valid: IsValidUrl(value),
            dirty: true
        });
    }, [formState]);

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
});
