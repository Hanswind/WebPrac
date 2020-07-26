import { api } from "./api.js";

export const initSlider = () => {
  // 이미지 fetch
  api.fetchRandom(200, 300).then(({ data }) => {
    console.log(data);
  });
};
