import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./AddProduct.module.css";
import useProducts from "../../hooks/useProducts";


const AddProduct = () => {
    let navigate = useNavigate();
    const {
        handleAddProduct,
        handleOnChangeFormInput,
        productAction,
        productSelected,
        product,
        handleOnUpdate
    } = useProducts();
    const [actionSuccess, setActionSuccess] = useState({ msg: "", state: false, success: false });
    const productAux = productSelected ? productSelected : product;
    const handleOnSubmit = async (evt) => {
        evt.preventDefault();
        if (productAction.action === "add") {
            const isProductAdded = await handleAddProduct();
            if (isProductAdded) {
                setActionSuccess({ msg: "Producto agregado", state: true, success: true });
                setTimeout(() => {
                    setActionSuccess({ msg: "", state: false });
                    navigate("/admin/product");
                }, 2000);
            } else {
                setActionSuccess({ msg: "Todos los campos son obligatorios", state: true, success: false });
                setTimeout(() => {
                    setActionSuccess({ msg: "", state: false });
                }, 2000);
            }
        } else if (productAction.action === "edit") {
            const isProductUpdated = await handleOnUpdate();
            if (isProductUpdated) {
                setActionSuccess({ msg: "Producto actualizado", state: true, success: true });
                setTimeout(() => {
                    setActionSuccess({ msg: "", state: false });
                    navigate("/admin/product");
                }, 2000);
            } else {
                setActionSuccess({ msg: "Todos los campos son obligatorios", state: true, success: false });
                setTimeout(() => {
                    setActionSuccess({ msg: "", state: false });
                }, 2000);
            }
        }
    }
    return (
        <>
            <div className={style.generalCardProduct}>
                <div className={style.cardProduct}>
                    <form action="" className={style.formProduct}>
                        <h1>{productAction.action} Product</h1>
                        <div className={style.inputProduct} >
                            <input type="text" nombre="nombre" name="name" placeholder="Name"
                                defaultValue={productAux?.name}
                                onChange={handleOnChangeFormInput} />
                        </div>
                        <div className={style.inputProduct} >
                            <input type="text" cost="cost" name="cost" placeholder="Cost"
                                defaultValue={productAux?.cost}
                                onChange={handleOnChangeFormInput} />
                        </div>

                        <div className={style.inputProduct} >
                            <input type="text" baseprice="basePrice" name="basePrice" placeholder="Base price"
                                defaultValue={productAux?.basePrice}
                                onChange={handleOnChangeFormInput} />
                        </div>

                        <div className={style.inputProduct} >
                            <input type="text" taxes="taxes" name="taxes" placeholder="Taxes"
                                defaultValue={productAux?.taxes}
                                onChange={handleOnChangeFormInput} />
                        </div>

                        <div className={style.inputProduct} >
                            <input type="number" stock="stock" name="stock" placeholder="Stock"
                                defaultValue={productAux?.stock}
                                onChange={handleOnChangeFormInput} />
                        </div>
                        <div>
                            {
                                actionSuccess.state ? (
                                    <p className={`${style.messageAction} 
                                    ${actionSuccess.success ?
                                            style.success :
                                            style.error}`}>
                                        {actionSuccess.msg}
                                    </p>
                                ) : null
                            }
                        </div>

                        <div className={style.btnCard}>
                            <input type="submit" value={productAction.action} onClick={handleOnSubmit} />
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default AddProduct