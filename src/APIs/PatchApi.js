import axios from "axios";

const PatchApi = async (url, data) => {
  try {
    const baseUrl = import.meta.env.VITE_API_URL; 

    const response = await axios.patch(`${baseUrl}${url}`, data, {
      withCredentials: true,  
      headers: {
        "Content-Type": "multipart/form-data",  
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default PatchApi;
