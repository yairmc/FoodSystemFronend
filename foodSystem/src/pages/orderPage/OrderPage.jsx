import style from "./OrderPage.module.css";
import { CardOrder, Cmbx } from "../../components";
const OrderPage = () => {
    return (
        <div className={style.main}>
            <div className={style.searchContainer}>
                <Cmbx />
            </div>
            <div className={style.cardsContainer}>
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
                <CardOrder />
            </div>
        </div>
    )
}

export default OrderPage