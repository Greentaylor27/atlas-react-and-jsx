import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

export default function SocialLinks() {
    return (
        <div className="social-link">
            <a href="https://www.linkedin.com/in/greentaylor27/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/Greentaylor27" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Github" />
            </a>
        </div>
    )
}
