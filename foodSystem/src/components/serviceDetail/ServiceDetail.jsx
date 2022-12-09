import style from "./ServiceDetail.module.css";

const ServiceDetail = () => {
    return (
        <div className={style.cardContainer}>
            <h2>Service Detail</h2>
            <div className={style.inputs}>
                <input type="text" placeholder="Waiter" />
                <input type="number" placeholder="Table" />
            </div>
        </div>
    )
}

export default ServiceDetail