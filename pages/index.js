import axios from 'axios';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../redux/app/hooks.ts';
import { setChart } from '../redux/contentSlice';
import Hero from '../components/Home/Hero';
import { useEffect } from 'react';

export default function Home() {
  const chart = useAppSelector(state => state.content.chart);
  const results = useAppSelector(state => state.content.results);

  const dispatch = useAppDispatch();

  const getChart = async () => {
    const response = await axios.get('http://localhost:5000/chart');
    const data = response.data;
    dispatch(setChart(data));
  }

  useEffect(() => {
    getChart()
  }, [])

  return (
    <div>
      <Hero />
      {/* <button onClick={handleClick}>Get Chart</button> */}
    </div>
  );
};
