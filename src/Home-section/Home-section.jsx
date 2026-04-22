import './Home-section.css'

import profileImage from '../assets/Profile-image copy.jpg'

function HomeSection() {
    return (
        <div id='home-section-container'>
            <section id='introduction-section-container'>
                <section id='profile-image-container'>
                    <img id='profile-image' src={profileImage}></img>
                </section>

                <section id='headlines-container'>
                    <h1 className="headline">
                        Hey, I'm <span>CHRISTOPHER</span> <br/>
                        a <span>COMPUTER ENGINEERING</span> student<br/>
                        with a passion for building<br/>
                        clean, scalable software.
                    </h1>
                </section>
            </section>
        </div>
    )
}

export default HomeSection

