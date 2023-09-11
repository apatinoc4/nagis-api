import cors from "cors";
import express from "express";
import imageRouter from "./routes/wotv/imgRoutes.js";
import unitsRouter from "./routes/wotv/unitRoutes.js";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
});

app.listen(port, () => {
  console.log(`Nagis-api now listening on port ${port} 🔥🔥`);
});

app.use(cors());

app.use(express.static("public"));

app.use("/api/wotv/images", imageRouter);
app.use("/api/wotv/units", unitsRouter);

export default app;
