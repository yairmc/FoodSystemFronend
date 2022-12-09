import style from "./AdminMasterPage.module.css";
import useModal from "../../hooks/useModal";
import { Outlet } from "react-router-dom";
import { SideBarMenu, ModalOrder, ModalProducts } from "./../../components";
const AdminMasterPage = () => {
    const { isModalOpen, modalSelected } = useModal();

    const ModalOption = {
        orderModal: <ModalOrder />,
        productsModal: <ModalProducts/>
    };
    return (
        <section className={style.layoutMasterPage}>
            {isModalOpen ? (
                <div className={style.modals}>
                    <div className={style.modal}>{ModalOption[modalSelected]}</div>
                </div>
            ) : null}
            <SideBarMenu />
            <Outlet />
        </section>
    )
}

export default AdminMasterPage