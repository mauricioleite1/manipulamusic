import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../../redux/app/hooks.ts';
import { setResults } from '../../../redux/contentSlice';
import { HomeText } from '../../../language';
import Track from '../Track';
import TopList from './TopList';
import LoadingSpinner from '../LoadingSpinner';

const HeroList = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(25);
  const observer = useRef();

  const language = useAppSelector(state => state.userPreferences.language);
  const resultsList = useAppSelector(state => state.content.resultsList);
  const searchInput = useAppSelector(state => state.content.search)
  const isLoading = useAppSelector(state => state.page.isLoading);
  const dispatch = useAppDispatch();

  const lastElement = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect
    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        if (hasMore && searchInput) {
          setLoading(true)
          const response = await axios.get(`http://localhost:5000/search?q=${searchInput}&index=${page}`);
          dispatch(setResults([...resultsList, ...response.data.data]));
          setPage(page + 25)
          if (response.data.data.length === 0) { setHasMore(false) }
          setLoading(false)
        }
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, resultsList, page, searchInput, dispatch, hasMore]);

  return (
    <Container>
      {!isLoading 
        ? <TopList data={data} />
        : <LoadingSpinner />
      
      }

      {/* <LoadingSpinner /> */}
      <List>
        <MaisTitle>
          {!isLoading
            && resultsList.length === 10
            && HomeText.mostPlayed[language]
          }
        </MaisTitle>

        {!isLoading && resultsList && resultsList.map((result, index) => (
          <Track
            key={result.id}
            duration={result.duration}
            isLast={resultsList.length === index + 1 ? true : false}
            lastElement={lastElement}
            link={result.link}
            name={result.artist.name}
            position={result.position}
            preview={result.preview}
            result={result}
            title={result.title}
          />)
        )}

        {isLoading && <h4>Buscando resultados...</h4>}
      </List>
    </Container>
  )
}

export default HeroList;

const Container = styled.section`
  align-items: center;
  background: #6667ab;
  background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  padding-top: 4rem;
  width: 100%;

  @media(max-width: 1024px) {
    padding-top: 1rem;    
  }
`;

const MaisTitle = styled.h2`
  background: #121FCF;
  background:
  linear-gradient(
    40deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(100, 200, 192,0.8) 46%,
    rgba(100, 200, 100,0.8) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0.1rem;
  position: absolute;
  top: 0;
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction column;
  gap: 8px;
  height: 21rem;
  list-style-type: none;
  margin: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  padding-top: 2.5rem;

  @media(max-width: 1024px) {
    border-bottom: 1px solid lightgrey;
    height: 30rem;
    gap: 0;
    width: 95vw;
  }

  audio { 
    height: 20px;
    
    @media(max-width: 1024px) {
      height: 2.5rem;
    }
  }
`;
