import axios from "axios"
let url = "http://localhost:3001";
const fetchLogin = async (credentials) => {
    try {
        const { data } = await axios.post(`${url}/auth`, credentials);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchLogin
}