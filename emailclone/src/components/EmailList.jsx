import RedoIcon from '@mui/icons-material/Redo';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import Section from './Section';
import EmailRow from './EmailRow';
import './EmailList.css';

function EmailList() {
    return (
        <div className='email-list'>
            <div className="email-list__settings">
                <div className="email-list__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="email-list__settingsRight">
                    <IconButton>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="email-list__sections">
                    <Section Icon={InboxIcon} title='Primary' color='red' selected /> 
                    <Section Icon={PeopleAltOutlinedIcon} title='Social' color='#1A73E8' /> 
                    <Section Icon={LocalOfferIcon} title='Promotions' color='green' /> 
            </div>
            <div className="email-list__list">
                <EmailRow 
                    title="Facebook"
                    subject="Hello Team!!"
                    description="The new Meta Car is HERE!!"
                    time="12:48pm"/>
            </div>
        </div>
    );
}

export default EmailList;
