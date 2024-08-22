// axiosInstance.js

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8805",
  // baseURL: "https://api.himalayansaffron.in",
  headers: {
    "Content-Type": "application/json",
  },
});
//
export default instance;
