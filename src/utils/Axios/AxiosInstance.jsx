import axios from "axios";

const BASE_URL = "http://botvx.pro/api/v1/";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Gắn Interceptor để tự động thêm Accept-Language
instance.interceptors.request.use((config) => {
  const language = localStorage.getItem("language") || "vi"; // Mặc định là Tiếng Việt nếu không có trong localStorage
  config.headers["Accept-Language"] = language; // Gắn header Accept-Language
  return config;
});

export default instance;
