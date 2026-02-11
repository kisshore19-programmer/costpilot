import express from "express";
import { compareHousingOptions } from "../engine/tradeoff.js";

export const tradeoffRouter = express.Router();

tradeoffRouter.post("/", (req, res) => {
  const { optionA, optionB } = req.body;

  const result = compareHousingOptions(optionA, optionB);

  res.json(result);
});
