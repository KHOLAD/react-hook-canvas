import React, { useEffect, useRef } from 'react';
const CORS_EVERYWHERE = 'https://cors-anywhere.herokuapp.com/';

export function CanvasImageComponent({imageUrl, onChange}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const image_container = new Image();

        const canvas = canvasRef.current;
        const context = canvasRef.current['getContext']("2d");
        context.clearRect(0, 0, canvas['width'], canvas['height']);

        image_container.crossOrigin = "anonymous";
        image_container.src = CORS_EVERYWHERE + imageUrl;

        image_container.onload = () => {
            // Preview image
            const wrh = image_container.width / image_container.height;

            let new_width = canvas['width'];
            let new_height = new_width / wrh;

            if (new_height > canvas['height']) {
                new_height = canvas['height'];
                new_width = new_height * wrh;
            }

            context.drawImage(image_container, 0, 0, new_width , new_height);
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

    return <canvas width={1280} height={1280} ref={canvasRef} />;
}

