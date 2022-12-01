import style from "./SideBarMenu.module.css";
import IMG_BLACK_LOGO from "/img/black-logo.png"
const SideBarMenu = () => {
    return (
        <>
            <div className={style.layoutMenu}>
                <div className={style.menuTop}>
                    <h2>Welcome to</h2>
                    <h2>Food System </h2>
                    <h2 className={style.username}>Username</h2>
                    <a href="/"><img src={IMG_BLACK_LOGO} alt="Logo Food System" /></a>
                </div>
                <div className={style.menuBottom}>
                    <a href=""> Order Management</a>
                    <a href=""> Product Management</a>
                    <a href=""> Ingredient Management</a>
                    <a href=""> Users Management</a>
                    <a href=""> Role Management</a>
                    <a href=""> Log Out</a>
                </div>
            </div>
        </>
    )
}

export default SideBarMenu