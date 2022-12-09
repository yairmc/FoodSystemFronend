import axios from "axios";
let url = "http://localhost:3001";
const getAllIngredients = async () => {
    const { data } = await axios.get(`${url}/ingredients`);
    return data;
}
const addNewIngredient = async (ingredient) => {
    const { data } = await axios.post(`${url}/ingredients`, ingredient);
    return data;
}

const updateIngredientById = async (idIngredient, ingredient) => {
    const { data } = await axios.put(`${url}/ingredients/${idIngredient}`, ingredient);
    return data;
}
const deleteIngredientById = async (idIngredient) => {
    const { data } = await axios.delete(`${url}/ingredients/${idIngredient}`);
    return data;
}

export {
    getAllIngredients,
    addNewIngredient,
    updateIngredientById,
    deleteIngredientById,
}

