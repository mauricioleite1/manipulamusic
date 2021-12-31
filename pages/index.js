import axios from 'axios';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../redux/app/hooks.ts';
import { setChart } from '../redux/contentSlice';

export default function Home() {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    const response = await axios.get('http://localhost:5000/chart');
    const data = response.data;
    dispatch(setChart(data));
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
