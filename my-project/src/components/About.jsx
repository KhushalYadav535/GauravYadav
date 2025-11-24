import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Heart, Brain, Activity, Sparkles, Users2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.2
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const education = [
        {
            year: "2019 - 2025",
            degree: "MBBS",
            institution: "Kazan State Medical University, Russia",
            desc: "Specialized in general medicine with focus on clinical diagnosis and patient care.",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            year: "2017 - 2019",
            degree: "BTC",
            institution: "India",
            desc: "Foundation in basic training certificate.",
            icon: <Activity className="w-6 h-6" />
        },
        {
            year: "Pre-2017",
            degree: "B.Sc",
            institution: "India",
            desc: "Bachelor of Science degree completing the pre-medical foundation.",
            icon: <Brain className="w-6 h-6" />
        }
    ];

    const values = [
        {
            title: "Compassion First",
            icon: <Heart className="w-6 h-6 text-neonTeal" />,
            desc: "Every treatment plan begins with listening and empathy."
        },
        {
            title: "Global Perspective",
            icon: <Users2 className="w-6 h-6 text-neonBlue" />,
            desc: "Trained with multi-cultural cohorts across India and Russia."
        },
        {
            title: "Future-Ready",
            icon: <Sparkles className="w-6 h-6 text-neonBlue" />,
            desc: "Adopting technology and research-backed practices early."
        }
    ];

    return (
        <section id="about" className="py-24 relative" ref={sectionRef}>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-24 top-24 w-72 h-72 bg-neonBlue/10 blur-[120px]" />
                <div className="absolute right-0 bottom-24 w-80 h-80 bg-neonTeal/10 blur-[140px]" />
            </div>
            <div className="container mx-auto px-6 relative">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Text Content */}
                    <div className="lg:w-1/2 sticky top-28 space-y-8">
                        <div>
                            <p className="tag-pill mb-4">Beyond the resume</p>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                <span className="text-neonBlue">About</span> Me
                            </h2>
                        </div>

                        <div className="glass-card p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neonBlue/20 blur-[50px] rounded-full group-hover:bg-neonBlue/30 transition-all duration-500" />

                            <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                                I am a dedicated medical professional with a global perspective on healthcare.
                                My journey from India to Russia has equipped me with diverse clinical experiences
                                and a robust understanding of medical sciences.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                                Passionate about integrating modern technology with traditional medical practices
                                to deliver superior patient outcomes.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {values.map((value) => (
                                <div key={value.title} className="glass-card p-5 border border-white/10 hover:border-neonBlue/40 transition-all">
                                    <div className="mb-4">{value.icon}</div>
                                    <p className="font-semibold text-white">{value.title}</p>
                                    <p className="text-sm text-gray-400 mt-2">{value.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="glass-card p-6 md:p-8 flex flex-wrap gap-6 justify-between items-center">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Years in Medicine</p>
                                <p className="text-4xl font-bold text-neonTeal">6+</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Cultures Immersed</p>
                                <p className="text-4xl font-bold text-neonTeal">2</p>
                            </div>
                            <div className="text-sm text-gray-400 max-w-sm">
                                Continuously learning and collaborating with interdisciplinary teams to deliver patient-first care.
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12 pl-8 md:pl-12 py-4">
                            {education.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    ref={el => cardsRef.current[index] = el}
                                >
                                    <div className="absolute -left-[41px] md:-left-[57px] top-0 w-10 h-10 rounded-full bg-deepSpace border-2 border-neonBlue flex items-center justify-center text-neonBlue shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                                        {item.icon}
                                    </div>

                                    <div className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300 border border-white/10">
                                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                            <span className="text-neonTeal font-mono text-sm">{item.year}</span>
                                            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Milestone</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{item.degree}</h3>
                                        <h4 className="text-gray-400 text-sm mb-4">{item.institution}</h4>
                                        <p className="text-gray-300 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
