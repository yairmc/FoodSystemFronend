import axios from "axios";

let url = "http://localhost:3001";
const fetchAllProducts = async () => {
    try {
        const { data } = await axios.get(`${url}/products`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchAllProducts
}