import React, { useState, useCallback } from 'react';
import { ImageFormComponent } from "./form/form-container";
import { CanvasImagesContainer } from "./canvas/image-container";

export const MainContainer = React.memo(() => {
    const [ imageUrl, setImageUrl ] = useState(null);

    const handleSubmit = useCallback((imageUrl) => {
        setImageUrl(imageUrl)
    }, []);

    return (
        <>
            <ImageFormComponent onsubmit={ handleSubmit } />
            { imageUrl && <CanvasImagesContainer imageUrl={ imageUrl } /> }
        </>
    )
});
