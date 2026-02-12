import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-subtitle"
                >
                    Senior Unity Developer
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                    className="hero-title"
                >
                    Forging Immersive <br />
                    <span>Digital Worlds</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-description"
                >
                    Specializing in high-fidelity gameplay mechanics, shader development, and VR/AR experiences. Turning complex systems into seamless player interactions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="cta-group"
                >
                    <a href="#projects" className="btn btn-primary">
                        View Work <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Contact Me <Mail size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
