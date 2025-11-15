import React from 'react';
import { Link } from 'react-router-dom';
import image from "/src/assets/WhatsApp Image 2025-10-30 at 17.03.49_9ecdf8d2.jpg"
const Header = () => {
  return (
    <div className='sm:w-full'>
      <div className="navbar bg-base-300 shadow">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            My Portfolio
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <ul className="menu menu-horizontal px-4">
            <li>
              <Link to="/" className='text-[20px]'>About</Link>
            </li>
            <li>
              <Link to="/contact" className='text-[20px]'>Contact</Link>
            </li>
            <li>
              {/* <Link to="/skills">Skills</Link> */}
            </li>
            {/* <li>
              {/* <Link to="/projects">Projects</Link> */}
            {/* </li> */}
          </ul>
          <div className="dropdown dropdown-end mr-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              
              <div className="w-10 rounded-full">
                
                <img
                  alt="Tailwind CSS Navbar component"
                  src={image}
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
