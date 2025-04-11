import axios from "axios";

const Getapi = async (Url) => {
  try {
    const baseUrl = import.meta.env.VITE_API_URL; 
    const response = await axios.get(`${baseUrl}${Url}`, {
      withCredentials: true, 
    });
    return response;
  } catch (error) {
    console.error("Getapi error:", error);
    throw error;
  }
};

export default Getapi;
