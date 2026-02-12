import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Gamepad2 } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Neon Racer VR',
        description: 'A high-speed VR racing game built with Unity URP. Features physics-based vehicle mechanics and procedural track generation.',
        tags: ['Unity', 'C#', 'VR', 'Oculus SDK'],
        links: { github: '#', demo: '#' }
    },
    {
        id: 2,
        title: 'Ethereal Realms',
        description: 'Open-world RPG prototype with a custom vegetation rendering system and dynamic weather cycles using Shader Graph.',
        tags: ['Unity', 'Shader Graph', 'PC', 'Optimization'],
        links: { github: '#', demo: '#' }
    },
    {
        id: 3,
        title: 'Quantum Tactics',
        description: 'Turn-based strategy game with multiplayer capabilities using Mirror Networking. Includes complex AI opponent behavior.',
        tags: ['Unity', 'Mirror', 'Multiplayer', 'AI'],
        links: { github: '#', demo: '#' }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-subtitle"
                    >
                        Selected works showcasing game mechanics, graphics programming, and immersive design.
                    </motion.p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="project-card"
                        >
                            <div className="project-image">
                                <div className="project-image-placeholder">
                                    <Gamepad2 size={48} opacity={0.5} />
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.links.github} className="link-btn">
                                        <Github size={18} /> Code
                                    </a>
                                    <a href={project.links.demo} className="link-btn">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
