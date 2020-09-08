import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "../../node_modules/axios/index";

const NewsListBlock = styled.div``;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async 사용 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        // 카테고리에 따라 요청 주소 지정
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  return (
    <>
      {loading ? (
        <div>뉴스를 가져오는중...</div>
      ) : (
        <NewsListBlock>
          {articles &&
            articles.map((article) => (
              <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
      )}
    </>
  );
};

export default NewsList;
