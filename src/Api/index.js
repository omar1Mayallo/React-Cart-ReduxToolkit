import axios from "axios";

const apiUrl = axios.create({baseURL: "https://dummyjson.com"});

export default apiUrl;
