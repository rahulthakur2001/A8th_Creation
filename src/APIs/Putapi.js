import axios from "axios";

const Putapi = async (url, data) => {
  try {
    const baseUrl = import.meta.env.VITE_API_URL; 
    const response = await axios.put(`${baseUrl}${url}`, data, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default Putapi;
