import React from 'react';

export const FallingHearts = ({ hearts }) => {
    return (
        <>
            {hearts.map(heart => (
                <div
                    key={heart.id}
                    className="falling-heart"
                    style={{
                        left: `${heart.left}%`,
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`,
                        '--heart-size': `${heart.size}px`
                    }}
                >
                    ❤️
                </div>
            ))}
        </>
    );
};
