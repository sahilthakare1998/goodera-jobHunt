import Axios from "axios";
import { baseUrl } from "./constant";


const axios = Axios.create({
  baseURL: baseUrl,
});


axios.interceptors.request.use((request) => {
  request.headers["Authorization"] = `token`;
  request.headers["Content-Type"] = "application/json";
  return request;
});
axios.interceptors.response.use((response) => { 
  return response
},
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        error.response.data.detail = "Invalid Token";
      }
    }
    return Promise.reject(error);
  }
);

export default axios;