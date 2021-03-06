import React from 'react';
import styled from 'styled-components';

import Input from './Input.jsx';
import TextArea from './TextArea.jsx';

const FormGroup = ({formField, onChange}) => {

    const Control = (formField.inputType === 'textarea') ? TextArea : Input;

    return (
        <FormGroupStyled className='FormGroup'>
            <label htmlFor={ formField.id }>{formField.label}</label>
            {
                (formField.validate.message) &&
                <div className='feedback'>{ formField.validate.message }</div>
            }
            <Control formField={ formField } onChange={ onChange } />
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`
    margin: 20px 0px;

label {
    font-weight: bold;
}
.feedback {
    color: red;
    margin: 5px 0px;
}

.Control {
    input, textarea {
        width: 40%;
        font-size: 18px;
        padding: 5px;
    }

`;