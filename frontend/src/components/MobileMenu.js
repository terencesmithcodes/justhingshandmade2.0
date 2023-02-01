import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineX} from "react-icons/hi";

const MobileMenu = ({showMenu, active}) => {
    return (
      <ul
        className={
          active
            ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
            : "hidden"
        }
      >
        <div>
          <HiOutlineX onClick={showMenu} className="cursor-pointer" />
        </div>
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
    );
}

export default MobileMenu