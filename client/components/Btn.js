import React from 'react';

const Btn = ({ text, handleClick }) => {
    return (
        <button onClick={handleClick} className='btn'>{text}</button>
    )
}

export default Btn;