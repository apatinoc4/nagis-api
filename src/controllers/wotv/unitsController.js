import { getUnitBody, getUnitNameKey } from "../../models/wotv/models.js";

const validateUnitVariant = (unitBody) =>
  unitBody.voiceId !== `${unitBody.charaId}_00`
    ? unitBody.voiceId
    : unitBody.charaId;

const unitsController = {
  getUnitByName: async (req, res) => {
    const unitName = req.query.name;
    const nameKey = await getUnitNameKey(unitName);

    if (nameKey) {
      const unitBody = (await getUnitBody(nameKey?.key)) || {};
      const isLimited = unitBody.collaboType ? true : false;

      const formattedUnit = {
        name: nameKey?.value,
        limited: isLimited,
        image: `/api/wotv/images/unit?imageName=${validateUnitVariant(
          unitBody
        )}`,
      };

      return res.send(formattedUnit);
    } else {
      res.status(404).send({ message: "unit does not exist" });
    }
  },
};

export default unitsController;
