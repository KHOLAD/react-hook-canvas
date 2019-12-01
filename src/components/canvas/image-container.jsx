import React, { useState, useCallback }  from 'react';
import { CanvasImageComponent } from "./canvas";
import { TensorPredictionComponent } from "./tensor";

export const CanvasImagesContainer = React.memo(({imageUrl}) => {
    const [imageData, setImageData] = useState(null);

    const handleImageChange = useCallback((imageData) => {
        setImageData(imageData)
    }, []);

    return (
        <div className="container m-5">
            <TensorPredictionComponent imageData={ imageData } />
            <CanvasImageComponent imageUrl={ imageUrl } onChange={ handleImageChange } />
        </div>
    )
});
