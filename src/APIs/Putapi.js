import axios from "axios";

const Putapi = async () => {
    try {
        const baseUrl = import.meta.env.BASE_URL;
        const response = await axios.put(`${baseUrl}${Url}`, data);
        return response.data;
    } catch (error) {
       console.log(error);
        throw error;
    }
}
export default Putapi;