import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            My Portfolio
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-4">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            {/* <li>
              {/* <Link to="/projects">Projects</Link> */}
            {/* </li> */}
          </ul>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              
              <div className="w-10 rounded-full">
                
                <img
                  alt="Tailwind CSS Navbar component"
                  src="src/assets/WhatsApp Image 2025-10-30 at 17.03.49_9ecdf8d2.jpg"
                />
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
