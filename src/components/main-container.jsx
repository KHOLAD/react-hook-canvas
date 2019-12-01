import React, { useState } from 'react';
import { ImageFormComponent } from "./form/form-container";
import { CanvasImagesContainer } from "./canvas/image-container";

export function MainContainer() {
    const [ imageUrl, setImageUrl ] = useState(null);

    return (
        <>
            <ImageFormComponent onsubmit={ setImageUrl } />
            { imageUrl && <CanvasImagesContainer imageUrl={ imageUrl } /> }
        </>
    )
}
