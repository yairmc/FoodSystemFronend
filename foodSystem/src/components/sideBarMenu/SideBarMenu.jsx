import style from "./SideBarMenu.module.css";
import { useNavigate } from "react-router-dom";
import IMG_BLACK_LOGO from "/img/black-logo.png"
const SideBarMenu = () => {
    let navigate = useNavigate();

    const handleOnSubmitOrder = (evt) => {
        evt.preventDefault();
        navigate("/admin/order");
    }
    const handleOnSubmitProduct = (evt) => {
        evt.preventDefault();
        navigate("/admin/product");
    }
    const handleOnSubmitIngredient = (evt) => {
        evt.preventDefault();
        navigate("/admin/ingredient");
    }

    return (
        <>
            <div className={style.layoutMenu}>
                <div className={style.menuTop}>
                    <h2>Welcome to</h2>
                    <h2>Food System </h2>
                    <h2 className={style.username}>Username</h2>
                    <a href="/menu"><img src={IMG_BLACK_LOGO} alt="Logo Food System" /></a>
                </div>
                <div className={style.menuBottom}>
                    <a href=""> Create Order</a>
                    <a href="/admin/order" onClick={handleOnSubmitOrder}> Order Management</a>
                    <a href="/admin/product" onClick={handleOnSubmitProduct}> Product Management</a>
                    <a href="/admin/ingredient" onClick={handleOnSubmitIngredient}> Ingredient Management</a>
                    <a href=""> Create Product</a>
                    <a href=""> Users Management</a>
                    <a href=""> Role Management</a>
                    <a href="/" className={style.logOut}> Log Out</a>
                </div>
            </div>
        </>
    )
}

export default SideBarMenu