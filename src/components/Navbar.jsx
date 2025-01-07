import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full h-14 bg-black text-white flex justify-center items-center'>
            <nav className='mx-auto px-4 h-full flex justify-center items-center'>
                <ul className='flex justify-center items-center gap-x-28'>
                    <li>
                        <Link to='/'>Anasayfa</Link>
                    </li>
                    <li>
                        <Link to='/'>Hakkımızda</Link>
                    </li>
                    <li>
                        <Link to='/'>Hizmetler</Link>
                    </li>
                    <li>
                        <Link to='/'>İletişim</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar