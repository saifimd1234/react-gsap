"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ToPage() {
    // 1. Create a ref for the element you want to animate
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 2. Add the animation logic inside useEffect
        gsap.to(boxRef.current, {
            x: 200,            // Move 200px to the right
            rotation: 360,    // Rotate 360 degrees
            duration: 2,      // Animation lasts 2 seconds
            repeat: -1,       // Repeat infinitely
            yoyo: true,       // Move back and forth
            ease: "power2.inOut"
        });
    }, []);

    return (
        <div className="min-h-screen p-10 space-y-10 bg-slate-900 text-white">
            <h2 className="text-3xl font-bold text-blue-400">GSAP To Demo</h2>

            {/* 3. Attach the ref to the div */}
            <div
                ref={boxRef}
                className="w-24 h-24 bg-red-500 rounded-lg shadow-lg"
            ></div>

            <p className="text-slate-400">
                This box is moving using <code>gsap.to()</code>
            </p>
        </div>
    );
}