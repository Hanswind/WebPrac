import express from "express";
import routes from "../routes";
import { contents, slider } from "../controllers/contentController";

const contentRouter = express.Router();

// localhost/contents/ 뒤에 붙는 경로
contentRouter.get(routes.slider, slider);

export default contentRouter;
