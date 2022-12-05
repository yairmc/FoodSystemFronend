import style from "./ModalOrder.module.css";

const ModalOrder = () => {
    return (
        <div className={style.main}>
            <div className={style.modal}>
                <div className={style.section}>
                    <div className={style.cardOrderDetail}>
                        <h2>Order Detail</h2>
                        <div className={style.productDetail}>
                            <div className={style.pd}>
                                <h3>Product</h3>
                                <p>Product Name</p>
                            </div>

                            <div className={style.pd}>
                                <h3>Details</h3>
                                <p>Detail</p>
                            </div>

                            <div className={style.pd}>
                                <h3>Quantity</h3>
                                <p>02</p>
                            </div>

                            <div className={style.pd}>
                                <h3>Amount</h3>
                                <p>Amount</p>
                            </div>

                        </div>

                        <div className={style.btn}>
                            <button>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOrder