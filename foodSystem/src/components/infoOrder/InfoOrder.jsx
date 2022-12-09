import style from "./InforOrder.module.css";

const InfoOrder = () => {
    return (
        <div className={style.cardOrderInfo}>
            <div className={style.infoLeft}>
                <h3>All Orders</h3>
                <h3>On Hold</h3>
                <h3>Ready to Serve</h3>
                <h3>Paid Out</h3>
                <h3>Canceled</h3>
            </div>
            <div className={style.infoRight}>
                <p className={style.p}>200</p>
                <p className={style.p}>10</p>
                <p className={style.p}>05</p>
                <p className={style.p}>182</p>
                <p className={style.p}>03</p>
            </div>
        </div>
    )
}

export default InfoOrder