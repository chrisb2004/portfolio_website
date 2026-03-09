import './Skills-section.css'

const SKILL_ICONS = [
    { src: '/src/assets/react.svg', alt: 'React' },
    { src: '/src/assets/js.png', alt: 'JavaScript' },
    { src: '/src/assets/html.png', alt: 'HTML' },
    { src: '/src/assets/css.png', alt: 'HTML' },
    { src: '/src/assets/java.png', alt: 'Java' },
    { src: '/src/assets/c-.png', alt: 'C++' },
    { src: '/src/assets/git.png', alt: 'Git' },
    { src: '/src/assets/github.png', alt: 'GitHub' },
    { src: '/src/assets/mysql-database.png', alt: 'MySQL' },
    { src: '/src/assets/json.png', alt: 'JSON' },
    { src: '/src/assets/programming.png', alt: 'OOP' },
]

/* Repeat the list enough times so the full-width viewport shows A→B→C→A→B…; we animate by one copy so the loop is seamless */
const TRACK_COPIES = 4

function SkillsSection() {
    const trackItems = Array(TRACK_COPIES).fill(SKILL_ICONS).flat()
    return (
        <div className="skills-conveyor-wrap">
            <section id='skills-section'>
                <h1>My Skills</h1>
                <p>Some of my relevant skills</p>
            </section>

            <div className="skills-conveyor-track" aria-hidden="true">
                {trackItems.map((skill, i) => (
                    <div key={i} className="skills-conveyor-item">
                        <img src={skill.src} alt={skill.alt} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsSection
