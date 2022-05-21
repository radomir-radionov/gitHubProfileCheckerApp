import axios from "axios";

export const getUserRequest = async (name) => {
  const result = await axios.get(`https://api.github.com/users/${name}`);
  return result.data;
};
