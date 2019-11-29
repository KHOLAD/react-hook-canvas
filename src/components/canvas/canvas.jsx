import React, { useEffect, useRef } from 'react';
const CORS_EVERYWHERE = 'https://cors-anywhere.herokuapp.com/';

export function CanvasImageComponent({imageUrl}) {
    const canvasRef = useRef(null);
    const image_container = new Image();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvasRef.current['getContext']("2d");
        context.clearRect(0,0, image_container.width, image_container.height);

        image_container.crossOrigin = "anonymous";
        image_container.src = CORS_EVERYWHERE + imageUrl;

        canvas.width = image_container.width;
        canvas.height = image_container.height;

        context.drawImage(image_container, 0, 0);
    }, [imageUrl, image_container]);

    return <canvas ref={canvasRef} />;
}

