import axios from "axios";

const Postapi = async (Url, data) => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    console.log(`API URL: ${baseUrl}${Url}`);
    const response = await axios.post(`${baseUrl}${Url}`, data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default Postapi;
