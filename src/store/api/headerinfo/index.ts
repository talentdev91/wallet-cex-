import axios from "axios";
import { REQUEST_API_URL } from "../../../config/config";

const PREFIX = "price";

export const headerPriceAPI = async (params: FormData) =>
  axios.post(`${REQUEST_API_URL}/${PREFIX}`, params);
