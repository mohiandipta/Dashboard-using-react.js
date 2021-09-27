import React from 'react';
import styled from 'styled-components';
import MenuItems from './MenuItems';

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuItems title='Home' icon='home' />
            <MenuItems title='Deposits' icon='file-multiple' active />
            <MenuItems title='Offers' icon='gift' />
            <MenuItems title='Payment' icon='bank' />
            <MenuItems title='Settings' icon='cog' />
        </Container>
    );
}

export default Menu;
