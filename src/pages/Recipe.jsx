import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("informations");
  let params = useParams();

  const fetchDetails = async () => {
    const api = await fetch (
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=c5b86bb353f6462f859e54094307e3c1`
      );
    const data = await api.json();
    setDetails(data);
    console.log(details)
  }

  useEffect(() => {
    fetchDetails();
    console.log(params.name)
  }, [params.name]);

  return (
    <DetailsWrapper>
      <Details>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </Details>
      <Info>
        <ButtonContainer>
          <Button onClick={() => setActiveTab("informations")}>Informations</Button>
          <Button onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        </ButtonContainer>
        {activeTab === "informations" && (
          <InfoText>
            <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
            <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
          </InfoText>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => 
              <li key={ingredient.id}>{ingredient.original}</li>
            )}
          </ul>
        )}
      </Info>
    </DetailsWrapper>
  )
}

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4rem;
  li {
    list-style: square;
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  img { border-radius: 2rem; }
`
const Button = styled.button`
  outline: none;
  border: 0;
  font-weight: 700;
  padding: .6rem 1.2rem;
  cursor: pointer;
  background-color: #D6D5C9;
  border: 2px solid #D6D5C9;
  overflow: hidden;
  border-radius: 1rem;
  transition: background-color .5s ease-in;
  &:hover, &:focus {
    background-color: transparent;
    color: #D6D5C9;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default Recipe;