import './Menu-bar.css'
import MenuBarLink from './Menu-bar-link/Menu-bar-link'

import homeIcon from '../assets/home.png'
import aboutIcon from '../assets/about-section-icon.png'
import porjectsIcon from '../assets/projects-section-icon.png'
import contactIcon from '../assets/contact-section-icon.png'
import downloadIcon from '../assets/download.png'

function MenuBar({ onHomeClick, onShowMainBody }) {
    const items = [
        { title: "Home", onClick: onHomeClick, sectionLink:"", imgSrc: homeIcon },
        { title: "About", onClick: onShowMainBody, sectionLink:"#about-section", imgSrc: aboutIcon },
        { title: "Projects", onClick: onShowMainBody, sectionLink:"#projects-section", imgSrc: porjectsIcon },
        { title: "Contact", onClick: onShowMainBody, sectionLink:"#contact-section", imgSrc: contactIcon }
    ]

    return (
        
        <nav id='menu-bar'>
            {items.map((item, index) => (
                <MenuBarLink
                    key={index}
                    title={item.title}
                    sectionLink={item.sectionLink}
                    imgSrc={item.imgSrc}
                    onClick={item.onClick}
                />
            ))}

            <div id='downloadCVbutton-container'>
                <img src={downloadIcon}></img>
                <a id='downloadCVbutton' href={`${import.meta.env.BASE_URL}Christopher-Blanco-CV.pdf`} download>
                    Download CV
                </a>
            </div> 
        </nav>

        
    )
}

export default MenuBar
