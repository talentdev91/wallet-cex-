/** @format */

import axios from "axios";
import { REQUEST_API_URL } from "../../../config/config";

const PREFIX = "tradehistory";

export const tradeListsAPI = async (params: FormData) =>
  axios.post(`${REQUEST_API_URL}/${PREFIX}/pair`, params);
