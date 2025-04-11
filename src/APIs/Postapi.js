import axios from "axios";

export async function PostApi(url, data) {
  try {
    const baseURL = import.meta.env.VITE_API_URL;

    const response = await axios.post(`${baseURL}${url}`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
}

export default PostApi;
