import style from "./SideBarMenu.module.css";
import { Link } from "react-router-dom";
import IMG_BLACK_LOGO from "/img/black-logo.png"
const SideBarMenu = () => {
    return (
        <>
            <div className={style.layoutMenu}>
                <div className={style.menuTop}>
                    <h2>Welcome to</h2>
                    <h2>Food System </h2>
                    <h2 className={style.username}>Username</h2>
                    <Link to="/menu"><img src={IMG_BLACK_LOGO} alt="Logo Food System" /></Link>
                </div>
                <div className={style.menuBottom}>
                    <Link to="/admin/order/add">Create Order</Link>
                    <Link to="/admin/order">Order Management</Link>
                    <Link to="/admin/product">Product Management</Link>
                    <Link to="/admin/ingredient">Ingredient Management</Link>
                    <Link>Create Product</Link>
                    <Link to="/admin/user">Users Management</Link>
                    <Link to="/admin/role">Role Management</Link>
                    <Link to="/" className={style.logOut}>Log Out</Link>
                </div>
            </div>
        </>
    )
}

export default SideBarMenu