import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/image/ProfileImg.png'

let name = 'John Denver'
const Container = styled.div`
    margin-top: 5rem;
    align-content: center;
`

const ProfileImg = styled.img`
    border-radius: 50%;
    height: 90px;
`

const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`

const Profile = () => {
    return (
        <Container>
            <ProfileImg src={Image} />
            <ProfileName>{name}</ProfileName>
        </Container>
    );
}

export default Profile;
