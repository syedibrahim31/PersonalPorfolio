import '../styles/footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="copyright">
                <p>Developed by &copy;Syed Ibrahim {new Date().getFullYear()} </p>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/syed-ibrahim-85a20a19b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin-in icon"></i></a>
                <a href="https://github.com/syedibrahim31" target="_blank" rel='noreferrer'>  <i className="fa-brands fa-github icon git"></i></a>
                <a href="https://www.instagram.com/_iam__ibbu/profilecard/?igsh=aXowa3luZWJyMHoz" target="_blank" rel='noreferrer'> <i className="fa-brands fa-instagram icon"></i></a>
            </div>
        </footer>
    )
}

export default Footer