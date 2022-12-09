import { createContext, useState } from "react";
import { fetchAddProduct, fetchAllProducts } from "../API/apiProducts"

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productsOrder, setProductsOrder] = useState([]);
    const [productSelected, setProductSelected] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        basePrice: "",
        cost: "",
        availability: true,
        taxes: "",
        type: "Packaged",
        stock: ""
    });

    {/**Empieza todo de GetAllProducts */ }
    const getProducts = async () => {
        try {
            const result = await fetchAllProducts();
            setProducts(result);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSelectProduct = () => {
        setProductSelected(product);
    }

    const handleAddProductOrder = () => {
        if (productSelected) {
            const newProducts = [...productsOrder, productSelected];
            setProductsOrder(newProducts);
            setProductSelected(null);
        }
    }

    {/**Empieza addProduct */ }
    const handleAddProduct = async () => {
        try {
            console.log(product);
            const result = await fetchAddProduct(product);
            if (result) {
                setProduct(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnChangeFormInput = (e) => {
        let { value, name } = e.target;
        if (name === "cost" || name === "basePrice" || name === "taxes" || name === "stock") {
            value = parseFloat(value);
        }
        setProduct({
            ...product,
            [name]: value
        });
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                getProducts,
                productSelected,
                handleSelectProduct,
                productsOrder,
                handleAddProductOrder,
                handleAddProduct,
                handleOnChangeFormInput

            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider }
export default ProductContext