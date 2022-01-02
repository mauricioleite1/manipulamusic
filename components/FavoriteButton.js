import React from 'react';
import styled from 'styled-components';
import { Heart } from '@styled-icons/octicons/Heart';
import { HeartFill } from '@styled-icons/octicons/HeartFill';

const FavoriteButton = () => {
  return (
    <Button>
      <Heart size={10} />
    </Button>
  );
};

export default FavoriteButton;

const Button = styled.button`
  align-items: center;
  background: linear-gradient(220deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  border: none;
  border-radius: 20px; 
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  gap: 4px;
  justify-content: center;
  opacity: 0.6;
  padding: 4px 10px;
  transition: 0.2s ease-in-out;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :hover {
    opacity: 1;
  }
`;

