import axios from "axios";

const API = axios.create({
  baseURL: "https://api-kenzie-burguer.herokuapp.com/",
});

export default API;
