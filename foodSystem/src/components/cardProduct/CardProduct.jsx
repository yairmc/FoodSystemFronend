import style from "./CardProduct.module.css";
const CardProduct = () => {
    return (
        <div className={style.card}>
            <h1>Order ID</h1>
            <div>
                <div className={style.productInfo}>
                    <h4>Ingredients</h4>
                    <p>Ingredients</p>
                </div>
                <div className={style.productInfo}>
                    <h4>Cost</h4>
                    <p>Cost</p>
                </div>
                <div className={style.productInfo}>
                    <h4>Base Price</h4>
                    <p>102.00</p>
                </div>
                <div className={style.productInfo}>
                    <h4>Taxes</h4>
                    <p>20.00</p>
                </div>
                <div className={style.productInfo}>
                    <h4>Stock</h4>
                    <p>50</p>
                </div>
            </div>
        </div>
    )
}

export default CardProduct