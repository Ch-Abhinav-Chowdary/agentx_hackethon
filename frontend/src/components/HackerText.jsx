import React, { useState, useEffect, useRef } from 'react';
import './HackerText.css';

const HackerText = ({ text, className = '' }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    const scramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        scramble();
        // Optional: Scramble periodically or just once on mount
        // const loop = setInterval(scramble, 5000);
        // return () => clearInterval(loop);
    }, [text]);

    return (
        <span
            className={`hacker-text ${className}`}
            onMouseEnter={scramble}
        >
            {displayText}
        </span>
    );
};

export default HackerText;
