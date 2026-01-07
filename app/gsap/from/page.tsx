"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FromPage() {
    const box1Ref = useRef<HTMLDivElement>(null);
    const box2Ref = useRef<HTMLDivElement>(null);
    const headingRefs = useRef<HTMLHeadingElement[]>([]);

    useEffect(() => {
        gsap.to(box1Ref.current, {
            x: 500,
            duration: 2,
            delay: 1,
            rotation: 90,
            backgroundColor: "blue",
            borderRadius: "100%",
            repeat: 1,
        });

        gsap.from(box2Ref.current, {
            x: 500,
            duration: 2,
            delay: 1,
            borderRadius: "0.1%",
            repeat: -1,
            yoyo: true,
        });

        gsap.from(headingRefs.current, {
            opacity: 0,
            y: 20,
            duration: 5,
            delay: 1,
            stagger: -0.3,
        });
    }, []);

    return (
        <div className="min-h-screen p-10 space-y-10 bg-slate-900 text-white">
            <h2 className="text-2xl font-bold">GSAP From / To Demo</h2>

            <div ref={box1Ref} className="w-34 h-34 bg-red-500 rounded-md" />

            <div ref={box2Ref} className="w-24 h-24 bg-green-500 rounded-md" />

            <div className="space-y-2">
                {["Hello GSAP", "Learning From()", "Next.js + Tailwind"].map(
                    (text, index) => (
                        <h1
                            key={index}
                            ref={(el) => {
                                if (el) headingRefs.current[index] = el;
                            }}
                            className="text-xl font-semibold"
                        >
                            {text}
                        </h1>
                    )
                )}
            </div>
        </div>
    );
}
