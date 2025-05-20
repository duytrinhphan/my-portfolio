import React, { useEffect } from 'react';
import sr from '../../utils/scrollReveal';
import './about.styles.css';

const About = () => {
    useEffect(() => {
        sr.reveal('.about__section-title', {});
        sr.reveal('.about__intro', { delay: 200 });
        sr.reveal('.about__section', { delay: 400 });
    }, []);

    return (
        <section className="about section" id="about">
            <h2 className="section-title about__section-title">About</h2>

            <p className="about__intro">
                I'm a recent Information Technology graduate with hands-on experience in both software development and testing. I have a strong passion for crafting clean, scalable web applications that deliver intuitive and seamless user experiences. My goal is to become a highly skilled Fullstack Developer, continuously learning and contributing to impactful, real-world projects through technology.
            </p>

            <div className="about__section">
                <h3 className="about__section-subtitle">Work Experience</h3>
                <div className="about__item">
                    <h4 className="about__item-title">IVS Joint Stock Company (Internship)</h4>
                    <span className="about__item-duration">June 2024 - December 2024</span>
                    <p className="about__item-role">Developer, Manual Tester</p>
                    <ul className="about__item-details">
                        <li>Developed Java-based solutions to replace the legacy RPG logic.</li>
                        <li>Coded according to customer requirements and guidelines.</li>
                        <li>Designed and implemented modern web-based UI components using PrimeFaces.</li>
                        <li>Conducted testing tasks, including creating Unit Test Cases (UTC), Unit Test Evidence (UTE) and checklists with Japanese. </li>
                    </ul>
                </div>
            </div>

            <div className="about__section">
                <h3 className="about__section-subtitle">Education</h3>
                <div className="about__item">
                    <h4 className="about__item-title">Ho Chi Minh City University of Technology</h4>
                    <span className="about__item-duration">October 2021 - Expected June 2025</span>
                    <p className="about__item-role">Studying Information Technology</p>
                    <li>GPA: 3.23/4.0</li>
                </div>
            </div>
        </section>
    );
};

export default About;
