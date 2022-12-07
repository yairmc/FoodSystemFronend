import style from "./CreateOrderPage.module.css"
import { CardAddOrder, InfoOrder, ServiceDetail } from "../../components";
import useModal from "../../hooks/useModal";

const CreateOrderPage = () => {

    const { handleOnChangeModal, handleOnChangeModalSelected } = useModal();

    const handleOnClickModal = (modal) => {
        handleOnChangeModal(true);
        handleOnChangeModalSelected(modal)
    }
    return (
        <div className={style.mainContainer}>
            <div>
                <CardAddOrder />
            </div>
            <div>
                <ServiceDetail />
                <InfoOrder />
                <div className={style.button}>
                    <button onClick={() => { handleOnClickModal("productsModal") }}>Add Product</button>
                </div>
            </div>
        </div >
    )
}

export default CreateOrderPage