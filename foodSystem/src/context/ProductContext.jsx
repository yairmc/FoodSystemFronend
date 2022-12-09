import { createContext, useState } from "react";
import { fetchAllProducts } from "../API/apiProducts"

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productsOrder, setProductsOrder] = useState([]);
    const [productSelected, setProductSelected] = useState(null);

    const getProducts = async () => {
        try {
            const result = await fetchAllProducts();
            setProducts(result);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSelectProduct = (product) => {
        setProductSelected(product);
    }

    const handleAddProductOrder = () => {
        if (productSelected) {
            const newProducts = [...productsOrder, productSelected];
            setProductsOrder(newProducts);
            setProductSelected(null);
        }
    }

    return (
        <ProductContext.Provider
            value={{
                products,
                getProducts,
                productSelected,
                handleSelectProduct,
                productsOrder,
                handleAddProductOrder

            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider }
export default ProductContext