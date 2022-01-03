import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../redux/app/hooks.ts";
import BottomList from "./BottomList";
import LoadingSpinner from "../../../LoadingSpinner";
import TopList from "./TopList";

const HeroList = ({ data }) => {
  const isLoading = useAppSelector((state) => state.page.isLoading);

  return (
    <Container>
      {!isLoading ? <TopList data={data} /> : <LoadingSpinner />}
      <BottomList />
    </Container>
  );
};

export default HeroList;

const Container = styled.section`
  align-items: center;
  background-image: linear-gradient(43deg, #85ffbd 0%, #6667ab 100%);
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding-top: 4rem;
  width: 100%;

  @media (max-width: 1024px) {
    padding-top: 1rem;
  }
`;
