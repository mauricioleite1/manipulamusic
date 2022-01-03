import axios from 'axios';
import { setChart, setGenreList, setResults } from '../redux/contentSlice';

export const convertTime = (duration) => {
  const hours = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  let ret = "";
  if (hours > 0) { ret += "" + hours + ":" + (mins < 10 ? "0" : ""); }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

export const initialInfo = (dispatch) => {
  getChart(dispatch)
  getGenreList(dispatch)
}

export const getChart = async (dispatch) => {
  const response = await axios.get('http://localhost:5000/chart');
  const data = response.data;
  dispatch(setChart(data));
  dispatch(setResults(data.tracks.data));
}

export const getGenreList = async (dispatch) => {
  const response = await axios.get('http://localhost:5000/genre');
  const data = response.data;
  dispatch(setGenreList(data.data));
}
