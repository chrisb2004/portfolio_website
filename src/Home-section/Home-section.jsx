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
                    <h2 className="headline">
                        Hi, I'm <span>Chris</span>, a 3rd-year <br></br>
                        <span>Computer Engineering</span> student <br></br>
                     building scalable solutions!
                    </h2>
                </section>
            </section>
            

            <section>
                <SkillsSection />
            </section>
        </div>
    )
}

export default HomeSection
