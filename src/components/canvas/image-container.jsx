import React, { useMemo } from 'react';
import {CanvasImageComponent} from "./canvas";

export function CanvasImagesContainer({imageUrl}) {
    return (
        <div className="container m-5">
            <CanvasImageComponent imageUrl={imageUrl} />
        </div>
    )
}
