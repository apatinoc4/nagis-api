import { Router } from "express";
import unitsController from "../../controllers/wotv/unitsController.js";

const unitRoutes = new Router();

unitRoutes.get("/unit", unitsController.getUnitByName);

export default unitRoutes;
