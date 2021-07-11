import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
    BellIcon, ChatIcon,
    ChevronDownIcon, HomeIcon,
    UserGroupIcon, ViewGridIcon
} from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'




Header.propTypes = {

};

function Header(props) {

    const renderHeaderLeft = () => {
        return <div className="flex items-center">
            <Image
                src="https://links.papareact.com/5me"
                width="40"
                height="40"
                layout="fixed"
                alt="img-logo"
            />
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon
                    className="h-6 text-gray-600"
                />
                <input
                    className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
                    type="text"
                    placeholder="Search Icon"
                />
            </div>


        </div>
    }

    const renderHeaderCenter = () => {
        return <div></div>
    }

    const renderHeaderRight = () => {
        return <div></div>
    }



    return (
        <div>
            <h1 className="text-6xl">Header</h1>
            {/* left */}
            {renderHeaderLeft()}
        </div>
    );
}

export default Header;