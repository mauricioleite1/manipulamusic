const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/chart', (req, res) => {
  axios.get('https://api.deezer.com/chart/0')
    .then(response => res.status(200).json(response.data))
})

app.get('/genre', (req, res) => {
  axios.get('https://api.deezer.com/genre')
    .then(response => res.status(200).json(response.data))
})

app.get('/genre/:id', (req, res) => {
  const {id} = req.params;

  axios.get(`https://api.deezer.com/genre/${id}/artists`)
    .then(response => res.status(200).json(response.data))
})

app.get('/search', (req, res) => {
  const { q, index } = req.query;

  axios.get(`https://api.deezer.com/search?q=${q}&index=${index}`)
    .then(response => res.status(200).json(response.data))
})

app.listen(5000, () => {
  console.log('rodando na porta 5000');
});
