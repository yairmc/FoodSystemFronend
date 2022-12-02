import style from "./AdminMasterPage.module.css";
import { Outlet } from "react-router-dom";
import { SideBarMenu } from "./../../components";
const AdminMasterPage = () => {
    return (
        <section className={style.layoutMasterPage}>
            <SideBarMenu />
            <Outlet />
        </section>
    )
}

export default AdminMasterPage