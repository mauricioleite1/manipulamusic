import { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../redux/app/hooks.ts';
import { setChart } from '../redux/contentSlice';

export default function Home() {
  const chart = useAppSelector(state => state.content.chart);
  const results = useAppSelector(state => state.content.results);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (chart) {
      console.log(chart);
    }
  }, [chart])


  const handleClick = async () => {
    const response = await axios.get('http://localhost:5000/chart');
    const data = response.data;
    dispatch(setChart(data));
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>

      {results && results.data.map((result) => (
          <h6 key={result.id}>{result.title}</h6>
      ))}
    </div>
  );
};
