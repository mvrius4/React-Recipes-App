import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'; 

function SearchInput() {
  return (
    <FormStyle>
        <FaSearch />
        <input type="text" value=""></input>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    input {
        width: 30%;
        background: transparent;
        border: 3px solid rgb(205, 205, 205);
        border-radius: 1rem;
        padding: .5rem;
    }
`

export default SearchInput;