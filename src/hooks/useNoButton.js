import { useState } from 'react';
import { YES_SIZE_INCREMENT, YES_SIZE_MAX } from '../constants/messages';

export const useNoButton = () => {
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
    const [noClicks, setNoClicks] = useState(0);
    const [yesSize, setYesSize] = useState(1);

    const moveNoButton = () => {
        const maxX = window.innerWidth - 200;
        const maxY = window.innerHeight - 100;

        setNoPosition({
            x: Math.random() * maxX,
            y: Math.random() * maxY
        });

        setNoClicks(prev => prev + 1);
        setYesSize(prev => Math.min(prev + YES_SIZE_INCREMENT, YES_SIZE_MAX));
    };

    return { noPosition, noClicks, yesSize, moveNoButton };
};
