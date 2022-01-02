import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';
import { setArtistsByGenre } from '../../redux/contentSlice';
import { ArrowLeft } from '@styled-icons/octicons/ArrowLeft';
import Card from '../../components/Card';

const GenrePage = () => {
  const [showCategories, setShowCategories] = useState(false);

  const genre = useAppSelector(state => state.content.genre);
  const artistsByGenre = useAppSelector(state => state.content.artistsByGenre);
  const dispatch = useAppDispatch();

  const handleMouseOut = () => {
    setShowCategories(false)
  };

  return (
    <Page>
      <Breadcrumbs>
        <Link href="/" passHref>
          <ReturnButton><ArrowLeft size={16} />Voltar</ReturnButton>
        </Link>

        <BreadcrumbsCategories>
          <h4 onClick={() => setShowCategories(!showCategories)}>Categorias</h4>
        </BreadcrumbsCategories>

        {showCategories && (
          <ul>
            {genre && genre.map(({ id, name }) => (
              <li
                key={id}
                onClick={async () => {
                  setShowCategories(false)
                  const response = await axios.get(`http://localhost:5000/genre/${id}`);
                  const data = response.data;
                  dispatch(setArtistsByGenre(data.data));
                }}
              >
                {name}
              </li>
            ))}
          </ul>)}
      </Breadcrumbs>

      <Cards>
        {artistsByGenre && artistsByGenre.map(({ id, name, picture_xl }) => (
          <a
            href={`https://www.deezer.com/artist/${id}`}
            target="_blank" rel="noreferrer"
            key={id}
          >
            <Card
              key={id}
              id={id}
              mainText={name}
              picture={picture_xl}
            />
          </a>
        ))}
      </Cards>
    </Page>
  )
}

export default GenrePage;

const Page = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;
`;

const Breadcrumbs = styled.div`
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

const BreadcrumbsCategories = styled.div`
  // background: purple;

  }
`;

const Cards = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

`;
