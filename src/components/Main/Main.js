import React from 'react';
import styled from 'styled-components'
import Nav from '../Sidebar/Menu/Nav'
import NewDepositBtn from '../Sidebar/Menu/NewDepositBtn';
import Deposits from './Deposits/Deposits';

const Container = styled.div`
    width:  auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`

const Main = () => {
    return (
        <Container>
            <Nav />
            <NewDepositBtn />
        </Container>
    );
}

export default Main;
