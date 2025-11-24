import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
    {
        title: "High School",
        location: "Prayagraj, Uttar Pradesh",
        year: "2011",
        desc: "Completed secondary education with distinction and strong grounding in core sciences.",
        tag: "Foundation"
    },
    {
        title: "Intermediate (12th)",
        location: "Prayagraj, Uttar Pradesh",
        year: "2011-2013",
        desc: "Explored advanced biology, chemistry and physics to prepare for medical entrance examinations.",
        tag: "Higher Secondary"
    },
    {
        title: "B.Sc Year 1",
        location: "Prayagraj, Uttar Pradesh",
        year: "2014-2015",
        desc: "Laid the academic base in life sciences, human physiology, and research methodology.",
        tag: "Graduation"
    },
    {
        title: "B.Sc Year 2",
        location: "Prayagraj, Uttar Pradesh",
        year: "2015-2016",
        desc: "Dove deeper into biochemistry, pathology, and lab-based diagnostic techniques.",
        tag: "Graduation"
    },
    {
        title: "B.Sc Year 3",
        location: "Prayagraj, Uttar Pradesh",
        year: "2016-2017",
        desc: "Completed the bachelor’s program with a focus on clinical applications and internships.",
        tag: "Graduation"
    },
    {
        title: "BTC",
        location: "Prayagraj, Uttar Pradesh",
        year: "2017-2019",
        desc: "Basic Training Certificate, building foundational teaching and mentorship skills.",
        tag: "Training"
    },
    {
        title: "Admission to KSMU",
        location: "Kazan, Russia",
        year: "2019",
        desc: "Started the journey at Kazan State Medical University.",
        tag: "Breakthrough"
    },
    {
        title: "Clinical Rotations",
        location: "Russia",
        year: "2022-2024",
        desc: "Hands-on experience in various medical departments.",
        tag: "Experience"
    },
    {
        title: "MBBS Graduation",
        location: "Kazan, Russia",
        year: "2025",
        desc: "Successfully graduated as a Doctor of Medicine.",
        tag: "Achievement"
    }
];

const Education = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const nodesRef = useRef([]);
    const pathRef = useRef(null);
    const pathGlowRef = useRef(null);
    const sparkRef = useRef(null);

    cardsRef.current = [];
    nodesRef.current = [];

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (pathRef.current && pathGlowRef.current) {
                gsap.fromTo(
                    pathRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        transformOrigin: "top center",
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                        }
                    }
                );

                gsap.to(pathGlowRef.current, {
                    backgroundPosition: "0% 100%",
                    repeat: -1,
                    duration: 8,
                    ease: "none"
                });
            }

            if (sparkRef.current) {
                gsap.fromTo(
                    sparkRef.current,
                    { yPercent: 0, opacity: 0 },
                    {
                        yPercent: 100,
                        opacity: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                        }
                    }
                );
            }

            cardsRef.current.forEach((card) => {
                if (!card) return;
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 80, filter: "blur(10px)" },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            end: "top 40%",
                            scrub: true,
                        }
                    }
                );
            });

            nodesRef.current.forEach((node) => {
                if (!node) return;
                gsap.fromTo(
                    node,
                    { scale: 0.6, opacity: 0.4 },
                    {
                        scale: 1.1,
                        opacity: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: node.parentElement,
                            start: "top 80%",
                            end: "top 40%",
                            scrub: true,
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="education" ref={sectionRef} className="relative py-24">
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/5" />
            </div>

            <div className="container mx-auto px-6 relative">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <p className="tag-pill mb-4 w-fit mx-auto">Timeline of growth</p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Education <span className="text-neonBlue">Journey</span>
                    </h2>
                    <p className="text-gray-400 mt-4">
                        Scroll down to trace the neon path—each milestone illuminates as you move forward.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full overflow-hidden">
                        <div ref={pathGlowRef} className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,243,255,0.1),rgba(0,255,157,0.3),rgba(255,255,255,0.1))]" />
                        <div ref={pathRef} className="absolute inset-0 bg-gradient-to-b from-neonBlue via-neonTeal to-white rounded-full origin-top scale-y-0" />
                        <div ref={sparkRef} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)] border-2 border-neonBlue" />
                    </div>

                    <div className="space-y-16">
                        {milestones.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={item.title}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className={`relative flex flex-col md:flex-row ${isLeft ? 'md:justify-start' : 'md:justify-end'} py-4`}
                                >
                                    <div className={`w-full md:w-[48%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto md:text-right'}`}>
                                        <article className="glass-card p-8 border border-white/10 hover:border-neonBlue/50 transition-all duration-300">
                                            <div className={`flex items-center justify-between text-sm text-gray-400 mb-6 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] text-neonBlue">
                                                    <Calendar className="w-4 h-4" /> {item.year}
                                                </span>
                                                <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] uppercase tracking-[0.3em]">
                                                    {item.tag}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                            <div className={`flex items-center gap-2 text-gray-400 mb-4 ${isLeft ? '' : 'md:justify-end'}`}>
                                                <MapPin className="w-4 h-4 text-neonTeal" />
                                                <span>{item.location}</span>
                                            </div>
                                            <p className="text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                                        </article>
                                    </div>

                                    <div className="md:hidden flex justify-center my-6">
                                        <span className="w-2 h-2 rounded-full bg-neonBlue shadow-[0_0_20px_rgba(0,243,255,0.8)]" />
                                    </div>

                                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span
                                            ref={(el) => (nodesRef.current[index] = el)}
                                            className="relative block w-5 h-5 rounded-full border-2 border-neonBlue bg-deepSpace shadow-[0_0_20px_rgba(0,243,255,0.6)]"
                                        >
                                            <span className="absolute inset-[3px] rounded-full bg-neonBlue/40 blur-[6px]" />
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
