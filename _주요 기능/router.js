import express from "express";

export const contentRouter = express.Router();

contentRouter.get("/slider", (req,res) => res.send("슬라이더"))
