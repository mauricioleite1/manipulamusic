import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Link from "next/link";
import { ArrowLeft } from "@styled-icons/octicons/ArrowLeft";
import { GenrePageText } from "../../language";
import { setArtistsByGenre } from "../../redux/contentSlice";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks.ts";

function Breadcrumbs() {
  const [showCategories, setShowCategories] = useState(false);

  const dispatch = useAppDispatch();
  const genre = useAppSelector((state) => state.content.genre);
  const language = useAppSelector((state) => state.userPreferences.language);

  return (
    <Container>
      <Link href="/" passHref>
        <ReturnButton>
          <ArrowLeft size={16} />
          {GenrePageText.back[language]}
        </ReturnButton>
      </Link>

      <div>
        <h4 onClick={() => setShowCategories(!showCategories)}>
          {GenrePageText.categories[language]}
        </h4>
      </div>

      {showCategories && (
        <ul>
          {genre &&
            genre.map(({ id, name }) => (
              <li
                key={id}
                onClick={async () => {
                  setShowCategories(false);
                  const response = await axios.get(
                    `http://localhost:5000/genre/${id}`
                  );
                  const { data } = response;
                  dispatch(setArtistsByGenre(data.data));
                }}
              >
                {name}
              </li>
            ))}
        </ul>
      )}
    </Container>
  );
}

export default Breadcrumbs;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 6rem;
  gap: 20px;
  justify-content: flex-start;
  position: relative;
  padding-inline: 20px;
  width: 100%;

  h4 {
    cursor: pointer;
  }

  ul {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(26px);
    border-radius: 8px;
    display: flex;
    gap: 20px;
    flex-flow: row wrap;
    padding: 10px;
    top: 70px;
    left: 100px;
    position: absolute;
    width: 30rem;
    z-index: 1;

    li {
      align-items: center;
      color: white;
      cursor: pointer;
      display: flex;
      font-size: 14px;
      font-weight: 100;
      height: 40px;
      list-style-type: none;
      transition: 0.2s ease-in-out;
      width: 20%;

      :hover {
        opacity: 0.8;
      }
    }
  }
`;

const ReturnButton = styled.div`
  cursor: pointer;
`;
