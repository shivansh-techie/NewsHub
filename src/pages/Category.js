import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsByCategory } from "../utils/newsApi";

import NewsCard from "../components/NewsCard";

const Category = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const articles = await fetchNewsByCategory(category);

      setArticles(news);
    };
    loadNews();
  }, [category]);

  return (
    <div className="container">
      <h2>{category.toUpperCase()} News</h2>
      {articles.map((article, idx) => (
        <NewsCard key={idx} article={article} />
      ))}
    </div>
  );
};

export default Category;
