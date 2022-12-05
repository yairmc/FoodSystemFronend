import style from "./OrderPage.module.css";
import { CardOrder, Search } from "../../components";
const OrderPage = () => {
    return (
        <div className={style.main}>
            <div className={style.searchContainer}>
                <Search />
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