import React from 'react'
import styled from 'styled-components';

const Card = ({ id, mainText, secondaryText = null, picture, link }) => {
  console.log(link)

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Container
        key={id}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 5%, transparent 35%), url(${picture})`
        }}
      >
        <h4>{mainText}</h4>
        {secondaryText && <h6>{secondaryText}</h6>}

      </Container>
    </a>
  )
}

export default Card;

const Container = styled.div`
align-items: flex-start;
background-size: cover;
border-radius: 4px;
// box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 14px, rgba(0, 0, 0, 0.1) 0px 2px 8px;
display: flex;
cursor: pointer;
flex-direction: column;
height: 12rem;
justify-content: flex-end;
padding: 10px;
transition: 0.2s ease;
width: 12rem;

:hover {
  opacity: 0.9;
}

h4, h6 {
  color: white;
  font-family: Inter, Outfit, sans-serif;
  font-size: 14px;
  font-weight: 600;
}

h6 {
  color: white;
  font-family: Inter, Outfit, sans-serif;
  font-size: 0.7rem;
  font-weight: 200;
}

@media(max-width: 1024px) {
  // background: gold;
  width: 20rem;
  height: 28rem;
}
@media(max-width: 767px) {
  // background: gold;
  width: 90vw;
  height: 18rem;
}

`;
