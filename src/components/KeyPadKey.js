import React from 'react';
import StyledKeypadButton  from '../styles/StyledKeypadButton';

const KeyPadKey = ({label, tones, handleClick}) => {
    return (
        <StyledKeypadButton onClick={() => handleClick(tones)}>{label}</StyledKeypadButton>
    )
}

export default KeyPadKey
