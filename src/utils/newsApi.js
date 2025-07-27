import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API;

export const fetchTopHeadlines = async () => {
  const url = `https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&pageSize=12&apiKey=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.articles;
};

export const fetchNewsByCategory = async (category) => {
  const url = `https://newsapi.org/v2/everything?q=${category}%20india&sortBy=publishedAt&pageSize=12&apiKey=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.articles;
};
