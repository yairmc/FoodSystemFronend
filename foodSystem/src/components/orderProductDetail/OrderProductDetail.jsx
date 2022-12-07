import style from "./OrderProductDetail.module.css";
import IMG_QUIT from "/img/quit.svg";

const OrderProductDetail = (props) => {
    const { product } = props;
    return (
        <div className={style.productDetail}>
            <div className={style.orderDetails}>
                <div className={style.pd}>
                    <h3>Product</h3>
                    <p>{product.name}</p>
                </div>

                <div className={style.pd}>
                    <h3>Quantity</h3>
                    <p>{product.quantity}</p>
                </div>

                <div className={style.pd}>
                    <h3>Details</h3>
                    <p>Detail</p>
                </div>

                <div className={style.pd}>
                    <h3>Amount</h3>
                    <p>{product.amount}</p>
                </div>
            </div>
            <div className={style.btnExit}>
                <button><img src={IMG_QUIT} alt="Quit Product" /></button>
            </div>
        </div>
    )
}

export default OrderProductDetail