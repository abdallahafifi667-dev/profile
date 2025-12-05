import '../styles/footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="copyright">
                <p>Developed by &copy;Abdullah Afifi {new Date().getFullYear()} </p>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/abdallah-afifi-05bb40271" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin-in icon"></i></a>
                <a href="https://github.com/Abdalloafifi" target="_blank" rel='noreferrer'>  <i className="fa-brands fa-github icon git"></i></a>
                <a href="mailto:abdo.afifi20007@gmail.com" target="_blank" rel='noreferrer'><i className="fa-solid fa-envelope icon"></i></a>
            </div>
        </footer>
    )
}

export default Footer