import axios from "axios";

const Getapi = async (Url) => {
    try {
        const baseUrl = import.meta.env.BASE_URL;
        const response = await axios.get(`${baseUrl}${Url}`);
        return response;
    } catch (error) {
       console.log(error);
        throw error;
    }
}
export default Getapi;