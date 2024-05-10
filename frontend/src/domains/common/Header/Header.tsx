import { BiBowlRice } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../../shadcn/ui/button';
import { routeList } from '../constants/index';

function Header() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
        <div className={`p-7 ${isHome ? 'bg-black' : 'bg-transparent'}`}>
            <header className="flex justify-between items-center ">
                <Link to="/" className="flex items-center gap-2">
                    <BiBowlRice size="2rem" color="white" className="pb-1 mix-blend-difference" />
                    <p className="text-2xl text-white mix-blend-difference">Dinebnb</p>
                </Link>
                <div className="flex gap-1">
                    {routeList.map((item) => (
                        <Link to={item.route} className="px-4 text-xl text-white mix-blend-difference">{item.label}</Link>
                    ))}
                </div>
                <div>
                    <Link to="/auth">
                        <Button className="bg-black">Login</Button>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Header;
