import React, { useState, useEffect, useCallback } from 'react';
import {LoadingComponent} from "../loader/loader";
import * as mobilenet from '@tensorflow-models/mobilenet';

export function TensorPredictionComponent({imageData}) {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({ className: null, probability: null });
    const [pending, setPending] = useState(false);

    const handleResults = useCallback(predictions => {
        const result = predictions.map(p => ({
            ...p, probability: Math.round(p.probability * 100) / 100
        })).reduce((acc, cur) => (acc.probability > cur.probability) ? acc : cur);
        setResult(result);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!imageData) { return }

        if (result.className && result.probability) {
            setPending(true);
        }

        (async () => {
            // Load the model.
            const model = await mobilenet.load();
            // Classify the image.
            const predictions = await model.classify(imageData);
            console.log('Predictions:', predictions);
            // Sets prediction results
            handleResults(predictions);
            // Get the Logs.
            const logits = model.infer(imageData);
            logits.print();
            // Get the embedding.
            const embedding = model.infer(imageData, true);
            embedding.print();

            setPending(false);
        })()
    }, [imageData, handleResults]);

    return (
        <>
            { loading && <LoadingComponent /> }
            {
                !loading && result.className && result.probability &&
                <div className={`my-5 px-6 py-4 rounded overflow-hidden shadow-lg ${pending ? 'opacity-50' : ''}`}>
                    <div className="font-bold text-xl mb-2">Result</div>
                    <p className="text-gray-700 text-base">
                        {
                            result.className.toUpperCase()
                        } /
                        Probability: {
                            (result.probability * 100).toFixed(0) + "%"
                        }
                    </p>
                </div>
            }
        </>
    )
}
