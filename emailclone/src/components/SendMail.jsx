import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './SendMail.css';

function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className='send-mail'>
            <div className="send-mail__header">
                <h3>New Message</h3>
                <Close className='send-mail__close'/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="To" type="text" {...register("to", { required: true })}/>
                {errors.to && <p className='send-mail__error'>Required</p>}
                <input placeholder="Subject" type="text" {...register("subject",{ required: true })}/>
                {errors.subject && <p className='send-mail__error'>Required</p>}
                <input 
                    placeholder="Message..." 
                    type="text" 
                    className='send-mail__message'
                    {...register("message", { required: true })}
                />
                {errors.message && <p className='send-mail__error'>Required</p>}

                <div className="send-mail__options">
                    <Button className='send-mail__send'
                    variant='contained'
                    color='primary'
                    type='submit'
                    >Send</Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;
