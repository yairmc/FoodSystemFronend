import style from "./ModalProducts.module.css";
import useModal from "../../hooks/useModal";
import { CardProduct } from "../../components";
import useProducts from "../../hooks/useProducts";

const ModalProducts = () => {
    const { handleOnChangeModal } = useModal();
    const { products, handleAddProductOrder, productSelected } = useProducts();
    return (
        <div className={style.main}>
            <h1>Choose a product</h1>
            <div className={style.productOrder}>
                <div className={style.cardContainer}>
                    {
                        products.map((product, index) => (
                            <CardProduct
                                key={index}
                                product={product}
                            />
                        ))
                    }
                </div>

            </div>
            <div className={style.txtArea}>
                <textarea name="" id="" placeholder="Detail"></textarea>
            </div>
            <div className={style.button}>
                <button onClick={() => {
                    const f1 = handleOnChangeModal(false);
                    const f2 = handleAddProductOrder(productSelected);
                    f1();
                }}>
                    Add Product
                </button>
            </div>
        </div>

    )
}

export default ModalProducts