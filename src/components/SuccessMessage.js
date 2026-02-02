import React from 'react';

export const SuccessMessage = ({ noClicks }) => {
    return (
        <div className="success-message">
            <h2>Evviva! 🎉</h2>
            <p>Sapevo che avresti detto di sì! 💖</p>
            {noClicks < 10 && (
                <video className="success-video" autoPlay muted loop>
                    <source src="/gif.mp4" type="video/mp4" />
                </video>
            )}
            {noClicks > 10 && (
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                    Click here
                </a>
            )}

            <p className="no-counter">Hai detto No {noClicks} volte</p>
        </div>
    );
};
