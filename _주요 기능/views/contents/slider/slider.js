import { api } from "./api.js";


const init = () => {
    // 이미지 fetch
    api.fetchRandom(200, 300).then(({data}) => {
        console.log(data);
    })
}

init();

