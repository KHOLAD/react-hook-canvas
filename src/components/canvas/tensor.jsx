import React, { useState, useEffect } from 'react';
import {LoadingComponent} from "../loader/loader";
import * as mobilenet from '@tensorflow-models/mobilenet';

export function TensorPredictionComponent({canvas}) {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState({ className: null, probability: null });

    useEffect(() => {
        (async () => {
            if (!canvas) { return }
            setLoading(true);
            // Load the model.
            const model = await mobilenet.load();
            // Classify the image.
            const predictions = await model.classify(canvas);
            console.log('Predictions:', predictions);
            // Sets prediction results
            handleResults(predictions);
            // Get the Logs.
            const logits = model.infer(canvas);
            logits.print();
            // Get the embedding.
            const embedding = model.infer(canvas, true);
            embedding.print();

            setLoading(false);
        })()
    }, [canvas]);

    const handleResults = (predictions) => {
        const result = predictions.map(p => ({
            ...p,
            probability: Math.round(p.probability * 100) / 100
        })).reduce((acc, cur) => (acc.probability > cur.probability) ? acc : cur);
        setResult(result);
    };

    return (
        <>
            { loading && <LoadingComponent /> }
            {
                !loading && result.className && result.probability &&
                <div className="my-5 px-6 py-4 rounded overflow-hidden shadow-lg">
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
