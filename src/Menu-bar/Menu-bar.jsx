import './Menu-bar.css'
import MenuBarLink from './Menu-bar-link/Menu-bar-link'
import CVdownloadButton from './CV-download-button/CV-download-button'

function MenuBar() {
    const items = [
        { title: "Home", sectionLink:"", imgSrc: "./src/assets/home-section-icon.png" },
        { title: "Projects", sectionLink:"", imgSrc: "./src/assets/projects-section-icon.png" },
        { title: "Contact", sectionLink:"", imgSrc: "./src/assets/contact-section-icon.png" }
    ]

    return (
        
        <nav id='menu-bar'>
            {items.map((item, index) => (
                <MenuBarLink
                    key={index}
                    title={item.title}
                    sectionLink={item.sectionLink}
                    imgSrc={item.imgSrc}
                />
            ))}

            <CVdownloadButton/>     
        </nav>

        
    )
}

export default MenuBar
