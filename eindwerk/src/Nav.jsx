import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='col-span-2'>
            <nav>
                <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium mx-4">Ons menu</Link>
                <Link to='/about' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium mx-4">Over onze frituur</Link>
            </nav>
        </div>
    )
}

export default Nav