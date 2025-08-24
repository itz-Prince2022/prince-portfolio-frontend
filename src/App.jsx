import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css';

import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import useFadeIn from './components/useFadeIn.jsx';
import Footer from './components/Footer.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
const apiUrl = import.meta.env.VITE_API_URL;

function App() {
    const [portfolio, setPortfolio] = useState(null);

    useFadeIn('.fade-in-up');

    useEffect(() => {
        axios.get(`${apiUrl}/api/portfolio`)
            .then(response => {
                setPortfolio(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the portfolio data!', error);
            });
    }, []);

    if (!portfolio) {
        return <LoadingScreen/>;
    }

    return (
        <div className="App">
            <Header
                name={portfolio.name}
                bio={portfolio.bio}
                contact={portfolio.contact}
            />
            <AboutMe
                education={portfolio.education}
                certifications={portfolio.certifications}
            />
            <Skills
                skills={portfolio.skills}
            />
            <Projects
                projects={portfolio.projects}
            />
            <Footer
                name={portfolio.name}
                contact={portfolio.contact}
            />
        </div>
    );
}

export default App;