import { BiBowlRice } from 'react-icons/bi';
import { Button } from '../../../shadcn/ui/button';

function Header() {
    return (
        <div className="bg-transparent p-5">
            <header className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                    <BiBowlRice size="2rem" color="white" />
                    <p className="text-2xl text-white">Dinebnb</p>
                </div>
                <div className="flex gap-1">
                    <a href="/" className="px-4 text-xl text-white">Home</a>
                    <a href="/" className="px-4 text-xl text-white">Search</a>
                    <a href="/" className="px-4 text-xl text-white">About</a>
                    <a href="/" className="px-4 text-xl text-white">Profile</a>
                </div>
                <div>
                    <Button className="">Button</Button>
                </div>
            </header>
        </div>
    );
}

export default Header;
