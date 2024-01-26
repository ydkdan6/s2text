import React,  {useState} from "react";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import '../style/main.css';

const SpeechRecognitionComponent = () =>  {
    const { transcript, resetTranscript} =  useSpeechRecognition();

    const handleCopy = () => {
        //created a text area temporarily to hold the text
        const textContainer = document.createElement('textarea');

        //initialized the value fot the text area to the transcript state
        textContainer.value = transcript;

        //Appending the text area to the document
        document.body.appendChild(textContainer);

        //the select method to efficiently slect the whole text in the text area
        textContainer.select();

        //a command executed to copy the whole text to clipboard
        document.execCommand('copy');

        //remooving the temporary text area
        document.body.removeChild(textContainer);

        //Alert if text was copied successfully!
        alert("Text Copied Successfully!");
    }

    return (
        <div className="container">
            <div className="blob"></div>
            <div className="blob1"></div>
            <div className="blob2"></div>
            <h1>A Speech to Text System</h1>
            <p>{transcript}</p>
            <button onClick={SpeechRecognition.startListening} className="btn">Start Recording</button>
            <button onClick={SpeechRecognition.stopListening} className="btn">Stop Recording</button>
            <button onClick={resetTranscript} className="btn">Reset</button>  
            <button onClick={handleCopy} className="btn">Copy</button>  
        </div>
    );
};

export default SpeechRecognitionComponent;