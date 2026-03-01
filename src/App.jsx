import './App.css'
import MenuBar from './Menu-bar/Menu-bar'
import HomeSection from './Home-section/Home-section'
import ProjectsSection from './Projects-section/Projects-section'
import ContactSection from './Contact-section/Contact-section'

function App() {
  return (
    <div id='app'>
      <MenuBar />
      <HomeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
