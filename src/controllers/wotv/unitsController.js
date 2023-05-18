import {
  getUnitBody,
  getUnitNameKey,
  getAllUnitsBodies,
  getUnitsBySearchTerm,
} from "../../models/wotv/models.js";

const validateUnitVariant = (unitBody) =>
  unitBody.voiceId !== `${unitBody.charaId}_00`
    ? unitBody.voiceId
    : unitBody.charaId;

const unitsController = {
  getUnitByKey: async (req, res) => {
    const unitKey = req.query.key;
    const nameKey = await getUnitNameKey(unitKey);

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
  getSearchUnitsByName: async (req, res) => {
    const searchTerm = req.query.name;
    const unitBodies = await getAllUnitsBodies();
    const searchResults = await getUnitsBySearchTerm(searchTerm, unitBodies);

    if (searchResults) {
      return res.send(searchResults);
    } else {
      res.status(404).send({ message: "unit does not exist" });
    }
  },
};

export default unitsController;
