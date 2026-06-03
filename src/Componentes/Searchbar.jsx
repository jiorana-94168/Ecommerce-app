import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../Context/Shopcontext';
import { assets } from '../assets/assets';

const Searchbar = () => {
    const { search, setSearch, showSearch, setshowSearch } = useContext(ShopContext);

    const [visible, setVisible] = useState(false);
    const location = useLocation();

    // Show search bar only on Collection page
    useEffect(() => {
        if (location.pathname.includes("collection")) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location.pathname]);

    if (!showSearch || !visible) return null;

    return (
        <div className='border-b border-t text-center bg-gray-50'>

            {/* Search Input Box */}
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder='Search'
                    className='flex-1 text-sm outline-none'
                />

                <img src={assets.search_icon} alt="search" className='w-3' />
            </div>

            {/* Close Button */}
            <img
                onClick={() => setshowSearch(false)}
                src={assets.cross_icon}
                alt="close"
                className='inline w-3 cursor-pointer'
            />
        </div>
    );
};

export default Searchbar;