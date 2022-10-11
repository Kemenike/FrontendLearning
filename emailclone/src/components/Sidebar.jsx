import React from 'react';
import SidebarOption from '../ui/SidebarOption';
import './Sidebar.css';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LableIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DocumentIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';

function Sidebar () {
    return (
        <div>
            <Button 
            startIcon={<AddIcon fontSize='large'/>}
            className='sidebar__compose'>
                    Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title={"Inbox"} number={15} selected='true'/>
            <SidebarOption Icon={StarIcon} title={"Stared"} number={2}/>
            <SidebarOption Icon={ScheduleIcon} title={"Snoozed"} number={140}/>
            <SidebarOption Icon={LableIcon} title={"Important"} number={98}/>
            <SidebarOption Icon={SendIcon} title={"Sent"} number={842}/>
            <SidebarOption Icon={DocumentIcon} title={"Drafts"} number={98}/>
            <SidebarOption Icon={ArrowDown} title={"More"} number={98}/>
        </div>
    );
}

export default Sidebar;
