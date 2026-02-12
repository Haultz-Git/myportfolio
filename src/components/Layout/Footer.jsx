import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <h3>Let's Create Together</h3>
                    <p>Ready to bring your immersive game worlds to life? Let's discuss your next project.</p>
                    <div className="social-links">
                        <a href="#" className="social-link" aria-label="GitHub"><Github /></a>
                        <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin /></a>
                        <a href="mailto:contact@example.com" className="social-link" aria-label="Email"><Mail /></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Unity Dev Portfolio. Built with React & Vite.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
