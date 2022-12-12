import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import style from "./CardProductNotReady.module.css";

const CardProductNotReady = ({ product }) => {
    const { name, basePrice, cost, stock, taxes, id } = product;
    let navigate = useNavigate();
    const { setProductAction, handleSelectProduct, handleOnDeleteProduct } = useProducts();
    const [modalOption, setModalOption] = useState(false);

    const handleOnClick = () => {
        setProductAction({ action: "edit", id });
        handleSelectProduct(product);
        navigate("/admin/product/add");
    }
    const handleOnClickOpenModal = (state) => {
        console.log(state);
        setModalOption(state);
    }
    const handleOnClickDelete = async () => {
        await handleOnDeleteProduct(id);
        setModalOption(false);
    }

    return (
        <div className={style.card}>
            <h1>{name}</h1>
            <div>
                <div className={style.productInfo}>
                    <h4>Cost:</h4>
                    <p>{cost}</p>
                </div>
                <div className={style.productInfo}>
                    <h4>Base Price:</h4>
                    <p>{basePrice}</p>
                </div>
                <div className={style.productInfo}>
                    <h4>Taxes:</h4>
                    <p>{taxes}</p>
                </div>
                <div className={style.productInfo}>
                    <h4>Stock</h4>
                    <p>{stock}</p>
                </div>
            </div>
            <div className={style.btns}>
                <button className={style.btnEdit} onClick={handleOnClick}>Edit</button>
                <div className={style.optionModal}>
                    <button
                        className={style.btnDelete}
                        onClick={() => handleOnClickOpenModal(true)}>
                        Delete
                    </button>
                    {
                        modalOption ? (
                            <div className={style.modalOptionSection}>
                                <p>Seguro de elimiarlo?</p>
                                <div className={style.modalOption__actions}>
                                    <button className={style.modalOption__cancel}
                                        onClick={() => handleOnClickOpenModal(false)}
                                    >No</button>
                                    <button className={style.modalOption__acept}
                                        onClick={handleOnClickDelete}
                                    >
                                        Si
                                    </button>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default CardProductNotReady