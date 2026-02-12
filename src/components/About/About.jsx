import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import AboutImage from '../../assets/about.svg';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        About Me
                    </motion.h2>
                </div>

                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="about-image"
                    >
                        <img src={AboutImage} alt="Profile" className="about-profile-img" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="about-text"
                    >
                        <h3>The Architect Behind the Code</h3>
                        <p>
                            I am a passionate Unity Developer with a background in Computer Science and Interactive Media.
                            My journey began with a curiosity for how virtual worlds are built, which quickly evolved into a
                            career dedicated to creating immersive gaming experiences.
                        </p>
                        <p>
                            I specialize in gameplay programming, performance optimization, and shader development.
                            I believe that great games are born at the intersection of robust engineering and artistic vision.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new VR titles, experimenting with procedural generation,
                            or contributing to the open-source game dev community.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
