import axios from "axios";
import config from "../config/config";

const APIService = {
  getData: async (args) => {
    try {
      const { data } = axios.get(getUrl(args), getHeaders());
      return data;
    } catch (error) {
      console.log("Error occurred while getting data...");
    }
  },
};

const getUrl = (url) => {
  return config.baseurl + url;
};

const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {};
};

export default APIService;
