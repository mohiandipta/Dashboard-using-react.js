import React from 'react';
import styled from 'styled-components';
import Image from '../../../assets/image/ProfileImg.png'

const Container = styled.div`

`
const ProfileImg = styled.img`

`
const MessageIcon = styled.span`

`

const Nav = () => {
    return (
        <div>
            <MessageIcon></MessageIcon>
            <ProfileImg src={Image} />
        </div>
    );
}

export default Nav;
