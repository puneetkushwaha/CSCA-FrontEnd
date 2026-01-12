import React, { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const mousePos = useRef({ x: -100, y: -100 });
    const outlinePos = useRef({ x: -100, y: -100 });
    const requestRef = useRef();

    useEffect(() => {
        const onMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Update dot immediately for responsiveness
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }

            // Check if hovering over clickable element
            const target = e.target;
            const isClickable =
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button');

            setHovered(!!isClickable);
        };

        const animateOutline = () => {
            // Smooth follow intent for outline
            const dx = mousePos.current.x - outlinePos.current.x;
            const dy = mousePos.current.y - outlinePos.current.y;

            outlinePos.current.x += dx * 0.15; // Ease factor
            outlinePos.current.y += dy * 0.15;

            if (cursorOutlineRef.current) {
                const scale = hovered ? 1.5 : 1;
                cursorOutlineRef.current.style.transform = `translate3d(${outlinePos.current.x}px, ${outlinePos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
            }

            requestRef.current = requestAnimationFrame(animateOutline);
        };

        window.addEventListener('mousemove', onMouseMove);
        requestRef.current = requestAnimationFrame(animateOutline);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, [hovered]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Main Cursor Dot */}
            <div
                ref={cursorDotRef}
                className={`absolute w-2 h-2 bg-red-600 rounded-full pointer-events-none transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}
                style={{ top: 0, left: 0, willChange: 'transform' }}
            />

            {/* Trailing Outline ring */}
            <div
                ref={cursorOutlineRef}
            // Removed inline styles for position, handled by ref
            />
        </div>
    );
};

export default CursorFollower;
