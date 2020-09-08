import React, { useState, useCallback } from "react";
import dotenv from "dotenv";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

dotenv.config();

const App = () => {
  // 현재 선택된 카테고리
  const [category, setCategory] = useState("all");

  // 현재 선택 카테고리 전환 함수
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </>
  );
};

export default App;
