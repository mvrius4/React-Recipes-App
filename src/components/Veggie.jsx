import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

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
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
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
  position: relative;
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  margin-top: 2rem;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    width: 100%;
    text-align: center;
    font-weight: 500;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center; 
  }
`;
const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Veggie;