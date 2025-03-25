import axios from "axios";

export async function postApi(url, data) {
  try {
    const baseURL = import.meta.env.VITE_API_URL;

    console.log("Base URL:", baseURL);

    if (!baseURL) {
      throw new Error("VITE_API_URL is not set correctly in your environment variables.");
    }
    const response = await axios.post(`${baseURL}${url}`, data);
    return response.data;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
}

export default postApi;
