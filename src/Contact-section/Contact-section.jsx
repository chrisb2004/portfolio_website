import './Contact-section.css'

function ContactSection() {
    return (
        <div id='contact-section-container'>
            <h3>Feel free to contact me!</h3>
            <ul id='contact-list'>
                <li className='contact-list-item-rl'>
                    <a href='https://www.linkedin.com/in/christopher-blanco-b7338a272/'>
                        <img src='./src/assets/linkedin.png'></img>
                    </a>
                </li>
                <li className='contact-list-item-rr'>
                    <a href='https://github.com/christopherblanco'>
                        <img src='./src/assets/github-footer.png'></img>
                    </a>
                </li>
                <li className='contact-list-item-rl'>
                    <a href='mailto:christopherblanco@gmail.com'>
                        <img src='./src/assets/gmail.png'></img>
                    </a>
                </li>
                <li className='contact-list-item-rr'>
                    <a href='mailto:christopherblanco@gmail.com'>
                        <img src='./src/assets/whatsapp.png'></img>
                    </a>
                </li>
            </ul>

            <p>© 2026 Chris Blanco. Built and designed by me.</p>
        </div>
    )
}

export default ContactSection
