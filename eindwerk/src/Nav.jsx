import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className=''>
            <nav>
                <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ons menu</Link>
                <Link to='/about' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Over onze frituur</Link>
            </nav>
        </div>
    )
}

export default Nav