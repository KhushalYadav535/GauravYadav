import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const cardsRef = useRef([]);
    const progressFillRef = useRef(null);
    const progressDotRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const totalWidth = containerRef.current.scrollWidth - window.innerWidth;

            const scrollTween = gsap.to(containerRef.current, {
                x: () => -totalWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            if (progressFillRef.current && progressDotRef.current) {
                gsap.fromTo(progressFillRef.current,
                    { width: "0%" },
                    {
                        width: "100%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top top",
                            end: () => `+=${totalWidth}`,
                            scrub: true,
                        }
                    });

                gsap.fromTo(progressDotRef.current,
                    { xPercent: 0 },
                    {
                        xPercent: 100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top top",
                            end: () => `+=${totalWidth}`,
                            scrub: true,
                        }
                    });
            }

            cardsRef.current.forEach((card) => {
                if (!card) return;
                gsap.fromTo(card,
                    { scale: 0.94, opacity: 0.45, filter: "blur(6px)" },
                    {
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)",
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: card,
                            containerAnimation: scrollTween,
                            start: "left center",
                            end: "right center",
                            scrub: true,
                        }
                    });

                const glow = card.querySelector(".milestone-glow");
                if (glow) {
                    gsap.fromTo(glow,
                        { opacity: 0.05 },
                        {
                            opacity: 0.3,
                            scrollTrigger: {
                                trigger: card,
                                containerAnimation: scrollTween,
                                start: "left center",
                                end: "right center",
                                scrub: true,
                            }
                        });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const milestones = [
        {
            title: "High School",
            location: "India",
            year: "2017",
            desc: "Completed secondary education with distinction in sciences.",
            color: "from-blue-500 to-cyan-400",
            tag: "Foundation"
        },
        {
            title: "BTC",
            location: "India",
            year: "2017-2019",
            desc: "Basic Training Certificate, building foundational skills.",
            color: "from-cyan-400 to-teal-400",
            tag: "Training"
        },
        {
            title: "Admission to KSMU",
            location: "Kazan, Russia",
            year: "2019",
            desc: "Started the journey at Kazan State Medical University.",
            color: "from-teal-400 to-green-400",
            tag: "Breakthrough"
        },
        {
            title: "Clinical Rotations",
            location: "Russia",
            year: "2022-2024",
            desc: "Hands-on experience in various medical departments.",
            color: "from-green-400 to-emerald-500",
            tag: "Experience"
        },
        {
            title: "MBBS Graduation",
            location: "Kazan, Russia",
            year: "2025",
            desc: "Successfully graduated as a Doctor of Medicine.",
            color: "from-emerald-500 to-neonBlue",
            tag: "Achievement"
        }
    ];

    return (
        <section id="education" className="relative h-screen overflow-hidden bg-deepSpace" ref={sectionRef}>
            <div className="absolute inset-0 opacity-60 pointer-events-none">
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-neonBlue/10 via-transparent to-transparent" />
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/5 via-transparent to-transparent" />
                <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
            </div>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80%] lg:w-[60%] max-w-3xl z-20 hidden md:block">
                <div className="relative h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div ref={progressFillRef} className="absolute left-0 top-0 h-full bg-gradient-to-r from-neonTeal via-neonBlue to-white shadow-[0_0_20px_rgba(0,243,255,0.6)]" />
                    <div ref={progressDotRef} className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] border-2 border-neonBlue" />
                </div>
                <div className="text-xs uppercase tracking-[0.4em] text-gray-500 mt-2 text-center">Journey progress</div>
            </div>

            <div className="absolute top-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-12 z-10 w-[90%] max-w-xl glass-card border border-white/10 backdrop-blur-2xl p-8 shadow-[0_30px_120px_rgba(4,5,20,0.6)]">
                <p className="tag-pill mb-4">Timeline of growth</p>
                <h2 className="text-4xl font-bold text-white leading-snug">
                    Education <span className="text-neonBlue">Journey</span>
                </h2>
                <p className="text-gray-300 mt-3 text-base md:text-lg">
                    Scroll horizontally to witness the milestones that shaped clinical judgement, empathy, and leadership.
                </p>

                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-gray-400 mt-6">
                    <span className="h-px flex-1 bg-white/10" />
                    <ArrowRight className="w-4 h-4 text-neonBlue" />
                    <span>Swipe</span>
                    <span className="h-px flex-1 bg-white/10" />
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 z-10 flex flex-wrap gap-6 text-gray-400">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Total Training</p>
                    <p className="text-2xl font-semibold text-white">6+ Years</p>
                </div>
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Countries</p>
                    <p className="text-2xl font-semibold text-white">India · Russia</p>
                </div>
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Clinical Rotations</p>
                    <p className="text-2xl font-semibold text-white">15 Departments</p>
                </div>
            </div>

            <div className="h-full flex items-center pl-10 md:pl-24" ref={containerRef}>
                <div className="flex gap-12 pr-20">
                    {milestones.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="milestone-card w-[350px] md:w-[450px] h-[500px] glass-card relative flex flex-col justify-end p-8 group overflow-hidden shrink-0"
                        >
                            <div className={`milestone-glow absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 transition-opacity duration-500`} />

                            <div className="absolute top-8 right-8 text-6xl font-bold text-white/5 select-none">
                                {item.year}
                            </div>

                            <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-neonBlue">
                                        <Calendar className="w-3 h-3" /> {item.year}
                                    </div>
                                    <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] tracking-[0.3em] text-white/70 uppercase">
                                        {item.tag}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>

                                <div className="flex items-center gap-2 text-gray-400 mb-6">
                                    <MapPin className="w-4 h-4 text-neonTeal" />
                                    <span>{item.location}</span>
                                </div>

                                <p className="text-gray-300 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonBlue to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
