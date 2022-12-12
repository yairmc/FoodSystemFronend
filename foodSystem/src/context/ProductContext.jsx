import { createContext, useState } from "react";
import {
    fetchAddProduct,
    fetchAllProducts,
    fetchUpdateProduct,
    fetchDeleteProduct
} from "../API/apiProducts"

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productsFilter, setProductsFilter] = useState([]);
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
    const [productAction, setProductAction] = useState({ action: "add", id: -1 });

    {/**Empieza todo de GetAllProducts */ }
    const getProducts = async () => {
        try {
            const result = await fetchAllProducts();
            setProducts(result);
            setProductsFilter(result);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSelectProduct = (productAux) => {
        setProductSelected(productAux);
        setProduct(productAux);
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
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const handleOnUpdate = async () => {
        try {
            const result = await fetchUpdateProduct({ ...product });
            if (result) {
                setProduct(result);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error.response);
            return false;
        }
    }

    const handleOnDeleteProduct = async (id) => {
        try {
            const result = await fetchDeleteProduct(id);
            if (result) {
                await getProducts();
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
                handleOnChangeFormInput,
                productAction,
                setProductAction,
                setProduct,
                setProductSelected,
                handleOnUpdate,
                handleOnDeleteProduct,
                productsFilter,
                setProductsFilter
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider }
export default ProductContext