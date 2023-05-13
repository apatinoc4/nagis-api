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

export const getUnitNameKey = async (name) => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/apatinoc4/wotv-ffbe-dump/master/en/UnitName.json"
    );

    if (response.ok) {
      const jsonResponse = await response.json();
      const nameKey = jsonResponse.infos.find((unit) =>
        unit.value.startsWith(name)
      );
      return nameKey;
    } else {
      throw new Error("Error fetching JSON data");
    }
  } catch (error) {
    console.error("Error fetching JSON data:", error);
  }
};

export const getUnitImage = async (imageName) => {
  const imageUrl = `https://raw.githubusercontent.com/apatinoc4/wotv-ffbe-dump/master/img/units/${imageName}.png`;
  const imageResponse = await fetch(imageUrl);
  const imageBuffer = await imageResponse.arrayBuffer();
  const base64Image = Buffer.from(new Uint8Array(imageBuffer)).toString(
    "base64"
  );

  return base64Image;
};