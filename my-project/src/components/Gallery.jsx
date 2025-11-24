import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        {
            url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            title: "Kazan State Medical University",
            desc: "Main Campus Building"
        },
        {
            url: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            title: "Clinical Practice",
            desc: "Hands-on training session"
        },
        {
            url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            title: "Laboratory Research",
            desc: "Advanced medical research lab"
        },
        {
            url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            title: "Patient Care",
            desc: "Dedicated to patient well-being"
        }
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section id="gallery" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neonBlue/10 blur-[200px]" />
            </div>
            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <p className="tag-pill mb-4">Snapshots</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Campus <span className="text-neonBlue">Life</span>
                    </h2>
                    <p className="text-gray-400">Glimpses of academic excellence, clinical immersion, and a thriving campus culture.</p>
                </div>

                <div className="relative max-w-6xl mx-auto h-[520px] flex flex-col lg:flex-row gap-8 perspective-1000">
                    <div className="flex-1 relative flex items-center justify-center">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 z-10"
                            >
                                <div className="w-full h-full glass-card overflow-hidden relative group">
                                    <img
                                        src={images[activeIndex].url}
                                        alt={images[activeIndex].title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deepSpace via-transparent to-transparent opacity-80" />

                                    <div className="absolute top-6 right-6 flex gap-2">
                                        <span className="px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.3em] text-gray-200">
                                            {activeIndex + 1} / {images.length}
                                        </span>
                                        <button className="p-2 rounded-full bg-white/10 border border-white/10 hover:bg-neonBlue hover:text-deepSpace transition-colors">
                                            <Maximize2 className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <h3 className="text-3xl font-bold text-white mb-2">{images[activeIndex].title}</h3>
                                        <p className="text-neonBlue">{images[activeIndex].desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="glass-card p-8 w-full lg:w-[320px] h-full self-stretch border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <Camera className="text-neonBlue" />
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Featured Frame</p>
                                <p className="font-semibold">{images[activeIndex].title}</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-6">
                            These frames narrate the immersive lifestyle as an MBBS student—between classrooms, labs, and community healthcare drives.
                        </p>
                        <div className="space-y-4">
                            {images.map((image, index) => (
                                <button
                                    key={image.title}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-full flex items-center gap-4 p-3 rounded-2xl border text-left transition-all ${index === activeIndex ? 'border-neonBlue/70 bg-neonBlue/10' : 'border-white/5 hover:border-white/20'}`}
                                >
                                    <div className="w-12 h-12 rounded-xl overflow-hidden">
                                        <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-white">{image.title}</p>
                                        <p className="text-xs text-gray-400">{image.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-2 lg:-left-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-neonBlue hover:text-deepSpace transition-all"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 lg:-right-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-neonBlue hover:text-deepSpace transition-all"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-1 rounded-full transition-all ${index === activeIndex ? 'bg-neonBlue w-12' : 'bg-white/20 w-6 hover:bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
