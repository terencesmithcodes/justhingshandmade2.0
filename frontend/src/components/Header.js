import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu';
import { HiMenu } from "react-icons/hi";

const Header = () => {
    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className="fixed w-full text-white flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center uppercase">
        <h1>
          Just Things
          <span className="block text-4xl">Handmade</span>
        </h1>
      </div>

      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <HiMenu onClick={showMenu} className="scale-150 cursor-pointer" />
        </div>
        <ul className="hidden md:flex gap-8 p-6 uppercase">
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/">Shot Glasses</Link>
          </li>
          <li>
            <Link to="/">Rolled Flowers</Link>
          </li>
          <li>
            <Link to="/">Holiday Gifts</Link>
          </li>
          <li>
            <Link to="/">Grill Accesories</Link>
          </li>
          <li>
            <Link to="/">Tier Tray</Link>
          </li>
          <li>
            <Link to="/">Drinkware</Link>
          </li>
        </ul>
        <MobileMenu showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
}

export default Header