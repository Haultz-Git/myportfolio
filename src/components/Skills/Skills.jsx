import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Box,
    Monitor,
    Layers,
    Cpu,
    Gamepad2,
    Terminal,
    Globe
} from 'lucide-react';
import './Skills.css';

const skillsData = [
    { name: 'Unity 3D', level: 95, category: 'Engine', icon: <Box /> },
    { name: 'C# Programming', level: 90, category: 'Language', icon: <Code2 /> },
    { name: 'Shader Graph', level: 85, category: 'Graphics', icon: <Layers /> },
    { name: 'VR/AR Development', level: 80, category: 'XR', icon: <Monitor /> },
    { name: 'Blender', level: 70, category: 'Tools', icon: <Gamepad2 /> },
    { name: 'Performance Opt.', level: 85, category: 'Engineering', icon: <Cpu /> },
    { name: 'Git & DevOps', level: 80, category: 'Tools', icon: <Terminal /> },
    { name: 'Multiplayer / Netcode', level: 75, category: 'Network', icon: <Globe /> },
];

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-subtitle"
                    >
                        A comprehensive toolset for building next-generation interactive experiences.
                    </motion.p>
                </div>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="skill-card"
                        >
                            <div className="skill-category">{skill.category}</div>
                            <div className="skill-icon">
                                {skill.icon}
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <div className="skill-level-container">
                                <motion.div
                                    className="skill-level-bar"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
