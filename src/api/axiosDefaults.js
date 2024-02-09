import axios from "axios";

axios.defaults.baseURL = 'https://crf-api-1-952b00a16d56.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();