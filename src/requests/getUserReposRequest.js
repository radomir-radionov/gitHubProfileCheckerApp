import axios from "axios";

export const getUserReposRequest = async (name) => {
  const result = await axios.get(`https://api.github.com/users/${name}/repos`);
  return result.data;
};
