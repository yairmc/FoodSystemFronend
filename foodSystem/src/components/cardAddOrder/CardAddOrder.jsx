import style from "./CardAddOrder.module.css";
import { OrderProductDetail } from "../../components";
const CardAddOrder = () => {
    return (
        <div className={style.card}>
            <h1>Order</h1>
            <OrderProductDetail />
            <OrderProductDetail />
            <OrderProductDetail />
            <OrderProductDetail />
            <OrderProductDetail />
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