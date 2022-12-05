import style from "./CardOrder.module.css"
const CardOrder = () => {
    return (
        <div className={style.card}>
            <h1>Order ID</h1>
            <div>
                <div className={style.orderInfo}>
                    <h4>Table</h4>
                    <p>#4</p>
                </div>
                <div className={style.orderInfo}>
                    <h4>Waiter</h4>
                    <p>Username</p>
                </div>
                <div className={style.orderInfo}>
                    <h4>Date</h4>
                    <p>04/12/2022</p>
                </div>
                <div className={style.orderInfo}>
                    <h4>State</h4>
                    <p>Paid Out</p>
                </div>
                <div className={style.orderInfo}>
                    <h4>Subtotal</h4>
                    <p>230.00</p>
                </div>
                <div className={style.orderInfo}>
                    <h4>Total</h4>
                    <p>250.00</p>
                </div>
            </div>
            <div className={style.btns}>
                <button className={style.btnEdit}>See More</button>
                <button className={style.btnDelete}>Delete</button>
            </div>
        </div>
    )
}

export default CardOrder