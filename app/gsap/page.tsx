import Link from "next/link";

export default function GsapHome() {
    const links = [
        { name: "GSAP To()", href: "/gsap/to" },
        { name: "GSAP From()", href: "/gsap/from" },
        { name: "GSAP FromTo()", href: "/gsap/fromTo" },
        { name: "ScrollTrigger", href: "/gsap/scroll-trigger" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-900 text-white">
            <h1 className="text-3xl font-bold">GSAP Learning Playground</h1>

            <div className="flex flex-col gap-4">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="px-6 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
