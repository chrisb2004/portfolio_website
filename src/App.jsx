import './App.css'
import MenuBar from './Menu-bar/Menu-bar'
import HomeSection from './Home-section/Home-section'
import ProjectsSection from './Projects-section/Projects-section'
import ContactSection from './Contact-section/Contact-section'
import { useState } from 'react'
import SkillsSection from './Skills-section/Skills-section'

function App() {
  const [showMainBody, setShowMainBody] = useState(false);

  const toggleMainBodyVisibility = () => {
    setShowMainBody(true);
  } ;

  const handleHomeClick = () => {
    setShowMainBody(false);
  };

  return (
    <div id='app'>
      <MenuBar 
        onHomeClick={handleHomeClick} 
        onShowMainBody={toggleMainBodyVisibility}

      />
      
      <section id='header-section'>
        <HomeSection onHomeClick={handleHomeClick}/>

        <div id='getStartedButton-container' onClick={toggleMainBodyVisibility}>
          <button id='getStartedButton'>Get Started</button>
        </div>
      </section>
      

      <section className={`main-body-container ${showMainBody ? 'visible' : ''}`}>
          <section id='about-section'>
            <section id='about-container'>
              <h1 className="about-title">About Me</h1>
              <p className="about-text">
                Based in <span>Costa Rica</span>, I'm a bilingual developer fluent in both 
                <span> Spanish and English</span>. My experience spans from 
                <span> low-level systems programming in C++</span> to building 
                <span> full-stack web applications</span> with React and Node.js — 
                I enjoy working across the stack and diving deep into hard problems. 
                Outside of class, I spend my time on personal projects like a 
                <span> genomic data analysis engine</span> and a 
                <span> client-server league simulation platform</span>, 
                because I believe the best way to grow as an engineer is to 
                just keep building.
              </p>
            </section>
            <SkillsSection 
            />
          </section>
          
          <section id='projects-section'>
            <ProjectsSection />
          </section>

          <section id='contact-section'>
            <ContactSection />
          </section>
        </section>
    </div>
  )
}

export default App
