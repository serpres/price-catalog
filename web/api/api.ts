import axios from "axios";

const exchangeApi = axios.create({
  baseURL: "https://free.currconv.com/",
});

exchangeApi.interceptors.request.use((config) => {
  config.url = config.url! + "&apiKey=" + process.env.CURRENCY_API_KEY;
  return config;
});

export { exchangeApi };
