const getFirstOccurrences = (array) => {
  const seenValues = new Set();

  return array.reduce((firstOccurrences, obj) => {
    const { value } = obj;

    if (!seenValues.has(value)) {
      seenValues.add(value);
      firstOccurrences.push(obj);
    }

    return firstOccurrences;
  }, []);
};

export const getUnitBody = async (nameKey) => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/apatinoc4/wotv-ffbe-dump/master/data/Unit.json"
    );

    if (response.ok) {
      const jsonResponse = await response.json();
      const unitBody = jsonResponse.items.find(
        (unit) => unit.iname === nameKey
      );

      return unitBody;
    } else {
      throw new Error("Error fetching JSON data");
    }
  } catch (error) {
    console.error("Error fetching JSON data:", error);
  }
};

export const getUnitNameKey = async (key) => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/apatinoc4/wotv-ffbe-dump/master/en/UnitName.json"
    );

    if (response.ok) {
      const jsonResponse = await response.json();
      const nameKey = jsonResponse.infos.find((unit) => unit.key === key);

      return nameKey;
    } else {
      throw new Error("Error fetching JSON data");
    }
  } catch (error) {
    console.error("Error fetching JSON data:", error);
  }
};

export const getAllUnitsBodies = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/apatinoc4/wotv-ffbe-dump/master/data/Unit.json"
    );

    if (response.ok) {
      const jsonResponse = await response.json();
      const unitBodies = jsonResponse.items.filter((unit) => unit.trust);

      return unitBodies;
    } else {
      throw new Error("Error fetching JSON data");
    }
  } catch (error) {
    console.error("Error fetching JSON data:", error);
  }
};

export const getUnitsBySearchTerm = async (searchTerm, unitBodies) => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/apatinoc4/wotv-ffbe-dump/master/en/UnitName.json"
    );

    if (response.ok) {
      const decodedSearchTerm = decodeURIComponent(searchTerm);
      const jsonResponse = await response.json();
      const searchTermWords = decodedSearchTerm.toLowerCase().split(" ");
      const playableCharacters = jsonResponse.infos.filter((unit) =>
        unitBodies.find(
          (playableCharacter) => playableCharacter.iname === unit.key
        )
      );
      const matchingUnits = playableCharacters.filter((unit) =>
        searchTermWords.every((word) => unit.value.toLowerCase().includes(word))
      );
      const filteredUnits = getFirstOccurrences(matchingUnits);

      return filteredUnits;
    } else {
      throw new Error("Error fetching JSON data");
    }
  } catch (error) {
    console.error("Error fetching JSON data:", error);
  }
};
