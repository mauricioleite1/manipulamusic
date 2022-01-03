import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../redux/app/hooks.ts";
import Card from "../../components/Card";
import Breadcrumbs from "../../components/Genre/Breadcrumbs";

const GenrePage = () => {
  const artistsByGenre = useAppSelector(
    state => state.content.artistsByGenre
  );

  return (
    <Page>
      <Breadcrumbs />
      <Cards>
        {artistsByGenre &&
          artistsByGenre.map(({ id, name, picture_xl }) => (
            <a
              href={`https://www.deezer.com/artist/${id}`}
              target="_blank"
              rel="noreferrer"
              key={id}
            >
              <Card key={id} id={id} mainText={name} picture={picture_xl} />
            </a>
          ))}
      </Cards>
    </Page>
  );
}

export default GenrePage;

const Page = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;
`;

const Cards = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
