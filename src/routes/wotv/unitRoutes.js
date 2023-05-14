import { Router } from "express";
import unitsController from "../../controllers/wotv/unitsController.js";

const unitsRouter = new Router();

unitsRouter.get("/unit", unitsController.getUnitByName);

export default unitsRouter;
