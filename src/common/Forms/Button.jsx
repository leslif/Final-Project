import React from 'react';
import styled from 'styled-components';

const Button = ({children, type}) => {

    return (
        <ButtonStyled 
            className='Button'
            type={ type }
        >
            { children }
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
    border: none;
    outline: none;
    width: 150px;

    &:hover {
        background-color: #600202;
    }

    &:active {
        background-color: black;
    }
    cursor: pointer;


`;