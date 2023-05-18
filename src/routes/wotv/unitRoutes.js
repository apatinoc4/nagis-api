import { Router } from "express";
import unitsController from "../../controllers/wotv/unitsController.js";

const unitsRouter = new Router();

unitsRouter.get("/unit", unitsController.getUnitByKey);
unitsRouter.get("/search", unitsController.getSearchUnitsByName);

export default unitsRouter;
