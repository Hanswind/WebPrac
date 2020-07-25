// 서버 연결 코드
import express from "express"; // express 라이브러리 include - babel ES6
const app = express(); // create application

const port = 4009; // application local port

const handleListening = () => {
  console.log(`서버 구동 시작... : http://localhost:${port}`);
};

app.listen(port, handleListening);

app.set("view engine", "pug");

// 기본 접속 라우팅
import mainRouter from "./routers/mainRouter";
import contentRouter from "./routers/contentRouter";
import routes from "./routes";

app.use(routes.home, mainRouter);
app.use(routes.contents, contentRouter);
