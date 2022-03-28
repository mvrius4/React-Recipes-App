import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
        <SLink to={"/cuisine/italian"}>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/american"}>
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/thai"}>
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/japanese"}>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
`
const SLink = styled(NavLink)` 
    text-decoration: none;
    .active {
        color: #D6D5C9;
    }
`

export default Category;