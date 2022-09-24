import data from "./data.json";

export const findData = () => {
  return data;
};

export const getData = (id) => {
  return data.find((d) => d.id === id);
};
