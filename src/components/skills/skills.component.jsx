import React, { useEffect } from 'react';

import sr from '../../utils/scrollReveal';
import "./skills.styles.css";

const Skills = props => {
    useEffect(() => {
        sr.reveal('.skills__subtitle', {});
        sr.reveal('.skills__text', {});
        sr.reveal('.skills__data', { interval: 200 });
        sr.reveal('.skills__img', { delay: 600 });
    });

    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills__container bd-grid">
                <div className="skills__languages">
                    <h2 className="skills__subtitle">Languages</h2>
                    <p className="skills__text">Proficient in programming and query languages such as <strong>Java, Python, C#, and SQL</strong>.</p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-java skills__icon"></i>
                            <span className="skills__name">JAVA</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-python skills__icon"></i>
                            <span className="skills__name">PYTHON</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-c-plus-plus skills__icon"></i>
                            <span className="skills__name">C#</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bx-data skills__icon"></i>
                            <span className="skills__name">SQL</span>
                        </div>
                    </div>
                </div>
                <div className="skills__frameworks">
                    <h2 className="skills__subtitle">Frameworks</h2>
                    <p className="skills__text">Experienced in building applications with frameworks like <strong>Spring Boot, ASP.NET MVC, Bootstrap, and Vue.js</strong>.</p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-spring-boot skills__icon"></i>
                            <span className="skills__name">SPRING BOOT</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-microsoft skills__icon"></i>
                            <span className="skills__name">ASP.NET MVC</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-bootstrap skills__icon"></i>
                            <span className="skills__name">BOOTSTRAP</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-vuejs skills__icon"></i>
                            <span className="skills__name">VUE.JS</span>
                        </div>
                    </div>
                </div>
                <div className="skills__tools">
                    <h2 className="skills__subtitle">Tools</h2>
                    <p className="skills__text">Skilled in using development tools like <strong>Docker, Git, and SVN</strong> for efficient workflows.</p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-docker skills__icon"></i>
                            <span className="skills__name">DOCKER</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-github skills__icon"></i>
                            <span className="skills__name">GIT</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bx-git-branch skills__icon"></i>
                            <span className="skills__name">SVN</span>
                        </div>
                    </div>
                </div>
                <div className="skills__others">
                    <h2 className="skills__subtitle">Others</h2>
                    <p className="skills__text">Strong foundation in <strong>HTML, CSS, OOP, Data Structures & Algorithms, and RESTful APIs</strong>.</p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-html5 skills__icon"></i>
                            <span className="skills__name">HTML</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bxl-css3 skills__icon"></i>
                            <span className="skills__name">CSS</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bx-code-alt skills__icon"></i>
                            <span className="skills__name">OOP</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bx-sitemap skills__icon"></i>
                            <span className="skills__name">DATA STRUCTURES & ALGORITHMS</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className="bx bx-server skills__icon"></i>
                            <span className="skills__name">RESTFUL APIs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;