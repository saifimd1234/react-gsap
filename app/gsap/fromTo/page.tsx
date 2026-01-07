"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FromToPage() {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            boxRef.current,
            { x: 0, opacity: 0 },
            { x: 300, opacity: 1, duration: 2 }
        );
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div
                ref={boxRef}
                className="w-24 h-24 bg-purple-500 rounded-md"
            />
        </div>
    );
}
