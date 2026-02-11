import express from "express";
import cors from "cors";

import { summaryRouter } from "./routes/summary.routes.js";
import { simulateRouter } from "./routes/simulate.routes.js";
import { explainRouter } from "./routes/explain.routes.js";
import { tradeoffRouter } from "./routes/tradeoff.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/summary", summaryRouter);
app.use("/simulate", simulateRouter);
app.use("/explain", explainRouter);

// Housing vs Transport Trade-Off endpoint
app.use("/tradeoff", tradeoffRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
