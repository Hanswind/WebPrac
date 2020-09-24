import React from "react";
import axios from "axios";

const Word = () => {
  const words = "";
  const getWord = async () => {
    words = await axios
      .get("https://opendict.korean.go.kr/api/search")
      .then((res) => console.log(res.json()));
  };

  return (
    <div>
      <button onClick={getWord}>불러오기</button>
      {words}
    </div>
  );
};

export default Word;
