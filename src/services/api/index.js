import axios from "axios";
import speeches from "./speeches";

const base = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export default {
  base,
  speeches,
};
