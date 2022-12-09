import style from "./InfoUser.module.css";

const InfoUser = () => {
    return (
        <div className={style.cardUserInfo}>
            <div className={style.infoLeft}>
                <h3>All Users</h3>
                <h3>Administrator</h3>
                <h3>Kitchen Users</h3>
                <h3>Waiter Users</h3>
            </div>
            <div className={style.infoRight}>
                <p className={style.p}>20</p>
                <p className={style.p}>01</p>
                <p className={style.p}>04</p>
                <p className={style.p}>15</p>
            </div>
        </div>
    )
}

export default InfoUser