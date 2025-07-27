import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopHeadlines } from "../utils/newsApi";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [latestHeadlines, setLatestHeadlines] = useState([]);
  const [affiliateLinks, setAffiliateLinks] = useState([]);

  // Initialize Google AdSense
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  // Load top news articles for main section
  useEffect(() => {
    const loadNews = async () => {
      const news = await fetchTopHeadlines();
      setArticles(news);
    };
    loadNews();
  }, []);

  // Load latest headlines for sidebar (every 5 minutes)
  useEffect(() => {
    const loadLatestNews = async () => {
      const news = await fetchTopHeadlines();
      setLatestHeadlines(news.slice(0, 6)); // ✅ Fetch top 6
    };
    loadLatestNews();
    const interval = setInterval(loadLatestNews, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Load affiliate links from public/affiliateLinks.json
  useEffect(() => {
    const fetchAffiliateLinks = async () => {
      try {
        const res = await fetch("/affiliateLinks.json");
        const data = await res.json();
        setAffiliateLinks(data);
      } catch (err) {
        console.error("Error loading affiliate links", err);
      }
    };
    fetchAffiliateLinks();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-4">
      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white p-2 mb-4 font-semibold">
        <div className="ticker-label">BREAKING NEWS</div>
        <marquee behavior="scroll" direction="left">
          {latestHeadlines.map((n, i) => (
            <span key={i} className="mx-4">🗞️ {n.title}</span>
          ))}
        </marquee>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - News */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Top Headlines</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {articles.map((article, idx) => (
              <NewsCard key={idx} article={article} index={idx} />
            ))}
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="bg-gray-100 p-4 rounded shadow-sm space-y-6">
          {/* Google AdSense Unit 1 */}
          <div>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-7369141258488031"
              data-ad-slot="7621327309"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>

          {/* Latest Headlines Set 1 */}
          <div>
            <h3 className="font-semibold mb-2">Latest Updates</h3>
            <ul className="space-y-4">
              {latestHeadlines.slice(0, 3).map((news, idx) => (
                <li key={idx} className="flex flex-col items-start">
                  {news.urlToImage && (
                    <Link to={`/news/${idx}`} state={{ article: news }}>
                      <img
                        src={news.urlToImage}
                        alt="thumbnail"
                        className="w-full h-28 object-cover rounded mb-1"
                      />
                    </Link>
                  )}
                  <Link
                    to={`/news/${idx}`}
                    state={{ article: news }}
                    className="text-sm font-semibold hover:underline"
                  >
                    {news.title.slice(0, 80)}...
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Google AdSense Unit 2 */}
          <div>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-7369141258488031"
              data-ad-slot="8372469481"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>

          {/* Affiliate Links */}
          <div>
            <h3 className="font-semibold mb-2">Deals & Offers</h3>
            <ul className="text-sm space-y-2 text-blue-600">
              {affiliateLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Headlines Set 2 (Different News) */}
          {latestHeadlines.length >= 6 && (
            <div>
              <h3 className="font-semibold mb-2">More Headlines</h3>
              <ul className="space-y-4">
                {latestHeadlines.slice(3, 6).map((news, idx) => (
                  <li key={idx + 3} className="flex flex-col items-start">
                    {news.urlToImage && (
                      <Link to={`/news/${idx + 3}`} state={{ article: news }}>
                        <img
                          src={news.urlToImage}
                          alt="thumbnail"
                          className="w-full h-28 object-cover rounded mb-1"
                        />
                      </Link>
                    )}
                    <Link
                      to={`/news/${idx + 3}`}
                      state={{ article: news }}
                      className="text-sm font-semibold hover:underline"
                    >
                      {news.title.slice(0, 80)}...
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-xs text-center text-gray-500 mt-6 border-t pt-4">
        <p>© 2025 NewsHub. All Rights Reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
