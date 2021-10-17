import React from 'react';
import styled from 'styled-components';

const AddButton = styled.a`
    background-color: #66bb6a;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 25px;
    position: absolute;
    top: 6rem;
    right: 7rem;
    cursor: pointer;
`

const AddIcon = styled.span`
    color: white;
    font-size: 24px;
`

const Newdepositbtn = () => {
    return (
        <AddButton>
            <AddIcon className="iconify" data-icon="mdi:plus"></AddIcon>
        </AddButton>
    );
}

export default Newdepositbtn;
