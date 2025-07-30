import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import AdSense from "../components/AdSense";

const NewsDetail = () => {
  const location = useLocation();
  const { article } = location.state || {};
  const { id } = useParams();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  if (!article) {
    return (
      <p className="text-center mt-10 text-red-500">
        No article data available.
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>

      <p className="text-sm text-gray-500 mb-4">
        {article.source_id} |{" "}
        {article.pubDate
          ? new Date(article.pubDate).toLocaleString()
          : "Unknown date"}
      </p>

      <AdSense slot="8372469481" className="mb-6" />

      {article.image_url && (
        <img
          src={article.image_url}
          alt="News"
          className="w-full h-auto mb-4 rounded"
        />
      )}

      <AdSense slot="7621327309" className="mb-6" />

      <p className="text-gray-700 mb-6 text-justify text-base leading-relaxed">
        {article.content ||
          article.description ||
          "Full article content not available."}
      </p>

      <AdSense slot="8623561263" className="mb-6" />

      <a
        href={article.link || article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mt-4 block"
      >
        Read full article on source site
      </a>
    </div>
  );
};

export default NewsDetail;