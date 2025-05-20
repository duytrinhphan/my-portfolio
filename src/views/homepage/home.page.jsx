import React from 'react';

import Header from '../../components/header/header.component';
import Hero from '../../components/hero/hero.component';
import About from '../../components/about/about.component';
import Skills from '../../components/skills/skills.component';
import Projects from '../../components/projects/projects.component';
import Contact from '../../components/contact/contact.component';
import Footer from '../../components/footer/footer.component';

import './homepage.styles.css';

const Home = props => {
    return (
        <div>
            <Header />
            <main className="l_main">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default Home;