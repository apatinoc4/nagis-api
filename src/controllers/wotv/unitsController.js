import {
  getUnitBody,
  getUnitImage,
  getUnitNameKey,
} from "../../models/wotv/models.js";

const unitsController = {
  getUnitByName: async (req, res) => {
    const unitName = req.query.name;
    const nameKey = await getUnitNameKey(unitName);
    const unitBody = (await getUnitBody(nameKey.key)) || {};
    const unitImg = await getUnitImage(unitBody.charaId);
    const isLimited = unitBody.collaboType ? true : false;

    const formattedUnit = {
      name: nameKey.value,
      limited: isLimited,
      ...unitBody,
    };

    return res.send(formattedUnit);
  },
};

export default unitsController;
