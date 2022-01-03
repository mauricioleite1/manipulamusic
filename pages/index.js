import React, { useEffect } from "react";
import styled from "styled-components";
import { initialInfo } from "../services";
import { useAppSelector, useAppDispatch } from "../redux/app/hooks.ts";
import Hero from "../components/Home/Hero";
import GenreSection from "../components/Home/GenreSection";
import ListsSection from "../components/Home/Lists";

const Home = () => {
  const dispatch = useAppDispatch();
  const genre = useAppSelector((state) => state.content.genre);
  const results = useAppSelector((state) => state.content.genre);

  useEffect(() => {
    if (!results || results >= 10) { initialInfo(dispatch); }
  }, [dispatch, results]);

  return (
    <Page>
      <Hero />
      <ListsSection />
      {genre && <GenreSection />}
    </Page>
  );
}

const Page = styled.div`
  background: white;
  margin: auto;
  width: 100%;

  h5 {
    font-family: Inter;
    font-weight: 400;
  }
`;

export default Home;
