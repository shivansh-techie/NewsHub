// src/pages/NewsDetail.js
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

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

  // Random ad positions: after title, after image, after content
  const shouldShowAd = () => Math.random() < 0.5;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>

      <p className="text-sm text-gray-500 mb-4">
        {article.source_id} |{" "}
        {article.pubDate
          ? new Date(article.pubDate).toLocaleString()
          : "Unknown date"}
      </p>

      {shouldShowAd() && (
        <ins
          className="adsbygoogle block mb-6"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7369141258488031"
          data-ad-slot="8372469481"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      )}

      {article.image_url && (
        <img
          src={article.image_url}
          alt="News"
          className="w-full h-auto mb-4 rounded"
        />
      )}

      {shouldShowAd() && (
        <ins
          className="adsbygoogle block mb-6"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7369141258488031"
          data-ad-slot="7621327309"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      )}

      <p className="text-gray-700 mb-6 text-justify text-base leading-relaxed">
        {article.content ||
          article.description ||
          "Full article content not available."}
      </p>

      {shouldShowAd() && (
        <ins
          className="adsbygoogle block mb-6"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7369141258488031"
          data-ad-slot="8623561263"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      )}

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
