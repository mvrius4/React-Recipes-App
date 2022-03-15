import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { framer } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
 
function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c5b86bb353f6462f859e54094307e3c1&cuisine=${name}&number=6`);
        const data = await api.json();
        setCuisine(data.results);
    }

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    return (
        <Grid>
            {cuisine.map(recipe => {
                return (
                    <Card key={recipe.id}>
                        <img src={recipe.image} alt={recipe.title} />
                        <h4>{recipe.title}</h4>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
`
const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`

export default Cuisine;