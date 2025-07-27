import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API;

export const fetchTopHeadlines = async () => {
  const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=en`;
  const response = await axios.get(url);
  return response.data.results; // use `results` instead of `articles`
};

export const fetchNewsByCategory = async (category) => {
  const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${category}&country=in&language=en`;
  const response = await axios.get(url);
  return response.data.results;
};
