// 서버 연결 코드
import express from 'express'  // express 라이브러리 include - babel ES6
const app = express();   // create application

const port = 4009;  // application local port

const handleListening = () => {
    console.log(`서버 구동 시작... : http://localhost:${port}`)
}

app.listen(port, handleListening);

// 기본 접속 라우팅
app.set("view engine", "pug")

app.get('/', (req, res) => {
    res.render('main')
})


// 컨텐츠 접근 라우팅
import { contentRouter } from "./router";

app.use("/contents", contentRouter);   // /contents 경로로 오면 contentRouter 내부에서 선언한 router 사용 선언