import './Menu-bar-link.css'

function MenuBarLink(props) {
    return (
        <div id='menu-bar-link'>
            <a 
                id='menubarlink'
                href={props.sectionLink} 
                onClick={(e) => {
                    e.preventDefault();
                    props.onClick?.(); // show main body if needed
                    if (props.sectionLink) {
                      requestAnimationFrame(() => {
                        document.querySelector(props.sectionLink)?.scrollIntoView({ behavior: 'smooth' });
                      });
                    }
                  }}
            >
                <img src={props.imgSrc} alt={props.title} />
                {props.title}
            </a>
        </div>
    )
}

export default MenuBarLink
