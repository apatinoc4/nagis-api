import { getUnitBody, getUnitNameKey } from "../../models/wotv/models.js";

const unitsController = {
  getUnitByName: async (req, res) => {
    const unitName = req.query.name;
    const nameKey = await getUnitNameKey(unitName);
    const unitBody = await getUnitBody(nameKey.key);

    const formattedUnit = {
      ...unitBody,
      name: nameKey.value,
    };

    return res.send(formattedUnit);
  },
};

export default unitsController;
