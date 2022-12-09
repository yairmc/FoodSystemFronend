import { createContext, useState } from 'react';
import * as ingredientAPI from "../API/ingredientsAPI";

const IngredientContext = createContext();
const IngredientProvider = ({ children }) => {
    const [ingredientValues, setIngredientValues] = useState({
        ingredients: [],
        ingredientInfo: {
            name: "",
            stock: 1
        },
        ingredientFound: null,
        action: { idIngredient: -1, action: "void" },
        errorAction: { message: "", state: false }
    });
    const {
        addNewIngredient,
        deleteIngredientById,
        getAllIngredients,
        updateIngredientById
    } = ingredientAPI;

    //Handles
    const hadleOnChangeNewIngredient = (e) => {
        const { name, value, type } = e.target;
        console.log(type);
        setIngredientValues({
            ...ingredientValues,
            ingredientInfo: {
                ...ingredientValues.ingredientInfo,
                [name]: name === "stock" ? Number(value) : value
            }
        });
    }
    const handleSelectIngredient = (idIngredient, action) => {
        if (idIngredient !== -1) {
            const ingredientFound = ingredientValues.ingredients.find(ingredient => ingredient.id === idIngredient);
            setIngredientValues({
                ...ingredientValues,
                action: { idIngredient: ingredientFound.id, action },
                ingredientInfo: { ...ingredientFound },
                ingredientFound,
            });
        } else {
            setIngredientValues({
                ...ingredientValues,
                action: { idIngredient: idIngredient, action },
                ingredientFound: null,
                ingredientInfo: {
                    name: "",
                    stock: 1
                }
            });
        }

    }
    const handleResetAction = () => {
        setIngredientValues({
            ...ingredientValues,
            ingredientInfo: {
                name: "",
                stock: 1
            },
            ingredientFound: null,
            action: { idIngredient: -1, action: "void" },
            errorAction: { message: "", state: false }
        });
    }
    //Flows
    const handleGetIngredients = async () => {
        try {
            const ingredients = await getAllIngredients();
            setIngredientValues({
                ...ingredientValues,
                ingredients: ingredients
            });
        } catch (error) {
            console.log(error);
        }
    }
    const handleAddIngredient = async (e) => {
        e.preventDefault();
        const valuesIngredientInfo = Object.values(ingredientValues.ingredientInfo);
        const isValidInfo = valuesIngredientInfo.includes("");
        try {
            if (!isValidInfo) {
                const ingredientAdded = await addNewIngredient(ingredientValues.ingredientInfo);
                setIngredientValues({
                    ...ingredientValues,
                    ingredients: [...ingredientValues.ingredients, ingredientAdded],
                    ingredientInfo: {
                        name: "",
                        stock: 1
                    },
                    ingredientFound: null,
                    action: { idIngredient: -1, action: "void" },
                    errorAction: { message: "", state: false }
                });
            } else {
                setIngredientValues({
                    ...ingredientValues,
                    errorAction: { state: true, message: "All inputs are required" }
                });
                setTimeout(() => {
                    setIngredientValues({
                        ...ingredientValues,
                        errorAction: { state: false, message: "" }
                    });
                }, 3000);
            }

        } catch (error) {
            console.log(error);
        }
    }
    const handleUpdateIngredient = async (e) => {
        e.preventDefault()
        const valuesIngredientInfo = Object.values(ingredientValues.ingredientInfo);
        const isValidInfo = valuesIngredientInfo.includes("");
        try {
            if (!isValidInfo) {
                const { ingredientFound, ingredientInfo } = ingredientValues;
                if (ingredientFound) {
                    await updateIngredientById(ingredientFound.id, ingredientInfo);
                    handleResetAction();
                    await handleGetIngredients();
                }

            } else {
                setIngredientValues({
                    ...ingredientValues,
                    errorAction: { state: true, message: "All inputs are required" }
                });

                setTimeout(() => {
                    setIngredientValues({
                        ...ingredientValues,
                        errorAction: { state: false, message: "" }
                    });
                }, 3000);
            }

        } catch (error) {
            console.log(error);
        }

    }
    const handleDeleteIngredient = async (e) => {
        e.preventDefault();
        try {

            const ingredientToDelete = ingredientValues.ingredients.find(ingredient => ingredient.id === ingredientValues.ingredientFound.id);

            if (ingredientToDelete) {
                await deleteIngredientById(ingredientValues.ingredientFound.id);
                await handleGetIngredients();
            }

        } catch (error) {

        }
    }
    const loadPageIngredinets = async () => {
        try {
            await handleGetIngredients();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <IngredientContext.Provider
            value={{
                ...ingredientValues,
                handleSelectIngredient,
                handleAddIngredient,
                handleGetIngredients,
                handleUpdateIngredient,
                handleDeleteIngredient,
                hadleOnChangeNewIngredient,
                loadPageIngredinets,
                handleResetAction
            }}
        >
            {children}
        </IngredientContext.Provider>
    )
}

export { IngredientProvider };
export default IngredientContext;