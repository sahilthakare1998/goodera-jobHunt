// import axios from "./axios";
import axios from "axios";
import { baseUrl } from "./constant";

export const getJobCards = async () => {
  let response = await axios
    .get(`https://www.themuse.com/api/public/jobs`, { params: { page: 0 } })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return response;
};
