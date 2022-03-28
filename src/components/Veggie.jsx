import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  const VEGGIE_LOCAL_STORAGE_PREFIX = "veggie"
  const VEGGIE_LOCAL_STORAGE_KEY = `recipe-${VEGGIE_LOCAL_STORAGE_PREFIX}`

  async function getVeggie() {
    const check = localStorage.getItem(VEGGIE_LOCAL_STORAGE_KEY);
    
    if(check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=c5b86bb353f6462f859e54094307e3c1&number=9&tags=vegetarian`);
      const data = await api.json();
      localStorage.setItem(VEGGIE_LOCAL_STORAGE_KEY, JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };
  
  useEffect(() => {
      getVeggie();
  }, []);

  return (
    <Wrapper>
      <h2>Our vegetarian picks</h2>
      <Splide
        options = {{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem"
        }}
      >
        {veggie.map(recipe => {
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
        height: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Veggie;