import React, { useState }  from 'react';
import { CanvasImageComponent } from "./canvas";
import { TensorPredictionComponent } from "./tensor";

export function CanvasImagesContainer({imageUrl}) {
    const [canvas, setCanvas] = useState(null);

    return (
        <div className="container m-5">
            <TensorPredictionComponent canvas={canvas} />
            <CanvasImageComponent imageUrl={imageUrl} getCanvas={setCanvas} />
        </div>
    )
}
