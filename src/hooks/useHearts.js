import { useState } from 'react';
import { HEART_COUNT } from '../constants/messages';

export const useHearts = () => {
    const [hearts, setHearts] = useState([]);

    const generateHearts = () => {
        const heartArray = [];
        for (let i = 0; i < HEART_COUNT; i++) {
            heartArray.push({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 2,
                duration: 3 + Math.random() * 2,
                size: 20 + Math.random() * 40
            });
        }
        setHearts(heartArray);
    };

    return { hearts, generateHearts };
};
