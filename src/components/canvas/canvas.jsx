import React, { useEffect, useRef } from 'react';
const CORS_EVERYWHERE = 'https://cors-anywhere.herokuapp.com/';

export function CanvasImageComponent({imageUrl, onChange}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const image_container = new Image();

        const canvas = canvasRef.current;
        const context = canvasRef.current['getContext']("2d");

        image_container.crossOrigin = "anonymous";
        image_container.src = CORS_EVERYWHERE + imageUrl;

        image_container.onload = () => {
            canvas.width = image_container.width;
            canvas.height = image_container.height;
            // Preview image
            context.drawImage(image_container, 0, 0);
            // Emit image data
            const imageData = context.getImageData(
                image_container.x,
                image_container.y,
                image_container.width,
                image_container.height
            );
            onChange(imageData);
        };
    }, [imageUrl, onChange]);

    return <canvas ref={canvasRef} />;
}

