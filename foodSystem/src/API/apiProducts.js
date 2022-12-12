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

const fetchAddProduct = async (product) => {
    try {
        const { data } = await axios.post(`${url}/products`, product);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const fetchUpdateProduct = async (product) => {
    try {
        const { data } = await axios.put(`${url}/products/${product.id}`, product);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const fetchDeleteProduct = async (idProduct) => {
    try {
        const { data } = await axios.delete(`${url}/products/${idProduct}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}


export {
    fetchAllProducts,
    fetchAddProduct,
    fetchUpdateProduct,
    fetchDeleteProduct
}