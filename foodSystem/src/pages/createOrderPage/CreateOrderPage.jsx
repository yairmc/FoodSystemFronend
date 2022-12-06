import style from "./CreateOrderPage.module.css"
import { CardAddOrder, InfoOrder, ServiceDetail } from "../../components";

const CreateOrderPage = () => {
    return (
        <div className={style.mainContainer}>
            <div>
                <CardAddOrder />
            </div>
            <div>
                <ServiceDetail />
                <InfoOrder />
                <div className={style.button}>
                    <button>Add Product</button>
                </div>
            </div>
        </div>
    )
}

export default CreateOrderPage