import style from "./CardAddOrder.module.css";
import { OrderProductDetail } from "../../components";
import useProducts from "../../hooks/useProducts";

const CardAddOrder = () => {
    const { productsOrder } = useProducts();
    return (
        <div className={style.card}>
            <h1>Order</h1>
            {
                productsOrder.map((product, index) => (
                    <OrderProductDetail
                        key={index}
                        product={product}
                    />
                ))
            }
            <div>
                <div className={style.amountContainer}>
                    <div className={style.amountLeft}>
                        <h3>Subtotal</h3>
                        <h3>Total</h3>
                    </div>
                    <div className={style.amountRight}>
                        <p>Subtotal</p>
                        <p>Total</p>
                    </div>
                </div>

                <div className={style.btn}>
                    <button>
                        Save Order
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CardAddOrder