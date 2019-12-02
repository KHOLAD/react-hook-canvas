import React, { useState, useEffect, useCallback } from 'react';
import {LoadingComponent} from "../loader/loader";
import * as mobilenet from '@tensorflow-models/mobilenet';
import {PredictionTableComponent} from "../table";

export function TensorPredictionComponent({imageData}) {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState([]);
    const [pending, setPending] = useState(false);

    const handleResult = useCallback(predictions => {
        setResult(predictions);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!imageData) { return }

        setPending(true);

        (async () => {
            // Load the model.
            const model = await mobilenet.load();
            // Classify the image.
            const predictions = await model.classify(imageData);
            console.log('Predictions:', predictions);
            // Sets prediction results
            handleResult(predictions);
            // Get the Logs.
            const logits = model.infer(imageData);
            logits.print();
            // Get the embedding.
            const embedding = model.infer(imageData, true);
            embedding.print();

            setPending(false);
        })()
    }, [imageData, handleResult]);

    return (
        <>
            { loading && <LoadingComponent /> }
            {
                !loading && result[0].className && result[0].probability &&
                <div className={`my-5 px-6 py-4 rounded overflow-hidden shadow-lg ${pending ? 'opacity-50' : ''}`}>
                    <div className="font-bold text-xl mb-2">Result</div>
                    <p className="text-gray-700 text-base">
                        {
                            result[0].className.toUpperCase()
                        } /
                        Probability: {
                            (result[0].probability * 100).toFixed(0) + "%"
                        }
                    </p>

                    <PredictionTableComponent
                        headers={['Class name', 'Probability']}
                        content={result}
                    />
                </div>
            }
        </>
    )
}
