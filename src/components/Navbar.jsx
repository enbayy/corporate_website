import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className='w-full h-14 bg-black text-white flex justify-center items-center'>
            <nav className='mx-auto px-4 h-full flex justify-center items-center'>
                <ul className='flex justify-center items-center gap-x-4 sm:gap-x-8 md:gap-x-28'>
                    <li>
                        <Link to='home' smooth={true} duration={500}>
                            Anasayfa
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={500}>
                            Hakkımızda
                        </Link>
                    </li>
                    <li>
                        <Link to='services' smooth={true} duration={500}>
                            Hizmetler
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={500}>
                            İletişim
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;