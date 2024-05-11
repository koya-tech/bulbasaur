import { ImTwitter, ImGithub } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
// eslint-disable-next-line import/extensions
import { Link } from 'react-router-dom';
import { routeList, serviceInfoList } from '../constants/index';

function Footer() {
    return (
        <div className="bg-footer-background-color">
            {/* <div className="mx-auto my-0 sm:max-w-screen-lg"> */}
            <div className="px-2 py-6 text-footer-text-color text-base sm:flex sm:justify-evenly">
                <div className="text-left mt-2">
                    <h3 className="mb-2 font-bold text-xl">Link</h3>
                    {routeList.map((item) => (
                        <li className="list-none pb-2 text-xl">
                            <Link to={item.route}>{item.label}</Link>
                        </li>
                    ))}
                </div>

                <div className="text-left mt-2 text-xl">
                    <h3 className="mb-2 font-bold">Product</h3>
                    {serviceInfoList.map((item) => (
                        <li className="list-none pb-2 text-xl">
                            <Link to={item.route}>{item.label}</Link>
                        </li>
                    ))}
                </div>

            </div>
            <hr className="w-full text-center" />
            <footer className="px-2 py-6 text-footer-text-color text-xs sm:flex sm:justify-between">
                <p className="copyright text-base">Copyright © 2024 Koya-tech</p>
                <ul className="flex py-3">
                    <li className="pr-4 sm:ml-4"><a aria-label="twitter" data-testid="twitter-icon" href="/#"><ImTwitter size="1rem" /></a></li>
                    <li className="pr-4 sm:ml-4"><a aria-label="github" data-testid="github-icon" href="/#"><ImGithub size="1rem" /></a></li>
                    <li className="pr-4 sm:ml-4"><a aria-label="portfolio" data-testid="portfolio-icon" href="/#"><FaUser size="1rem" /></a></li>
                </ul>
            </footer>
        </div>

        // </div>

    );
}

export default Footer;
