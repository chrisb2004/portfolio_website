import './Menu-bar-link.css'

function MenuBarLink(props) {
    return (
        <div id='menu-bar-link'>
            <img src={props.imgSrc} alt={props.title} />
            <a 
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
                {props.title}
            </a>
        </div>
    )
}

export default MenuBarLink
