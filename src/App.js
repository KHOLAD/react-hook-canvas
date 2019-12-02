import React, {useCallback, useState} from 'react';
import './App.css';
import {ImageFormComponent} from "./components/form/form-container";
import {CanvasImagesContainer} from "./components/canvas/image-container";

function App() {
    const [ imageUrl, setImageUrl ] = useState(null);

    const handleSubmit = useCallback((imageUrl) => {
        setImageUrl(imageUrl)
    }, []);

    return (
        <div className="m-10 flex flex-col items-center flex container mx-auto">
            <h1 className="m-8 font-bold">Whats on the image?</h1>

            <ImageFormComponent onsubmit={ handleSubmit } />
            { imageUrl && <CanvasImagesContainer imageUrl={ imageUrl } /> }
        </div>
    );
}

export default App;
