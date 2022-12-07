import style from "./ModalProducts.module.css";
import useModal from "../../hooks/useModal";
import { CardProduct } from "../../components";

const ModalProducts = () => {
    const { handleOnChangeModal } = useModal();
    return (
        <div className={style.main}>
            <h1>Choose a product</h1>
            <div className={style.productOrder}>
                <div className={style.cardContainer}>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>

            </div>
            <div className={style.txtArea}>
                <textarea name="" id="" placeholder="Detail"></textarea>
            </div>
            <div className={style.button}>
                <button onClick={()=>handleOnChangeModal(false)}>
                    Add Product
                </button>
            </div>
        </div>

    )
}

export default ModalProducts