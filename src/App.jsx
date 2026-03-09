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
            <SkillsSection />
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
