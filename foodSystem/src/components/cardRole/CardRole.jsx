import style from "./CardRole.module.css";

const CardRole = () => {
    return (
        <div className={style.card}>
            <form action="" className={style.form}>
                <h1>Add Role</h1>
                <div className={style.inputForm} >
                    <input type="text" nombre="nombre" name="nameInput" placeholder="Name"/>
                </div>
                <div className={style.btnCard}>
                    <input type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}

export default CardRole