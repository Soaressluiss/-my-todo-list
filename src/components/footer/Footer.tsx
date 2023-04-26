import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./FooterStyles.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <h3>
                My To Do List <span>&copy; 2023</span>
            </h3>
            <div className="devContainer">
                <h4>Desenvolvido com ❤ por Luís Soares</h4>
                <div className="devSocial">
                    <a
                        href="https://www.linkedin.com/in/luissoaresdeveloper/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link para o Linkedin do desenvolvedor"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Soaressluiss"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link para o GitHub do desenvolvedor"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
