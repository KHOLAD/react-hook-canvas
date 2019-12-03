import React, {useCallback, useState} from 'react';
import './App.css';
import {ImageFormComponent} from "./components/form/form-container";
import {RandomImageComponent} from "./components/random";
import {TensorPredictionComponent} from "./components/canvas/tensor";
import {CanvasImageComponent} from "./components/canvas/canvas";

function App() {
    const [ imageUrl, setImageUrl ] = useState(null);
    const [ imageData, setImageData ] = useState(null);

    const handleImageChange = useCallback((imageData) => {
        setImageData(imageData)
    }, []);

    const handleSubmit = useCallback((imageUrl) => {
        setImageUrl(imageUrl)
    }, []);

    return (
        <div className="m-10 flex flex-col items-center flex container mx-auto">
            <h1 className="m-8 font-bold">Whats on the image?</h1>
            <RandomImageComponent handleClick={ handleSubmit } />

            <ImageFormComponent onsubmit={ handleSubmit } />
            { imageUrl &&
                <div className="container m-5">
                    <TensorPredictionComponent imageData={ imageData } />
                    <CanvasImageComponent imageUrl={ imageUrl } onChange={ handleImageChange } />
                </div>
            }
        </div>
    );
}

export default App;
