import axios from "axios";

//axios.defaults.withCredentials = true;
//axios.defaults.withXSRFToken = true;
const api = axios.create({
  baseURL: "/api",
});

export default api;
