import axios from "axios";

let url = "http://localhost:3001";
const fetchAddOrder = async (order) => {
    try {
        const { data } = await axios.post(`${url}/orders`, order)
        return data;
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchAddOrder
}