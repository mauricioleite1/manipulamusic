import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';

const GenrePage = () => {
  const artistsByGenre = useAppSelector(state => state.content.artistsByGenre);

  return (
    <Page>
      This is the genre page
      { artistsByGenre && artistsByGenre.map(({ id, name, picture_xl }) => <h4 key={id}>{name}</h4> )  }
    </Page>
  )
}

export default GenrePage;

const Page = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 70vh;
`;
