import React, { useState } from "react";
import styled from "styled-components";
import { Heart } from "@styled-icons/octicons/Heart";
import { HeartFill } from "@styled-icons/octicons/HeartFill";
import { Trash } from "@styled-icons/octicons/Trash";
import { useAppSelector } from "../redux/app/hooks.ts";

const FavoriteButton = ({ onClick, result }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const favorites = useAppSelector((state) => state.userPreferences.favorites);
  const isFavorite = favorites.find((favorite) => result.id === favorite.id);

  return (
    <>
      {showConfirmation && (
        <Confirmation>
          <RemoveItem
            size={12}
            onClick={() => {
              onClick();
              setShowConfirmation(false);
            }}
          />
        </Confirmation>
      )}
      <Button>
        {!isFavorite ? (
          <EmptyHeart size={12} onClick={onClick} />
        ) : (
          <FilledHeart
            size={12}
            onClick={() => setShowConfirmation(!showConfirmation)}
          />
        )}
      </Button>
    </>
  );
};

export default FavoriteButton;

const Button = styled.button`
  align-items: center;
  background: linear-gradient(220deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
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

const EmptyHeart = styled(Heart)`
  color: #ff004c;
  :active {
    transform: scale(1.3);
  }
`;

const FilledHeart = styled(HeartFill)`
  color: #ff004c;
  :active {
    transform: scale(1.3);
  }
`;

const Confirmation = styled.div`
  display: flex;
`;

const RemoveItem = styled(Trash)`
  cursor: pointer;
`;
