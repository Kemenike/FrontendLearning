import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LableImportantOutlineIcon from '@mui/icons-material/LabelImportantOutlined';
import './EmailRow.css';
import { useNavigate } from 'react-router-dom';

function EmailRow({ id, title, subject, description, time }) {

    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('/mail')} className='email-row'>
            <div className="email-row__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LableImportantOutlineIcon />
                </IconButton>
            </div>
            <h3 className="email-row__title">
                {title}
            </h3>
            <div className="email-row__message">
                <h4>{subject}{"   "}
                <span className="email-row__description">- {"   "}{description}</span></h4>
            </div>
            <p className="email-row__time">
                {time}
            </p>
        </div>
    );
}

export default EmailRow;
