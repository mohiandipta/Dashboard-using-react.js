import React from 'react';
import styled from 'styled-components';
import Sortingbar from './SortingBar';
import Deposit from './Deposit';

const Title = styled.h1`
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
    display: flex;
    align-item: center; 
`

// const BackGround = styled.div`
//     padding: 10px;
//     margin-bottom: 15px;
//     background-color: #e3e6f2;
//     border-radius: 10px;
// `

const DepositeCount = styled.div`
    margin-left: 1rem;
    font-size: 15px;
    background-color: #778DA9;
    color: ${({ theme }) => theme.headerNumber};
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`

const Deposits = ({ title, data, count }) => {
    return (
        <div>
            <Title>{title}
                <DepositeCount>{count}</DepositeCount>
            </Title>
            <Sortingbar />
            {data.map(deposit => (
                <Deposit data={deposit} key={deposit.property.address.street} />
            ))}
        </div>
    );
}

export default Deposits;
