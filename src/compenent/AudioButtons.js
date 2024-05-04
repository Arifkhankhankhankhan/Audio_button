import React from 'react';
 // Import your CSS file
import applauseAudio from './audio/applause.mp3'; // Import your audio files
import booAudio from './audio/boo.mp3';
import gaspAudio from './audio/gasp.mp3';
import tadaAudio from './audio/tada.mp3';
import victoryAudio from './audio/victory.mp3';
import wrongAudio from './audio/wrong.mp3';

const AudioButtons = () => {
    const playAudio = (audioElement) => {
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.play();
    };

    return (
        <div className="buttons">
            <button onClick={() => playAudio(new Audio(applauseAudio))}>Applause</button>
            <button onClick={() => playAudio(new Audio(booAudio))}>Boo</button>
            <button onClick={() => playAudio(new Audio(gaspAudio))}>Gasp</button>
            <button onClick={() => playAudio(new Audio(tadaAudio))}>Tada</button>
            <button onClick={() => playAudio(new Audio(victoryAudio))}>Victory</button>
            <button onClick={() => playAudio(new Audio(wrongAudio))}>Wrong</button>
        </div>
    );
};

export default AudioButtons;

