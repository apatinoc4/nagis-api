import express from "express";
import path from "path";
import unitRoutes from "./routes/wotv/unitRoutes.js";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api/wotv/units", unitRoutes);
