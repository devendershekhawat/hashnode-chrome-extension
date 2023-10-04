import React from 'react';

export default function CircleSVG({ className }: { className?: string }) {
    return (
        <svg width="6" className={className} height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#CBD5E1"/>
        </svg>
    );
}