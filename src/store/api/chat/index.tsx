/** @format */

import axios from "axios";
import { REQUEST_API_URL } from "../../../config/config";

const PREFIX = "publicchat";

export const supportChatAPI = async (params: FormData) =>
  axios.post(`${REQUEST_API_URL}/supportchat/history`, params);

export const publicChatAPI = async () =>
  axios.post(`${REQUEST_API_URL}/${PREFIX}/history`);
