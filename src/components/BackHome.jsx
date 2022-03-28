import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function BackHome() {
  return (
    <Home>
        <HLink to={"/"}> 
            <AiOutlineArrowLeft /> <h4>Go back to Home Page</h4>
        </HLink>
    </Home>
  )
};
const Home = styled.div`
    display: flex;
    padding-top: 2rem;
    justify-content: center;
`
const HLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: .5rem;
`

export default BackHome;