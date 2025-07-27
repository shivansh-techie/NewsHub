import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ article, index }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      {article.urlToImage && (
        <img src={article.urlToImage} alt="news" className="w-full h-48 object-cover rounded" />
      )}
      <h2 className="text-lg font-semibold mt-2">{article.title}</h2>
      <p className="text-sm text-gray-600 mt-1">{article.description}</p>

      <Link
        to={`/news/${index}`}
        state={{ article }}
        className="text-blue-600 hover:underline text-sm mt-2 inline-block"
      >
        Read more
      </Link>
    </div>
  );
};

export default NewsCard;
