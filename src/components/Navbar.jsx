import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { FaMoon, FaSun } from 'react-icons/fa';
import HYDPOINT from '../assets/HYDPOINT.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="w-full h-14 bg-[#100f36] text-orange-600 flex justify-between items-center px-4">
      <div className="flex items-center">
        <img
          src={HYDPOINT}
          alt="HYD POINT ENDUSTRIYEL"
          className="h-48 w-48" 
        />
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        <button type="link" className="text-white hover:text-orange-600">
          <MenuOutlined />
        </button>
      </div>

      <nav
        className={`md:flex md:justify-center md:items-center md:flex-grow z-20 ${isMenuOpen ? 'block absolute top-14 left-0 w-full bg-[#100f36] z-10' : 'hidden'
          }`}
      >
        <ul className="w-3/4 flex flex-col justify-evenly items-center gap-y-4 sm:gap-y-6 md:flex-row md:gap-x-8">
          <li>
            <Link to="/" onClick={closeMenu}>
              <button type="link" className="text-white hover:text-orange-600 text-lg">
                Anasayfa
              </button>
            </Link>
          </li>
          <li>
            <Link to="/productPage" onClick={closeMenu}>
              <button type="link" className="text-white hover:text-orange-600 text-lg">
                Ürünlerimiz
              </button>
            </Link>
          </li>
          <li>
            <Link to="/aboutPage" onClick={closeMenu}>
              <button type="link" className="text-white hover:text-orange-600 text-lg">
                Hakkımızda
              </button>
            </Link>
          </li>
          <li>
            <Link to="#services" onClick={closeMenu}>
              <button type="link" className="text-white hover:text-orange-600 text-lg">
                Hizmetler
              </button>
            </Link>
          </li>
          <li>
            <Link to="/contactPage" onClick={closeMenu}>
              <button type="link" className="text-white hover:text-orange-600 text-lg">
                İletişim
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="text-white hover:text-orange-600 cursor-pointer pr-16" onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </div>
    </div>
  );
};

export default Navbar;