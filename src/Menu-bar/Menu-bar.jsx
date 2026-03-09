import './Menu-bar.css'
import MenuBarLink from './Menu-bar-link/Menu-bar-link'

function MenuBar({ onHomeClick, onShowMainBody }) {
    const items = [
        { title: "Home", onClick: onHomeClick, sectionLink:"", imgSrc: "./src/assets/home-section-icon.png" },
        { title: "About", onClick: onShowMainBody, sectionLink:"#about-section", imgSrc: "./src/assets/about-section-icon.png" },
        { title: "Projects", onClick: onShowMainBody, sectionLink:"#projects-section", imgSrc: "./src/assets/projects-section-icon.png" },
        { title: "Contact", onClick: onShowMainBody, sectionLink:"#contact-section", imgSrc: "./src/assets/contact-section-icon.png" }
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
                <img src='./src/assets/download.png'></img>
                <button id='downloadCVbutton'>Download CV</button>
            </div> 
        </nav>

        
    )
}

export default MenuBar
