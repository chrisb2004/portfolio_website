import './Menu-bar-link.css'

function MenuBarLink(props) {
    return (
        <div id='menu-bar-link'>
            <img src={props.imgSrc} alt={props.title} />
            <a href={props.sectionLink}>{props.title}</a>
        </div>
    )
}

export default MenuBarLink
