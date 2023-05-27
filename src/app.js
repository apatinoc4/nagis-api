import cors from "cors";
import express from "express";
import http from "http";
import https from "https";
import fs from "fs";
import imageRouter from "./routes/wotv/imgRoutes.js";
import unitsRouter from "./routes/wotv/unitRoutes.js";

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/wotv/images", imageRouter);
app.use("/api/wotv/units", unitsRouter);

if (process.env.NODE_ENV === "production") {
  const httpsOptions = {
    key: fs.readFileSync("/etc/ssl/private/private.key"),
    cert: fs.readFileSync("/etc/ssl/certs/certificate.crt"),
  };

  // Run the HTTPS server
  https.createServer(httpsOptions, app).listen(port, () => {
    console.log(`Nagis-api now listening on port ${port} (HTTPS) 🔒🔥`);
  });
} else {
  // Run the HTTP server for development
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`Nagis-api now listening on port ${port} (HTTP)`);
  });
}
