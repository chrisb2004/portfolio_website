import './Contact-section.css'

import linkedinIcon from '../assets/linkedin.png'
import githubFooterIcon from '../assets/github-footer.png'
import emailIcom from '../assets/gmail.png'
import whatsAppIcon from '../assets/whatsapp.png'

function ContactSection() {
    return (
        <div id='contact-section-container'>
            <h3>Feel free to contact me!</h3>
            <ul id='contact-list'>
                <li className='contact-list-item-rl'>
                    <a href='https://www.linkedin.com/in/christopher-blanco-b7338a272/' target='_blank' rel='noreferrer'>
                        <img src={linkedinIcon}></img>
                    </a>
                </li>
                <li className='contact-list-item-rr'>
                    <a href='https://github.com/christopherblanco' target='_blank' rel='noreferrer'>
                        <img src={githubFooterIcon}></img>
                    </a>
                </li>
                <li className='contact-list-item-rl'>
                    <a href='mailto:chrisblanco.2004@gmail.com' target='_blank' rel='noreferrer'>
                        <img src={emailIcom}></img>
                    </a>
                </li>
                <li className='contact-list-item-rr'>
                    <a href='https://wa.me/50671840668' target='_blank' rel='noreferrer'>
                        <img src={whatsAppIcon}></img>
                    </a>
                </li>
            </ul>

            <p>© 2026 Chris Blanco. Built and designed by me.</p>
        </div>
    )
}

export default ContactSection
