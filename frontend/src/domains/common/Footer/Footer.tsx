import './footer.scss';
import { ImTwitter, ImGithub } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <p className="copyright">Copyright © 2024 Koya-tech</p>
            <ul className="md-flex">
                <li><a aria-label="twitter" data-testid="twitter-icon" href="/#"><ImTwitter /></a></li>
                <li><a aria-label="github" data-testid="github-icon" href="/#"><ImGithub /></a></li>
                <li><a aria-label="portfolio" data-testid="portfolio-icon" href="/#"><FaUser /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;
