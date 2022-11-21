let ingredients = [];
let ingredientsContainer = document.querySelector("#ingredients-container");
let btnAdd = document.querySelector("#btnAdd");

document.addEventListener("DOMContentLoaded", async () => {
    await fetctIngredients();
    loadIngredientsToHTML(ingredients);
    addListeners();
});

const addListeners = () => {
    btnAdd.addEventListener("click", addProduct);
};

const fetctIngredients = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("token-food"));
        const response = await fetch("http://localhost:3001/ingredients", {
            headers: { Authorization: `Bearer ${token}` },
        });
        ingredients = await response.json();
    } catch (error) {
        console.log(error);
        ingredients = [{ name: "No ingredients" }];
    }
};

const loadIngredientsToHTML = (ingredientList) => {
    ingredientsContainer.innerHTML = "";
    ingredientList.forEach((ingredient, index) => {
        const { id, name } = ingredient;
        const ingredientArea = document.createElement("div");
        ingredientArea.classList.add("ingredientArea");
        const ingredientLabel = document.createElement("label");
        const ingredientCheck = document.createElement("input");
        ingredientCheck.type = "checkbox";
        ingredientArea.id = index;
        ingredientLabel.textContent = name;
        ingredientCheck.value = id;
        ingredientArea.appendChild(ingredientCheck);
        ingredientArea.appendChild(ingredientLabel);
        ingredientsContainer.appendChild(ingredientArea);
    });
};

const addProduct = async () => {
    console.log("Evnet");
    try {
        const name = document.querySelector("#name");
        const basePrice = document.querySelector("#basePrice");
        const cost = document.querySelector("#cost");
        const taxes = document.querySelector("#taxes");
        const stock = document.querySelector("#stock");
        const type = document.querySelector("#type");
        const product = {
            name: name.value,
            basePrice: Number(basePrice.value),
            cost: Number(cost.value),
            taxes: Number(`${taxes.value}.00`),
            stock: Number(stock.value),
            type: type.value,
            availability: true,
        };

        const token = JSON.parse(localStorage.getItem("token-food"));
        const response = await fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const productAdded = await response.json();
        location.href = "/pages/productManagment.html"
    } catch (error) {
        console.log(error);
    }
};
