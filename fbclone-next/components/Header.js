import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
    BellIcon, ChatIcon,
    ChevronDownIcon, HomeIcon,
    UserGroupIcon, ViewGridIcon
} from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/client';


Header.propTypes = {

};

function Header(props) {

    const [session] = useSession();

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
                    className="hidden md:flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
                    type="text"
                    placeholder="Search Icon"
                />
            </div>


        </div>
    }

    const renderHeaderCenter = () => {
        return <div className="flex justify-center flex-grow">
            <div className="flex space-x-6">
                <HeaderIcon active Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
            </div>
        </div>
    }

    const renderHeaderRight = () => {
        return <div className="flex items-center sm:space-x-2 justify-end">
            <Image
                src={session.user.image}
                onClick={signOut}
                width="40"
                height="40"
                layout="fixed"
                alt="img-logo"
                className="cursor-pointer rounded-full"
            />

            <p className="whitespace-normal font-semibold pr-3 break-normal	">Chuong Tran</p>
            <ViewGridIcon className="icon" />
            <ChatIcon className="icon" />
            <BellIcon className="icon" />
            <ChevronDownIcon className="icon" />
        </div>
    }

    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 
            lg:px-5 shadow-md
        ">
            {/* left */}
            {renderHeaderLeft()}
            {/* center */}
            {renderHeaderCenter()}
            {/* right */}
            {renderHeaderRight()}
        </div>
    );
}

export default Header;