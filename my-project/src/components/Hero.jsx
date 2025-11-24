import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Award, Microscope, ShieldCheck } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const Hero3D = () => {
    return (
        <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <Sphere args={[1, 100, 200]} scale={1.5} position={[2, 0, -2]}>
                    <MeshDistortMaterial
                        color="#00f3ff"
                        attach="material"
                        distort={0.5}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </Sphere>
            </Float>
        </Canvas>
    );
};

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const heroStats = [
        { value: "500+", label: "Patients Assisted", detail: "Across clinical rotations" },
        { value: "15", label: "Departments", detail: "Hands-on exposure" },
        { value: "3", label: "Languages", detail: "Hindi • English • Russian" }
    ];

    const focusAreas = [
        {
            title: "Preventive Medicine",
            icon: <ShieldCheck className="w-5 h-5 text-neonBlue" />,
            desc: "Community health programs centered on early detection."
        },
        {
            title: "Clinical Research",
            icon: <Microscope className="w-5 h-5 text-neonBlue" />,
            desc: "Investigating emerging treatment methodologies."
        },
        {
            title: "Patient Advocacy",
            icon: <Award className="w-5 h-5 text-neonBlue" />,
            desc: "Human-first approach with measurable outcomes."
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.5
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden" ref={containerRef}>
            <div className="absolute inset-0 opacity-50">
                <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-gradient-to-l from-deepSpace via-transparent to-transparent" />
                <div className="absolute right-[-10%] top-1/4 w-[520px] h-[520px] rounded-full bg-neonBlue/25 blur-[160px]" />
            </div>
            <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-70 md:opacity-100 pointer-events-none">
                <Hero3D />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
                    <div ref={textRef}>
                    <div className="inline-block px-4 py-2 rounded-full border border-neonBlue/30 bg-neonBlue/10 backdrop-blur-md mb-6">
                        <span className="text-neonBlue font-medium tracking-wider text-sm">MBBS GRADUATE • KAZAN STATE MEDICAL UNIVERSITY</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonTeal drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                            Dr. Gaurav Yadav
                        </span>
                    </h1>

                        <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                            Bridging the gap between advanced medical science and compassionate patient care.
                            Dedicated to a futuristic approach in healthcare where empathy meets innovation.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <a href="#about" className="group relative px-8 py-4 bg-neonBlue text-deepSpace font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_28px_rgba(0,243,255,0.55)]">
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore My Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </a>

                            <a href="#contact" className="px-8 py-4 border border-white/20 hover:border-neonBlue/50 hover:bg-neonBlue/10 rounded-full font-medium transition-all backdrop-blur-md">
                                Contact Me
                            </a>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-3">
                            {heroStats.map((stat) => (
                                <div key={stat.label} className="glass-card p-4 text-center border border-white/10 hover:border-neonBlue/40 transition-colors">
                                    <p className="text-3xl font-bold text-neonBlue">{stat.value}</p>
                                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-2">{stat.label}</p>
                                    <p className="text-[11px] text-gray-500 mt-1">{stat.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-6 md:p-8 bg-white/10 border-white/10 shadow-[0_40px_120px_rgba(4,5,20,0.65)]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-neonBlue to-neonTeal flex items-center justify-center text-deepSpace font-bold">
                                DY
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Primary Focus</p>
                                <p className="font-semibold text-white">Holistic Healthcare</p>
                            </div>
                        </div>

                        <p className="text-gray-200 leading-relaxed mb-6">
                            “Healthcare is rapidly evolving; I believe the future belongs to practitioners who can blend clinical excellence with technological empathy.”
                        </p>

                        <div className="space-y-4">
                            {focusAreas.map((focus) => (
                                <div key={focus.title} className="flex gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="w-10 h-10 rounded-2xl bg-deepSpace/60 flex items-center justify-center">
                                        {focus.icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">{focus.title}</p>
                                        <p className="text-sm text-gray-400">{focus.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-neonBlue rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
