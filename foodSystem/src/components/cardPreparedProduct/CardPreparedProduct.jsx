import style from "./CardPreparedProduct.module.css";

const CardPreparedProduct = () => {

    return (
        <div className={style.card}>
            <h1>Name Product</h1>
            <div>
                <div className={style.productInfo}>
                    <h4>Cost:</h4>
                    <p>100</p>
                </div>
                <div className={style.productInfo}>
                    <h4>Base Price:</h4>
                    <p>150</p>
                </div>
                <div className={style.productInfo}>
                    <h4>Taxes:</h4>
                    <p>20</p>
                </div>
                <div className={style.productInfo}>
                    <h4>Stock</h4>
                    <p>50</p>
                </div>
            </div>
            <div className={style.btns}>
                <button className={style.btnEdit}>
                    <a href="/admin/product/add"> Edit</a>
                </button>
                <button className={style.btnDelete}>Delete</button>
            </div>
        </div>
    )
}

export default CardPreparedProduct