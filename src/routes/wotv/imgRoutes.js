import { Router } from "express";
import { existsSync } from "fs";
import path from "path";

const imageRouter = Router();

imageRouter.get("/unit", (req, res) => {
  const { imageName } = req.query;
  const imagePath = path.join(
    process.cwd(),
    "public",
    "images",
    "wotv",
    "units",
    `${imageName}.png`
  );
  const unknownImagePath = path.join(
    process.cwd(),
    "public",
    "images",
    "wotv",
    "units",
    "Unknown.png"
  );

  if (existsSync(imagePath)) {
    return res.sendFile(imagePath);
  }

  return res.sendFile(unknownImagePath);
});

export default imageRouter;
