// All api based operations

export const getDictionaryMeaning = async (text) => {
  console.log("text ", text);
  const response = !!text
    ? await fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
        {
          body: null,
          method: "GET"
        }
      )
    : null;
  const out = response ? response.json() : null;
  return out;
};
