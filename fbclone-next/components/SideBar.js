import React from 'react';
import PropTypes from 'prop-types';
import { useSession } from 'next-auth/client';
import SideBarRow from './SideBarRow';
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UserIcon
} from '@heroicons/react/solid';

import {
    ShoppingBagIcon, UserGroupIcon, ChevronDownIcon
} from '@heroicons/react/outline';

SideBar.propTypes = {

};

function SideBar(props) {
    const [session, loading] = useSession();

    return (
        <div className="p-2 mt-5 min-w-[600px] xl:min-w-[300px]">
            <SideBarRow src={session.user.image} title={session.user.name}/>
            {/* <SideBarRow src={UserIcon} title="Friends"/>
            <SideBarRow src={UserGroupIcon} title="Groups"/>
            <SideBarRow src={ShoppingBagIcon} title="Marketplace"/>
            <SideBarRow src={DesktopComputerIcon} title="Watch"/>
            <SideBarRow src={CalendarIcon} title="Events"/>
            <SideBarRow src={ClockIcon} title="Memories"/>
            <SideBarRow src={ChevronDownIcon} title="See More"/> */}
        </div>
    );
}

export default SideBar;