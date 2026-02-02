import React from 'react';
import { NO_MESSAGES } from '../constants/messages';

export const ButtonsContainer = ({
    yesSize,
    noPosition,
    noClicks,
    onYesClick,
    onNoClick
}) => {
    return (
        <div className="buttons-container">
            <button
                id="yesBtn"
                onClick={onYesClick}
                style={{ '--yes-size': yesSize }}
            >
                Sì! 💕
            </button>
            <button
                id="noBtn"
                onClick={onNoClick}
                style={{
                    left: noPosition.x || 'calc(50% + 100px)',
                    top: noPosition.y || '60%',
                    transform: noPosition.x ? 'none' : 'translateX(0)'
                }}
            >
                {NO_MESSAGES[Math.min(noClicks, NO_MESSAGES.length - 1)]}
            </button>
        </div>
    );
};
