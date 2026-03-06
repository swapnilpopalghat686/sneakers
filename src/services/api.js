import axios from "axios";

const API = axios.create({
  baseURL: "https://sneakers-backend-njna.onrender.com/api",
});

export default API;