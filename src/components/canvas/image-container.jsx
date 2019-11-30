import React  from 'react';
import { CanvasImageComponent } from "./canvas";
import { TensorPredictionComponent } from "./tensor";

export function CanvasImagesContainer({imageUrl}) {
    return (
        <div className="container m-5">
            <TensorPredictionComponent />
            <CanvasImageComponent imageUrl={imageUrl} />
        </div>
    )
}
