import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Popular() {
    const [popular, setPopular] = useState([]);
    const POPULAR_LOCAL_STORAGE_PREFIX = "popular"
    const POPULAR_LOCAL_STORAGE_KEY = `recipe-${POPULAR_LOCAL_STORAGE_PREFIX}`

    async function getPopular() {
        const check = localStorage.getItem(POPULAR_LOCAL_STORAGE_KEY);
        
        if(check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=c5b86bb353f6462f859e54094307e3c1&number=9`);
            const data = await api.json();
            localStorage.setItem(POPULAR_LOCAL_STORAGE_KEY, JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    };

    useEffect(() => {
        getPopular();
    }, []);

    return (
        <Wrapper>
            <h2>Popular picks</h2>
            <Splide
                options = {{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem"
                }}
            >
                {popular.map(recipe => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={"/recipe/" + recipe.id}>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <h4>{recipe.title}</h4>
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    margin: 3rem;
    overflow: hidden;
`;
const Card = styled.div`
  margin-top: 2rem;
    img {
        width: 100%;
        min-height: 350px;
        border-radius: 2rem;
        object-fit: cover;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Popular;
