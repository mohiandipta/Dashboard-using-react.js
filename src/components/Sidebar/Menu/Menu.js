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
            <MenuItems title='Home' icon='' />
            <MenuItems title='Deposits' icon='' active />
            <MenuItems title='Offers' icon='' />
            <MenuItems title='Payment' icon='' />
            <MenuItems title='Settings' icon='' />
        </Container>
    );
}

export default Menu;
