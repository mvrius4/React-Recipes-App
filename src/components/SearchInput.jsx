import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

function SearchInput() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const eventHandler = e => {
        e.preventDefault();
        navigate("/searched/" + input);
    };

    return (
        <FormStyle onSubmit={eventHandler}>
            <FaSearch />
            <input type="text" onChange={e => setInput(e.target.value)} value={input}></input>
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
        outline: none;
        border: 3px solid #D6D5C9;
        border-radius: 1rem;
        padding: .5rem;
        color: #D6D5C9;
        font-weight: 700;
        &:focus {
            border: 3px solid #A22C29;
        }
    }
`

export default SearchInput;