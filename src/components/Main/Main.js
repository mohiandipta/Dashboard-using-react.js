import React from 'react';
import styled from 'styled-components'
import Nav from '../Sidebar/Menu/Nav'
import NewDepositBtn from '../Sidebar/Menu/NewDepositBtn';
import Deposits from './Deposits/Deposits';

import DepositData from '../../DepositData.json'

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
            <Deposits title="Active Deposits" count={2} data={DepositData.active} />
            <Deposits title="Closed Deposits" count={8} data={DepositData.closed} />
        </Container>
    );
}

export default Main;
