import React, { useState, useCallback }  from 'react';
import { CanvasImageComponent } from "./canvas";
import { TensorPredictionComponent } from "./tensor";

export function CanvasImagesContainer({imageUrl}) {
    const [canvas, setCanvas] = useState(null);

    const handleImageChange = useCallback((imageData) => {
        setCanvas(imageData)
    }, []);

    return (
        <div className="container m-5">
            <TensorPredictionComponent canvas={ canvas } />
            <CanvasImageComponent imageUrl={imageUrl} onChange={ handleImageChange } />
        </div>
    )
}
