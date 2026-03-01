import SkillsSection from '../Skills-section/Skills-section'
import './Home-section.css'

function HomeSection() {
    return (
        <div id='home-section-container'>
            <section id='introduction-section-container'>
                <section id='profile-image-container'>
                    <img id='profile-image' src='./src/assets/Profile-image copy.jpg'></img>
                </section>

                <section id='headlines-container'>
                    <h1 className="headline">
                        Hello!<br></br> I'm <span>CHRISTOPHER</span>,<br></br> 
                        a <span>COMPUTER ENGINEERING</span> student <br></br>
                        building scalable solutions!
                    </h1>
                </section>
            </section>
            

            <section id='skills-section'>
                <h1>My Skills</h1>
                <p>Some of my relevant skills</p>
                <SkillsSection />
            </section>
        </div>
    )
}

export default HomeSection
