import style from "./CardProduct.module.css";
import useProducts from "../../hooks/useProducts";

const CardProduct = (props) => {
    const { handleSelectProduct } = useProducts();
    const { product } = props;
    return (
        <div className={style.card} onClick={()=>handleSelectProduct(product)}>
            <h1>{product.name}</h1>
            <div>
                <div className={style.productInfo}>
                    <h4>Cost</h4>
                    <p>{product.cost}</p>
                </div>
                <div className={style.productInfo}>
                    <h4>Stock</h4>
                    <p>{product.stock}</p>
                </div>
            </div>
        </div>
    )
}

export default CardProduct