import React, { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div data-aos="fade-down" className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-10 text-white font-bold text-2xl">
              <span>A_SPACE</span>
            </div>
            <div className="sm:hidden">
              <button onClick = {toggleMenu} className="text-white text-2xl focus:outline-none"> ☰ </button>
            </div>
            <div className={`${ isMenuOpen ? 'block' : 'hidden' } absolute top-full left-0 w-full bg-black/90 text-white sm:static sm:flex sm:items-center sm:bg-transparent sm:w-auto`}>
              <ul className="flex flex-col items-center gap-4 text-xl py-4 sm:flex-row sm:py-0">
                <li>
                  <a href="https://en.wikipedia.org/wiki/SpaceX" target="_blank" rel="noopener noreferrer"className='hover:text-sky-400 transition'>SpaceX</a>
                </li>
                <li>
                  <a href="https://en.wikipedia.org/wiki/Space_technology" target="_blank" rel="noopener noreferrer" className='hover:text-sky-400 transition'>Technology</a>
                </li>
                <li>
                  <a href="https://en.wikipedia.org/wiki/Galaxy" target="_blank" rel="noopener noreferrer" className='hover:text-sky-400 transition'>Galaxy</a>
                </li>
                <li>
                  <a href="https://en.wikipedia.org/wiki/Satellite" target="_blank" rel="noopener noreferrer" className='hover:text-sky-400 transition'>Satellite</a>
                </li>
              </ul>
              <div className="flex justify-center mt-4 sm:mt-0 sm:ml-6">
                <button className="text-white border-2 border-white px-3 py-1 rounded-md hover:text-sky-400 transition" >Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
