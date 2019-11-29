import React, { useState } from 'react';
import { ImageFormComponent } from "./form/form-container";
import { CanvasImagesContainer } from "./canvas/image-container";

export function MainContainer() {
    const [ imageUrl, setImageUrl ] = useState(null);

    const handleSubmit = value => {
        setImageUrl(value);
    };

    return (
        <>
            <ImageFormComponent onsubmit={ handleSubmit } />
            {
               imageUrl && <CanvasImagesContainer imageUrl={ imageUrl } />
            }
        </>
    )
}
