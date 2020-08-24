import React, { useState } from 'react';
import styled from 'styled-components';

import API from '../../../common/axios.js';
import Button from '../../../common/Forms/Button.jsx';
import FormGroup from '../../../common/Forms/FormGroup.jsx'


const formFields = {
    EmailField: {
        id: 'Email',
        label: 'Sign up for our newsletter',
        inputType: 'text',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    }
}

const EmailForm = () => {

    const [Email, EmailUpdate ] = useState(formFields.EmailField);

    const handleOnChange = (event, formField) => {
        const newField = {
            ...formField,
            value: event.target.value,
        }
        if (newField.validate.required === true) {
            console.log('Validating:', newField.label);

        if (newField.value.length < 4) {
            newField.validate.valid = false;
            newField.validate.message = `Please enter email address.`;
        } else {
            newField.validate.valid = true;
            newField.validate.message = ``;
        }
        }

        if (formField.id === 'Email') {
            EmailUpdate(newField);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Captured Form Submit');

        if ( Email.validate.valid === true) {
            console.log('Valid Submitting Form');

            const postData = {
                Email: Email,
            }

            API.post('/signupUser', postData).then((result) => {
                console.log('result', result);
            });
        }
    }

    return (
        <EmailFormStyled className='EmailForm'>
            <div className='nested-wrapper'>
            <form onSubmit={ handleFormSubmit }>
                <FormGroup
                    formField={ Email }
                    onChange= { handleOnChange }
                />

                <Button type='submit'>SIGN UP</Button>
            </form>
            </div>
        </EmailFormStyled>
    );
}

export default EmailForm;

const EmailFormStyled = styled.div`
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    
`;