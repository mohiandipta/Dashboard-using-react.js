import React from 'react';
import styled from 'styled-components';
import Image from '../../../assets/image/ProfileImg.png'

const Container = styled.div`
    display: flex;
    padding: 15px;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`
const ProfileImg = styled.img`
    border-radius: 50%;
    height: 40px;
    cursor: pointer;
`
const MessageIcon = styled.span`
    color: ${({ theme }) => theme.colorGray};
    font-size: 25px;
    margin-right: 10px;
`

const Nav = () => {
    return (
        <Container>
            <MessageIcon className="iconify" data-inline="false" data-icon="mdi-light:email"></MessageIcon>
            <ProfileImg src={Image} />
        </Container >
    );
}

export default Nav;
