import axios from "axios";
import config from "./config"

const instance = axios.create({
  baseURL: "http://192.168.43.93:8080/api"
})

export default instance;